"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { CheckCircle, Loader } from "lucide-react";
import { trackAcquisition } from "@/lib/analytics";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import {
  contactServices,
  serviceFromPath,
  validService,
} from "@/lib/acquisition";
import { sendContact } from "@/app/actions/contact";
import GlowButton from "./GlowButton";
import WhatsAppCta from "./WhatsAppCta";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm({
  className = "",
  initialService,
  initialSource,
}: {
  className?: string;
  initialService?: string;
  initialSource?: string;
}) {
  const id = useId();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: validService(initialService) || "a-definir",
      budget: "",
      deadline: "",
    },
  });
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");
  const startedAt = useRef(0);
  const submittedAt = useRef(0);
  const source = useRef(initialSource || "/contact");
  const honeypot = useRef<HTMLInputElement>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    source.current = initialSource || "/contact";
    if (!initialSource) {
      try {
        source.current = sessionStorage.getItem("contact-source") || "/contact";
      } catch {
        /* Storage is optional. */
      }
    }
    const inferred =
      validService(initialService) || serviceFromPath(source.current);
    if (inferred) setValue("projectType", inferred);
  }, [initialService, initialSource, setValue]);

  useEffect(() => {
    if (success) successRef.current?.focus();
  }, [success]);

  const onSubmit = async (data: ContactInput) => {
    setServerError(null);
    try {
      const res = await sendContact({
        ...data,
        source: source.current,
        company: honeypot.current?.value ?? "",
        elapsedMs: submittedAt.current - startedAt.current,
        token,
      });
      if (res.ok) {
        trackAcquisition("contact_success", {
          service: data.projectType,
          source: source.current,
        });
        setSuccess(true);
        reset();
      } else {
        setServerError(res.error);
      }
    } catch {
      setServerError(
        "La demande n’a pas pu être envoyée. Réessayez ou contactez-moi sur WhatsApp.",
      );
    } finally {
      turnstileRef.current?.reset();
      setToken("");
    }
  };

  if (success)
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-stroke bg-background-soft p-10 text-center ${className}`}
      >
        <CheckCircle className="h-10 w-10 text-success" aria-hidden="true" />
        <h2 className="text-lg font-semibold">Message envoyé !</h2>
        <p className="text-sm text-foreground-muted">
          Merci, je reviens vers vous sous 24h pour préciser votre besoin.
        </p>
      </div>
    );

  const error = (field: keyof ContactInput) =>
    errors[field] && (
      <span id={`${id}-${field}-error`} className="text-xs text-primary">
        {errors[field]?.message}
      </span>
    );
  const accessible = (field: keyof ContactInput) => ({
    "aria-invalid": !!errors[field],
    "aria-describedby": errors[field] ? `${id}-${field}-error` : undefined,
  });

  return (
    <form
      onSubmit={(event) => {
        submittedAt.current = Date.now();
        void handleSubmit(onSubmit)(event);
      }}
      className={`grid gap-4 ${className}`}
      noValidate
    >
      <div>
        <h2 className="text-xl font-semibold">Décrivez votre projet</h2>
        <p className="mt-2 text-sm text-foreground-muted">
          Expliquez-moi ce que vous voulez faire, avec vos mots. Je vous réponds
          sous 24h pour en discuter avant de préparer le devis.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1">
          <label
            htmlFor={`${id}-name`}
            className="text-sm text-foreground-muted"
          >
            Nom complet
          </label>
          <input
            id={`${id}-name`}
            autoComplete="name"
            className="input"
            {...accessible("name")}
            {...register("name")}
          />
          {error("name")}
        </div>
        <div className="grid gap-1">
          <label
            htmlFor={`${id}-email`}
            className="text-sm text-foreground-muted"
          >
            Adresse email
          </label>
          <input
            id={`${id}-email`}
            type="email"
            autoComplete="email"
            className="input"
            {...accessible("email")}
            {...register("email")}
          />
          {error("email")}
        </div>
      </div>
      <div className="grid gap-1">
        <label
          htmlFor={`${id}-projectType`}
          className="text-sm text-foreground-muted"
        >
          Service souhaité
        </label>
        <select
          id={`${id}-projectType`}
          className="input"
          {...accessible("projectType")}
          {...register("projectType")}
        >
          <option value="">Choisir un service</option>
          {contactServices.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {error("projectType")}
      </div>
      <div className="grid gap-1">
        <label
          htmlFor={`${id}-message`}
          className="text-sm text-foreground-muted"
        >
          Votre besoin
        </label>
        <textarea
          id={`${id}-message`}
          placeholder="Quel problème souhaitez-vous résoudre ? Qui utilisera le produit ?"
          rows={4}
          className="textarea"
          {...accessible("message")}
          {...register("message")}
        />
        {error("message")}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1">
          <label
            htmlFor={`${id}-budget`}
            className="text-sm text-foreground-muted"
          >
            Budget indicatif (facultatif)
          </label>
          <select
            id={`${id}-budget`}
            className="input"
            {...accessible("budget")}
            {...register("budget")}
          >
            <option value="">À définir</option>
            <option value="moins-650k">Moins de 650 000 FCFA</option>
            <option value="650k-1m">650 000 à 1 000 000 FCFA</option>
            <option value="1m-2m">1 à 2 millions FCFA</option>
            <option value="plus-2m">Plus de 2 millions FCFA</option>
          </select>
          {error("budget")}
        </div>
        <div className="grid gap-1">
          <label
            htmlFor={`${id}-deadline`}
            className="text-sm text-foreground-muted"
          >
            Échéance (facultative)
          </label>
          <select
            id={`${id}-deadline`}
            className="input"
            {...accessible("deadline")}
            {...register("deadline")}
          >
            <option value="">À définir</option>
            <option value="1-mois">Dans le mois</option>
            <option value="1-3-mois">Dans 1 à 3 mois</option>
            <option value="plus-3-mois">Dans plus de 3 mois</option>
          </select>
          {error("deadline")}
        </div>
      </div>
      <input
        ref={honeypot}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      {SITE_KEY ? (
        <div className="overflow-x-auto">
          <Turnstile
            ref={turnstileRef}
            siteKey={SITE_KEY}
            options={{ theme: "auto", size: "flexible" }}
            onSuccess={setToken}
            onExpire={() => setToken("")}
            onError={() => {
              setToken("");
              setServerError(
                "La vérification n’a pas abouti. Vous pouvez aussi me contacter sur WhatsApp.",
              );
            }}
          />
        </div>
      ) : (
        <p className="text-sm text-foreground-muted" role="status">
          Le formulaire est momentanément indisponible. Contactez-moi
          directement sur WhatsApp.
        </p>
      )}
      {serverError && (
        <p className="text-sm text-error" role="alert">
          {serverError}
        </p>
      )}
      <p className="text-xs leading-relaxed text-foreground-muted">
        J’utilise ces informations pour vous répondre.{" "}
        <Link href="/politique-confidentialite" className="underline">
          Confidentialité
        </Link>
      </p>
      <GlowButton
        type="submit"
        disabled={isSubmitting || !SITE_KEY || !token}
        className="w-fit"
      >
        {isSubmitting ? (
          <>
            <Loader className="h-4 w-4 animate-spin" />
            Envoi…
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </GlowButton>
      {(!SITE_KEY || serverError) && (
        <WhatsAppCta label="Me contacter sur WhatsApp" />
      )}
    </form>
  );
}
