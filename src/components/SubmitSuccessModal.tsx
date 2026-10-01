"use client";

import { X } from "@phosphor-icons/react";
import { useEffect } from "react";

export function SubmitSuccessModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#063e5c]/45 px-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="thank-you-title"
        className="relative w-full max-w-md rounded-2xl bg-white px-8 pt-12 pb-10 text-center shadow-[0_20px_50px_rgba(6,62,92,0.25)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-ice hover:bg-ice/10"
        >
          <X size={20} weight="bold" />
        </button>
        <div className="mx-auto flex w-fit items-center justify-center rounded-2xl bg-ice px-8 py-5">
          <img src="/images/logo.png" alt="Pure Ice" width={180} height={98} className="h-16 w-auto" />
        </div>
        <h2 id="thank-you-title" className="mt-6 text-2xl font-semibold tracking-wide text-ice">
          Thank you
        </h2>
        <p className="mt-3 text-base leading-7 text-[#0D0D0D]">
          We appreciate you reaching out to us, we will contact you shortly.
        </p>
      </div>
    </div>
  );
}
