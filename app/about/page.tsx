import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHeader from "@/components/about/PageHeader";
import MissionSplit from "@/components/about/MissionSplit";
import TrustPillars from "@/components/about/TrustPillars";
import RebuildProcess from "@/components/about/RebuildProcess";
import WhoWeServe from "@/components/about/WhoWeServe";
import ValueStrip from "@/components/about/ValueStrip";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = buildMetadata({
  title: "About Buy Pallet Jacks – Trusted Refurbished Equipment Nationwide",
  description:
    "Learn about Buy Pallet Jacks — our mission, our refurbishment process, and why thousands of businesses trust us for reliable, affordable pallet handling equipment.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <MissionSplit />
      <TrustPillars />
      <RebuildProcess />
      <WhoWeServe />
      <ValueStrip />
      <AboutCTA />
    </>
  );
}
