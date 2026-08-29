import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/src/components/Shared/SectionHero/SectionHero";
import ContactInfoCards from "@/src/components/Ui/ContactPage/ContactInfoCards";
import ContactForm from "@/src/components/Ui/ContactPage/ContactForm";
import ContactMap from "@/src/components/Ui/ContactPage/ContactMap";
import Offices from "@/src/components/Ui/ContactPage/Offices";
import FAQ from "@/src/components/Ui/ContactPage/FAQ";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Minvip to talk through your site, timeline and scope — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <div className="bg-ink-950">
      <SectionHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={
          <>
            Let&apos;s Talk About Your <span className="text-lime-400">Site</span>
          </>
        }
      />

      <ContactInfoCards />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-ink-800 lg:grid lg:grid-cols-2">
            <div className="p-6 sm:p-10 lg:p-12">
              <span className="text-xs font-medium text-white/50">Get In Touch</span>
              <h2 className="font-display mt-3 mb-7 text-2xl font-semibold text-white sm:text-[28px]">
                Send Us A <span className="text-lime-400">Message</span>
              </h2>
              <ContactForm />
            </div>
            <ContactMap />
          </div>
        </div>
      </section>

      <Offices />
      <FAQ />

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container">
          <div className="flex flex-col items-center gap-5 rounded-[24px] border border-white/10 bg-linear-to-br from-ink-700 to-ink-800 px-6 py-14 text-center sm:px-10">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-[30px]">
              Ready To Start Your <span className="text-lime-400">Project</span>?
            </h2>
            <p className="max-w-md text-sm text-white/50">
              Get a free, no-obligation site estimate within 48 hours.
            </p>
            <Link
              href="tel:+0324687890"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-lime-950 transition hover:bg-lime-300 sm:w-auto"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
