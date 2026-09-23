"use client";

import { FormEvent, useState } from "react";

const fields = [
  { name: "firstName", label: "First Name*", type: "text" },
  { name: "lastName", label: "Last Name*", type: "text" },
  { name: "email", label: "Email Address*", type: "email" },
  { name: "phone", label: "Phone Number*", type: "tel" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-4xl">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          {fields.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              required
              placeholder={field.label}
              aria-label={field.label}
              className="h-12 w-full rounded-sm border border-white/30 bg-white/25 px-4 text-sm text-white placeholder:text-white/90 outline-none focus:bg-white/35"
            />
          ))}
        </div>
        <textarea
          name="message"
          required
          placeholder="Your Message"
          aria-label="Your Message"
          className="min-h-56 w-full resize-none rounded-sm border border-white/30 bg-white/25 px-4 py-3 text-sm text-white placeholder:text-white/90 outline-none focus:bg-white/35 md:min-h-full"
        />
      </div>
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="rounded-sm bg-white px-8 py-2.5 text-sm font-medium text-ice hover:bg-white/90"
        >
          Send Message
        </button>
      </div>
      {sent ? (
        <p className="mt-4 text-center text-sm text-white" role="status">
          Thanks for reaching out. We will be in touch shortly.
        </p>
      ) : null}
    </form>
  );
}
