"use client";

import { FormEvent, useState } from "react";
import { SubmitSuccessModal } from "./SubmitSuccessModal";

const fields = [
  { name: "firstName", label: "First Name*" },
  { name: "lastName", label: "Last Name*" },
  { name: "email", label: "Email Address*" },
  { name: "phone", label: "Phone Number*" },
] as const;

type FieldName = (typeof fields)[number]["name"] | "message";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorDetail, setErrorDetail] = useState("");

  function clearError(name: FieldName) {
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!firstName) nextErrors.firstName = "First name is required.";
    if (!lastName) nextErrors.lastName = "Last name is required.";
    if (!email) nextErrors.email = "Email is required.";
    else if (!emailPattern.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!phone) nextErrors.phone = "Phone number is required.";
    if (!message) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    setStatus("idle");
    setErrorMessage("");
    setErrorDetail("");

    const firstInvalid = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: `${firstName} ${lastName}`,
          phone,
          email,
          message,
        }),
      });
      const payload = (await response.json().catch(() => null)) as {
        error?: string;
        detail?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(payload?.error || "Could not send your message. Please try again.");
        setErrorDetail(payload?.detail || "");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage("Could not send your message. Please try again.");
      setErrorDetail("");
    }
  }

  const inputClass = (name: FieldName) =>
    `h-12 w-full rounded-sm border bg-white/25 px-4 text-sm text-white placeholder:text-white/90 outline-none transition-colors focus:bg-white/35 ${
      errors[name]
        ? "border-red-200"
        : "border-white/30 hover:border-white focus:border-white"
    }`;

  return (
    <>
      <form onSubmit={onSubmit} noValidate className="mx-auto mt-10 max-w-4xl">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            {fields.map((field) => (
              <div key={field.name}>
                <input
                  name={field.name}
                  type={field.name === "email" ? "email" : field.name === "phone" ? "tel" : "text"}
                  placeholder={field.label}
                  aria-label={field.label}
                  aria-invalid={Boolean(errors[field.name])}
                  onChange={() => clearError(field.name)}
                  className={inputClass(field.name)}
                />
                {errors[field.name] ? (
                  <p className="mt-1 text-sm text-red-100">{errors[field.name]}</p>
                ) : null}
              </div>
            ))}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              aria-invalid={Boolean(errors.message)}
              onChange={() => clearError("message")}
              className={`min-h-56 w-full resize-none rounded-sm border bg-white/25 px-4 py-3 text-sm text-white placeholder:text-white/90 outline-none transition-colors focus:bg-white/35 md:min-h-full ${
                errors.message ? "border-red-200" : "border-white/30 hover:border-white focus:border-white"
              }`}
            />
            {errors.message ? <p className="mt-1 text-sm text-red-100">{errors.message}</p> : null}
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-sm bg-white px-8 py-2.5 text-sm font-medium text-ice hover:bg-white/90 disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
        {status === "error" ? (
          <p role="alert" className="mt-4 text-center text-sm text-red-100">
            {errorMessage}
            {errorDetail ? (
              <span className="mt-1 block break-words text-xs text-red-100/90">{errorDetail}</span>
            ) : null}
          </p>
        ) : null}
      </form>
      {status === "sent" ? <SubmitSuccessModal onClose={() => setStatus("idle")} /> : null}
    </>
  );
}
