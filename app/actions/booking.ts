"use server";

import { headers } from "next/headers";
import {
  validate,
  bookingSchema,
  type ActionResult,
} from "@/lib/actions/validation";
import { rateLimit, getClientKey } from "@/lib/actions/rateLimit";
import { logSubmission } from "@/lib/actions/mockEmail";

type Booking = {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  vehicle?: string;
  passengers?: number;
  notes?: string;
};

export async function makeBooking(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const h = await headers();
  const limit = rateLimit(`booking:${getClientKey(h)}`, 5, 60_000);
  if (!limit.ok) return { status: "error", message: `Too many attempts. Try again in ${limit.retryAfter}s.` };

  const raw = Object.fromEntries(formData.entries());
  const result = validate<Booking>(raw, bookingSchema);
  if (!result.ok) return { status: "error", errors: result.errors };

  const ref = `PC-${Date.now().toString(36).toUpperCase()}`;
  await logSubmission("booking", { ref, ...result.data });

  return {
    status: "success",
    message: `Reservation received. Confirmation #${ref} — our concierge will call ${result.data.phone} within 30 minutes.`,
  };
}
