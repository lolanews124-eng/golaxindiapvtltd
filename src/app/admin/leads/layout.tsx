import { redirect } from "next/navigation";
import { getAdminSessionEmail } from "@/lib/admin/auth";

export default async function AdminLeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const email = await getAdminSessionEmail();
  if (!email) {
    redirect("/admin");
  }
  return children;
}
