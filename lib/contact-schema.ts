import { z } from "zod";

// Validated form fields (shared by the client form and the server action)
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Votre nom est requis.")
    .max(80, "Nom trop long."),
  email: z
    .string()
    .trim()
    .email("Adresse email invalide.")
    .max(120, "Email trop long."),
  projectType: z
    .string()
    .trim()
    .min(2, "Précisez le type de projet.")
    .max(80, "Type de projet trop long."),
  message: z
    .string()
    .trim()
    .min(10, "Message trop court (10 caractères minimum).")
    .max(2000, "Message trop long (2000 caractères maximum)."),
});

export type ContactInput = z.infer<typeof contactSchema>;

// Anti-bot: minimum time (ms) a human takes before submitting
export const MIN_FILL_MS = 3000;
