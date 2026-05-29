import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import RecaptchaClientProvider from "@/components/contact/RecaptchaClientProvider";

export const metadata: Metadata = buildMetadata({
  title: "Contact Buy Pallet Jacks – Call or Text for Pickup and Bulk Availability",
  description:
    "Call or text Buy Pallet Jacks to check nearby pickup inventory, ask about bulk pricing, and get fast answers on refurbished pallet jacks.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactInfo>
        <RecaptchaClientProvider>
          <ContactForm />
        </RecaptchaClientProvider>
      </ContactInfo>
    </>
  );
}
