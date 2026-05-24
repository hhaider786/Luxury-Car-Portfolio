"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import type { ActionResult, FieldError } from "@/lib/actions/validation";

const initial: ActionResult = { status: "idle" };

function fieldError(state: ActionResult, field: string): string | undefined {
  if (state.status !== "error") return;
  return state.errors?.find((e: FieldError) => e.field === field)?.message;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initial);

  return (
    <form action={formAction} noValidate className="bg-[#0f0f0f] border border-[#e5c158]/15 p-6 sm:p-8 space-y-5">
      {[
        { id: "name", label: "Your name", type: "text", autoComplete: "name" },
        { id: "email", label: "Your email", type: "email", autoComplete: "email" },
        { id: "subject", label: "Subject (optional)", type: "text", autoComplete: "off" },
      ].map((f) => {
        const err = fieldError(state, f.id);
        return (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-[#aaa] text-[0.65rem] tracking-[0.25em] uppercase mb-2">{f.label}</label>
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              autoComplete={f.autoComplete}
              aria-invalid={!!err}
              aria-describedby={err ? `${f.id}-err` : undefined}
              className="w-full bg-[#111] border border-[#e5c158]/20 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors"
            />
            {err && <p id={`${f.id}-err`} role="alert" className="text-red-400 text-xs mt-1">{err}</p>}
          </div>
        );
      })}

      <div>
        <label htmlFor="message" className="block text-[#aaa] text-[0.65rem] tracking-[0.25em] uppercase mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!fieldError(state, "message")}
          aria-describedby={fieldError(state, "message") ? "message-err" : undefined}
          className="w-full bg-[#111] border border-[#e5c158]/20 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors resize-none"
        />
        {fieldError(state, "message") && (
          <p id="message-err" role="alert" className="text-red-400 text-xs mt-1">{fieldError(state, "message")}</p>
        )}
      </div>

      {state.status === "error" && state.message && <p role="alert" className="text-red-400 text-sm">{state.message}</p>}
      {state.status === "success" && <p role="status" aria-live="polite" className="text-green-400 text-sm">{state.message}</p>}

      <button
        type="submit"
        disabled={pending}
        className="shimmer-gold inline-flex items-center gap-2 px-8 py-4 text-black text-xs tracking-[0.25em] uppercase font-bold disabled:opacity-60"
      >
        <Send size={13} aria-hidden />
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
