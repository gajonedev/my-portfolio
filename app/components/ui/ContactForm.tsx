"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { CheckCircle, Loader } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { sendContact } from "@/app/actions/contact";
import GlowButton from "./GlowButton";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm({
  className = "",
}: {
  className?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");

  const startedAt = useRef(0);
  const submittedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  // Record when the form became interactive (anti-bot time-trap baseline)
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onSubmit = async (data: ContactInput) => {
    setServerError(null);
    const res = await sendContact({
      ...data,
      company: honeypot.current?.value ?? "",
      elapsedMs: submittedAt.current - startedAt.current,
      token,
    });
    if (res.ok) {
      setSuccess(true);
      reset();
    } else {
      setServerError(res.error);
      // Turnstile tokens are single-use — get a fresh one for the retry.
      turnstileRef.current?.reset();
      setToken("");
    }
  };

  if (success) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-stroke bg-background-soft p-10 text-center ${className}`}
      >
        <CheckCircle className="w-10 h-10 text-success" />
        <h3 className="font-display font-semibold text-foreground text-lg">
          Message envoyé !
        </h3>
        <p className="font-body text-foreground-muted text-sm">
          Merci, je reviens vers vous sous 24h. À très vite.
        </p>
        {/* <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-2 font-body text-primary text-sm hover:underline"
        >
          Envoyer un autre message
        </button> */}
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        submittedAt.current = Date.now();
        void handleSubmit(onSubmit)(e);
      }}
      className={`grid gap-4 ${className}`}
      noValidate
    >
      <div className="gap-4 grid md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Nom complet"
            autoComplete="name"
            className="input"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <span className="font-body text-primary text-xs">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="input"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <span className="font-body text-primary text-xs">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Type de projet (app mobile, SaaS, e-commerce…)"
          className="input"
          aria-invalid={!!errors.projectType}
          {...register("projectType")}
        />
        {errors.projectType && (
          <span className="font-body text-primary text-xs">
            {errors.projectType.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          placeholder="Expliquez votre besoin"
          rows={4}
          className="textarea"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <span className="font-body text-primary text-xs">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Honeypot — hidden from humans, tempting for bots */}
      <input
        ref={honeypot}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="left-[-9999px] absolute opacity-0 w-0 h-0"
      />

      {/* Cloudflare Turnstile */}
      {SITE_KEY ? (
        <Turnstile
          ref={turnstileRef}
          siteKey={SITE_KEY}
          options={{ theme: "dark", size: "flexible" }}
          onSuccess={setToken}
          onExpire={() => setToken("")}
          onError={() => setToken("")}
        />
      ) : (
        <p className="font-body text-warning text-xs">
          Turnstile non configuré (NEXT_PUBLIC_TURNSTILE_SITE_KEY manquant).
        </p>
      )}

      {serverError && (
        <p className="font-body text-error text-sm" role="alert">
          {serverError}
        </p>
      )}

      <GlowButton type="submit" disabled={isSubmitting} className="w-fit">
        {isSubmitting ? (
          <>
            <Loader className="w-4 h-4 animate-spin" />
            Envoi…
          </>
        ) : (
          "Envoyer la demande"
        )}
      </GlowButton>
    </form>
  );
}
