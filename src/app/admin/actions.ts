"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

const AUTH_COOKIE = "admin_auth";

export async function loginAdmin(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return { error: "ADMIN_PASSWORD is not set in the server environment." };
  }

  if (password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set(AUTH_COOKIE, "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    return { success: true };
  } else {
    return { error: "Invalid password." };
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
  redirect("/admin/login");
}

export async function deleteContact(id: string) {
  const cookieStore = await cookies();
  if (!cookieStore.get(AUTH_COOKIE)) {
    return { error: "Unauthorized" };
  }

  try {
    await prisma.contactForm.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to delete contact:", error);
    return { error: "Failed to delete the record." };
  }
}
