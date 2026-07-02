"use client";

import { useRef, useState } from "react";
import { contactInterests } from "@/lib/content";

const inputClass =
  "w-full rounded-btn border border-line-form bg-white px-4 py-[14px] text-[15px] text-ink placeholder:text-body-muted";

const labelTextClass =
  "mb-[9px] block text-[13px] font-bold tracking-[0.05em] text-ink";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const endpoint = process.env.NEXT_PUBLIC_FORMBOLD_ENDPOINT;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: silently accept bot submissions without sending anything.
    if ((data.get("_honeypot") as string)?.trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";

    const nextErrors: { name?: string; email?: string } = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email))
      nextErrors.email = "Please enter a valid email address.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      (nextErrors.name ? nameRef : emailRef).current?.focus();
      return;
    }
    setErrors({});

    if (!endpoint) {
      // Endpoint not configured yet (set NEXT_PUBLIC_FORMBOLD_ENDPOINT).
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {status === "success" && (
        <div
          role="status"
          className="mb-7 rounded-card border-l-4 border-teal bg-paper-2 px-7 py-6"
        >
          <p className="m-0 text-[16px] leading-[1.6] text-ink">
            <strong>Thank you.</strong> Your message has been sent. We&apos;ll be
            in touch shortly to schedule your chat.
          </p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-7 rounded-card border-l-4 border-magenta bg-paper-2 px-7 py-6"
        >
          <p className="m-0 text-[16px] leading-[1.6] text-ink">
            <strong>Something went wrong.</strong> Please try again, or email us
            directly at{" "}
            <a
              href="mailto:hello@credomlimited.com"
              className="font-semibold underline"
            >
              hello@credomlimited.com
            </a>
            .
          </p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        {/* Honeypot field — hidden from users, catches bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="contact-honeypot">Leave this field empty</label>
          <input
            id="contact-honeypot"
            type="text"
            name="_honeypot"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="mb-[22px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[22px]">
          <div>
            <label htmlFor="contact-name" className={labelTextClass}>
              Full Name
            </label>
            <input
              ref={nameRef}
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              aria-required="true"
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={inputClass}
            />
            {errors.name && (
              <p id="contact-name-error" className="mt-2 text-[13px] text-magenta">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact-email" className={labelTextClass}>
              Email
            </label>
            <input
              ref={emailRef}
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              aria-required="true"
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={inputClass}
            />
            {errors.email && (
              <p id="contact-email-error" className="mt-2 text-[13px] text-magenta">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mb-[22px]">
          <label htmlFor="contact-company" className={labelTextClass}>
            Company / Organization
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Optional"
            className={inputClass}
          />
        </div>

        <div className="mb-[22px]">
          <label htmlFor="contact-service" className={labelTextClass}>
            What are you interested in?
          </label>
          <select
            id="contact-service"
            name="service"
            defaultValue={contactInterests[0]}
            className={inputClass}
          >
            {contactInterests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-7">
          <label htmlFor="contact-message" className={labelTextClass}>
            Tell us about your project
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="What moment do you want to create?"
            className={`${inputClass} resize-y leading-[1.6]`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="cursor-pointer rounded-btn border-none bg-gold px-[38px] py-4 text-base font-bold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Schedule a Chat"}
        </button>
      </form>
    </div>
  );
}
