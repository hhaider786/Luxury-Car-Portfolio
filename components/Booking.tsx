"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { makeBooking } from "@/app/actions/booking";
import type { ActionResult, FieldError } from "@/lib/actions/validation";

const initial: ActionResult = { status: "idle" };

function fieldError(state: ActionResult, field: string): string | undefined {
  if (state.status !== "error") return;
  return state.errors?.find((e: FieldError) => e.field === field)?.message;
}

const PROMISES = [
  "Fully insured & licensed fleet",
  "Professional, vetted chauffeurs",
  "24/7 customer support",
  "Complimentary water & WiFi",
];

const VEHICLES = ["Rolls-Royce Phantom", "Mercedes S-Class", "Bentley Flying Spur", "Cadillac Escalade", "Mercedes V-Class", "BMW 7 Series"];

export default function Booking() {
  const [state, formAction, pending] = useActionState(makeBooking, initial);
  const isSuccess = state.status === "success";

  return (
    <section id="booking" className="py-24 md:py-32 px-6 bg-[#0a0a0a] section-cv">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Reserve your journey</span>
          <span className="gold-line mt-3 mx-auto w-20 block" aria-hidden />
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-5"
            style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
          >
            Book a chauffeur
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-0 border border-[#e5c158]/20">
          <motion.div
            className="md:col-span-2 bg-[#e5c158]/5 border-b md:border-b-0 md:border-r border-[#e5c158]/15 p-6 md:p-10 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="w-px h-24 bg-[#e5c158] mb-8" aria-hidden />
              <Quote size={24} className="text-[#e5c158] mb-4" aria-hidden />
              <blockquote
                className="text-white text-base md:text-xl leading-relaxed italic"
                style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
              >
                &ldquo;Every journey deserves to be an experience, not just a commute.&rdquo;
              </blockquote>
              <p className="text-[#e5c158] text-sm mt-4 tracking-wider">— The Prestige promise</p>
            </div>
            <ul className="mt-12 space-y-4">
              {PROMISES.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e5c158]" aria-hidden />
                  <span className="text-[#bbb] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-3 bg-[#0f0f0f] p-6 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16" role="status" aria-live="polite">
                <div className="w-16 h-16 rounded-full border border-[#e5c158] flex items-center justify-center text-[#e5c158] text-2xl" aria-hidden>✓</div>
                <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}>
                  Reservation received
                </h3>
                <p className="text-[#bbb] text-sm max-w-sm">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { id: "name", label: "Full name", type: "text", placeholder: "John Smith", autoComplete: "name", span: 1 },
                  { id: "phone", label: "Phone number", type: "tel", placeholder: "+44 7700 900000", autoComplete: "tel", span: 1 },
                  { id: "email", label: "Email address", type: "email", placeholder: "john@example.com", autoComplete: "email", span: 2 },
                ].map(({ id, label, type, placeholder, autoComplete, span }) => {
                  const err = fieldError(state, id);
                  return (
                    <div key={id} className={span === 2 ? "md:col-span-2" : ""}>
                      <label htmlFor={id} className="block text-[#aaa] text-xs tracking-[0.2em] uppercase mb-2">
                        {label}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        aria-invalid={!!err}
                        aria-describedby={err ? `${id}-err` : undefined}
                        className="w-full bg-[#111] border border-[#e5c158]/20 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors"
                      />
                      {err && <p id={`${id}-err`} role="alert" className="text-red-400 text-xs mt-1">{err}</p>}
                    </div>
                  );
                })}

                <div>
                  <label htmlFor="vehicle" className="block text-[#aaa] text-xs tracking-[0.2em] uppercase mb-2">Vehicle</label>
                  <select
                    id="vehicle"
                    name="vehicle"
                    defaultValue=""
                    className="w-full bg-[#111] border border-[#e5c158]/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Any vehicle</option>
                    {VEHICLES.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="passengers" className="block text-[#aaa] text-xs tracking-[0.2em] uppercase mb-2">Passengers</label>
                  <select
                    id="passengers"
                    name="passengers"
                    defaultValue="2"
                    className="w-full bg-[#111] border border-[#e5c158]/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => <option key={n} value={n}>{n} {n === 1 ? "Passenger" : "Passengers"}</option>)}
                  </select>
                </div>

                {[
                  { id: "pickup", label: "Pickup location", placeholder: "Street, City", autoComplete: "street-address" },
                  { id: "destination", label: "Destination", placeholder: "Street, City", autoComplete: "off" },
                ].map(({ id, label, placeholder, autoComplete }) => {
                  const err = fieldError(state, id);
                  return (
                    <div key={id}>
                      <label htmlFor={id} className="block text-[#aaa] text-xs tracking-[0.2em] uppercase mb-2">{label}</label>
                      <input
                        id={id}
                        name={id}
                        type="text"
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        aria-invalid={!!err}
                        aria-describedby={err ? `${id}-err` : undefined}
                        className="w-full bg-[#111] border border-[#e5c158]/20 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors"
                      />
                      {err && <p id={`${id}-err`} role="alert" className="text-red-400 text-xs mt-1">{err}</p>}
                    </div>
                  );
                })}

                <div>
                  <label htmlFor="date" className="block text-[#aaa] text-xs tracking-[0.2em] uppercase mb-2">Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    aria-invalid={!!fieldError(state, "date")}
                    aria-describedby={fieldError(state, "date") ? "date-err" : undefined}
                    className="w-full bg-[#111] border border-[#e5c158]/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors [color-scheme:dark]"
                  />
                  {fieldError(state, "date") && <p id="date-err" role="alert" className="text-red-400 text-xs mt-1">{fieldError(state, "date")}</p>}
                </div>

                <div>
                  <label htmlFor="time" className="block text-[#aaa] text-xs tracking-[0.2em] uppercase mb-2">Time</label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    aria-invalid={!!fieldError(state, "time")}
                    className="w-full bg-[#111] border border-[#e5c158]/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors [color-scheme:dark]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-[#aaa] text-xs tracking-[0.2em] uppercase mb-2">Notes (optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Flight number, sign for pickup, child seat…"
                    className="w-full bg-[#111] border border-[#e5c158]/20 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#e5c158]/60 transition-colors resize-none"
                  />
                </div>

                {state.status === "error" && state.message && (
                  <p role="alert" className="md:col-span-2 text-red-400 text-sm">{state.message}</p>
                )}

                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={pending}
                    className="shimmer-gold w-full py-4 text-black font-bold text-sm tracking-[0.25em] uppercase hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {pending ? "Submitting…" : "Confirm reservation"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
