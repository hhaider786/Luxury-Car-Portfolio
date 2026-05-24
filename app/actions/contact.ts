"use server";

import { headers } from "next/headers";
import {
  validate,
  contactSchema,
  type ActionResult,
} from "@/lib/actions/validation";
import { rateLimit, getClientKey } from "@/lib/actions/rateLimit";
import { logSubmission } from "@/lib/actions/mockEmail";

type ContactData = { name: string; email: string; subject?: string; message: string };

export async function sendContact(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const h = await headers();
  const limit = rateLimit(`chauffeur-contact:${getClientKey(h)}`, 5, 60_000);
  if (!limit.ok) return { status: "error", message: `Too many messages. Try again in ${limit.retryAfter}s.` };

  const raw = Object.fromEntries(formData.entries());
  const result = validate<ContactData>(raw, contactSchema);
  if (!result.ok) return { status: "error", errors: result.errors };

  await logSubmission("chauffeur-contact", result.data);
  return { status: "success", message: "Thank you — our concierge will reply within 24 hours." };
}
