"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "../actions";
import { toast } from "react-toastify";
import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await loginAdmin(password);
    
    if (result.success) {
      toast.success("Successfully logged in!");
      router.push("/admin");
    } else {
      toast.error(result.error || "Login failed");
      setPassword("");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-6">
      <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl border border-stone-200">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center">
            <Lock className="text-white w-6 h-6" />
          </div>
        </div>
        <h1 className="text-2xl font-serif text-center text-stone-900 mb-2">Admin Access</h1>
        <p className="text-center text-stone-500 text-sm mb-8">Enter the administration password to view inquiries.</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 focus:border-terracotta-500 transition-all"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-stone-900 hover:bg-stone-800 disabled:opacity-70 text-white font-semibold text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            {isSubmitting ? "Authenticating..." : "Login"}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to public site
          </Link>
        </div>
      </div>
    </div>
  );
}
