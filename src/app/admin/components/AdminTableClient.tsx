"use client";

import React, { useState } from "react";
import { deleteContact, logoutAdmin } from "../actions";
import { toast } from "react-toastify";
import { Trash2, LogOut, Mail, Phone, Building2, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  createdAt: Date;
};

export default function AdminTableClient({ initialContacts }: { initialContacts: Contact[] }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    
    setIsDeleting(id);
    const result = await deleteContact(id);
    
    if (result.success) {
      toast.success("Contact message deleted.");
      setContacts((prev) => prev.filter((c) => c.id !== id));
      router.refresh();
    } else {
      toast.error(result.error || "Failed to delete.");
    }
    setIsDeleting(null);
  };

  const handleLogout = async () => {
    await logoutAdmin();
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900">Admin Dashboard</h1>
            <p className="text-sm text-stone-500 mt-1">Manage all your incoming inquiries from the website.</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-lg transition-colors font-medium text-sm cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        {contacts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-12 text-center">
            <p className="text-stone-500">No contact messages yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-stone-100 border-b border-stone-200 text-stone-600 uppercase text-xs font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Guest Details</th>
                    <th className="px-6 py-4">Contact Info</th>
                    <th className="px-6 py-4 w-1/2">Message</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-5 align-top">
                        <div className="font-semibold text-stone-900 mb-1">{contact.name}</div>
                        <div className="flex items-center text-xs text-stone-500 mt-2">
                          <Clock className="w-3 h-3 mr-1 text-terracotta-500" />
                          {new Date(contact.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                          <span className="mx-1">•</span>
                          {new Date(contact.createdAt).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-5 align-top space-y-2">
                        <div className="flex items-center text-stone-600">
                          <Mail className="w-4 h-4 mr-2 text-stone-400" />
                          <a href={`mailto:${contact.email}`} className="hover:text-terracotta-600 hover:underline">{contact.email}</a>
                        </div>
                        {contact.phone && (
                          <div className="flex items-center text-stone-600">
                            <Phone className="w-4 h-4 mr-2 text-stone-400" />
                            {contact.phone}
                          </div>
                        )}
                        {contact.company && (
                          <div className="flex items-center text-stone-600">
                            <Building2 className="w-4 h-4 mr-2 text-stone-400" />
                            {contact.company}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-5 align-top whitespace-normal min-w-[300px]">
                        <p className="text-stone-700 text-sm leading-relaxed bg-stone-50 p-3 rounded-md border border-stone-100">
                          {contact.message}
                        </p>
                      </td>
                      <td className="px-6 py-5 align-top text-right">
                        <button
                          onClick={() => handleDelete(contact.id)}
                          disabled={isDeleting === contact.id}
                          className="inline-flex items-center justify-center p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
