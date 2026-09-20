"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import InternationalCityTemplate from "@/components/locations/InternationalCityTemplate";
import { getInternationalCity } from "@/data/internationalLocations";

export default function InternationalCityPage() {
  const router = useRouter();
  const { country, city } = useParams<{ country: string; city: string }>();
  const data = country && city ? getInternationalCity(country, city) : undefined;

  useEffect(() => {
    if (!country || !city) {
      router.replace("/locations");
      return;
    }
    if (!data) {
      router.replace(`/locations/global/${country}`);
    }
  }, [country, city, data, router]);

  if (!country || !city || !data) return null;
  return <InternationalCityTemplate data={data} />;
}
