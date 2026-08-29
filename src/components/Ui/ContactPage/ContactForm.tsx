"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

// TODO: no backend yet — wire this up to a real inbox/CRM once one exists.
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-ink-700 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-lime-400/50 focus:outline-none";
  const labelClass = "mb-1.5 block text-xs text-white/50";

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-ink-800 px-6 py-16 text-center">
        <CheckCircle2 size={32} className="text-lime-400" />
        <h3 className="font-display text-lg font-semibold text-white">
          Thanks — we&apos;ve got your message.
        </h3>
        <p className="max-w-sm text-sm text-white/50">
          A member of our team will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-white/10 bg-ink-800 p-6 sm:gap-5 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <label className="block">
          <span className={labelClass}>Full Name</span>
          <input type="text" required placeholder="Jane Cooper" className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Company</span>
          <input type="text" placeholder="Site Operator Ltd." className={fieldClass} />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Email Address</span>
        <input type="email" required placeholder="jane@company.com" className={fieldClass} />
      </label>

      <label className="block">
        <span className={labelClass}>Project Details</span>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your site and timeline"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-lime-950 transition hover:bg-lime-300"
      >
        SEND MESSAGE
        <Send size={15} />
      </button>
    </form>
  );
};

export default ContactForm;
