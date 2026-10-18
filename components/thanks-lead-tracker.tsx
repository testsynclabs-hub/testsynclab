"use client";

import { useEffect } from "react";
import { trackLeadSubmit } from "@/lib/analytics";

export function ThanksLeadTracker({
  plan,
  source,
}: {
  plan: string;
  source: string;
}) {
  useEffect(() => {
    trackLeadSubmit({ plan, source });
  }, [plan, source]);

  return null;
}
