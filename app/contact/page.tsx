import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Buy Pallet Jacks – Call or Text for Availability",
  description:
    "Get in touch with Buy Pallet Jacks. Call or text to check inventory at your nearest location. We respond fast — usually within minutes during business hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactInfo>
        <ContactForm />
      </ContactInfo>
    </>
  );
}
