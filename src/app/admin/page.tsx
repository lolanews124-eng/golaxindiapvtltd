import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getAdminSessionEmail } from "@/lib/admin/auth";
import AdminLoginPage from "./login-form";

export default async function Page() {
  const email = await getAdminSessionEmail();
  if (email) {
    redirect("/admin/leads");
  }

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-slate-500">
          Loading…
        </div>
      }
    >
      <AdminLoginPage />
    </Suspense>
  );
}
