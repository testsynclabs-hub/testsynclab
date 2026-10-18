import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/service-landing-page";
import { getServiceLanding } from "@/lib/service-landings";

const landing = getServiceLanding("manual-testing");

export const metadata: Metadata = landing
  ? serviceLandingMetadata(landing)
  : {};

export default function Page() {
  if (!landing) notFound();
  return <ServiceLandingPage landing={landing} />;
}
