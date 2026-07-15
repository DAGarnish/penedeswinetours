"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    
    const data = {
      name: `${firstName} ${lastName}`.trim(),
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result;
      try {
        result = await response.json();
      } catch (err) {
        result = { error: "Received an invalid response from the server." };
      }

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-stone-200/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 text-left">
          <label htmlFor="firstName" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">First Name</label>
          <input required type="text" id="firstName" name="firstName" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 focus:border-terracotta-500 transition-all" placeholder="John" />
        </div>
        <div className="space-y-2 text-left">
          <label htmlFor="lastName" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">Last Name</label>
          <input required type="text" id="lastName" name="lastName" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 focus:border-terracotta-500 transition-all" placeholder="Doe" />
        </div>
      </div>
      <div className="space-y-2 text-left">
        <label htmlFor="email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">Email Address</label>
        <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 focus:border-terracotta-500 transition-all" placeholder="john@example.com" />
      </div>
      <div className="space-y-2 text-left">
        <label htmlFor="phone" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">Phone Number (Optional)</label>
        <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 focus:border-terracotta-500 transition-all" placeholder="+1 (555) 000-0000" />
      </div>
      <div className="space-y-2 text-left">
        <label htmlFor="message" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">Message</label>
        <textarea required id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500/20 focus:border-terracotta-500 transition-all" placeholder="How can we help you prepare for your visit?"></textarea>
      </div>
      <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-stone-900 hover:bg-stone-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
