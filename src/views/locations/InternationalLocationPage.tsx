"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import InternationalLocationTemplate from "@/components/locations/InternationalLocationTemplate";
import { getInternationalLocation } from "@/data/internationalLocations";

export default function InternationalLocationPage() {
  const router = useRouter();
  const { country } = useParams<{ country: string }>();
  const data = country ? getInternationalLocation(country) : undefined;

  useEffect(() => {
    if (!data) router.replace("/locations");
  }, [data, router]);

  if (!data) return null;
  return <InternationalLocationTemplate location={data} />;
}
