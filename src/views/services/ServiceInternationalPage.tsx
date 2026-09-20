"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ServiceInternationalTemplate from "@/components/services/ServiceInternationalTemplate";
import { getServiceInternationalData } from "@/data/internationalLocations";

export default function ServiceInternationalPage() {
  const router = useRouter();
  const { service, country } = useParams<{ service: string; country: string }>();
  const data =
    service && country ? getServiceInternationalData(service, country) : undefined;

  useEffect(() => {
    if (!service || !country || !data) {
      router.replace("/services");
    }
  }, [service, country, data, router]);

  if (!service || !country || !data) return null;
  return <ServiceInternationalTemplate data={data} />;
}
