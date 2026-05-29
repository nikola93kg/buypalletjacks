"use client";

import { useActionState, useEffect, useRef, useTransition } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-navy disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 cursor-pointer"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Sending…
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Send Message
        </>
      )}
    </button>
  );
}

const initialState: ContactFormState = {};

export default function ContactForm({ className }: { className?: string }) {
  const [state, action] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!executeRecaptcha) return;

    const token = await executeRecaptcha("contact_form");
    const formData = new FormData(e.currentTarget);
    formData.append("recaptcha_token", token);

    startTransition(() => {
      action(formData);
    });
  }

  return (
    <div className={`bg-white border border-border rounded-2xl p-6 flex flex-col${className ? ` ${className}` : ""}`}>
      <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-5">
        Send Us a Message
      </p>

      {state.success ? (
        <div className="flex items-start gap-3 bg-[#F0FDF4] border border-[#86EFAC] rounded-xl px-4 py-4">
          <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#15803D] text-sm">Message sent!</p>
            <p className="text-[#166534] text-xs mt-0.5">
              We&apos;ll get back to you shortly. You can also call or text us
              for a faster response.
            </p>
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
          {state.error && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-600 text-sm">{state.error}</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="cf-name"
                className="block text-xs font-semibold text-graphite mb-1.5"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="John Smith"
                className="w-full text-sm text-graphite placeholder:text-steel border border-border rounded-xl px-3.5 py-2.5 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
              />
            </div>
            <div>
              <label
                htmlFor="cf-email"
                className="block text-xs font-semibold text-graphite mb-1.5"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className="w-full text-sm text-graphite placeholder:text-steel border border-border rounded-xl px-3.5 py-2.5 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cf-phone"
              className="block text-xs font-semibold text-graphite mb-1.5"
            >
              Phone{" "}
              <span className="text-steel font-normal">(optional)</span>
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 000-0000"
              className="w-full text-sm text-graphite placeholder:text-steel border border-border rounded-xl px-3.5 py-2.5 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
            />
          </div>

          <div>
            <label
              htmlFor="cf-message"
              className="block text-xs font-semibold text-graphite mb-1.5"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={4}
              placeholder="Your state, how many units you need, preferred pickup timeframe…"
              className="w-full text-sm text-graphite placeholder:text-steel border border-border rounded-xl px-3.5 py-2.5 bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition resize-none"
            />
          </div>

          <SubmitButton pending={isPending} />
        </form>
      )}
    </div>
  );
}
