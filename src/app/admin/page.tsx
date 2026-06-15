import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AdminTableClient from "./components/AdminTableClient";

export const dynamic = "force-dynamic"; // Ensure fresh data on each load

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("admin_auth");

  if (!authCookie) {
    redirect("/admin/login");
  }

  // Fetch data
  const contacts = await prisma.contactForm.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <AdminTableClient initialContacts={contacts} />;
}
