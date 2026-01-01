"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function WaitlistModal({
  isOpen,
  onClose,
  onSuccess,
}: WaitlistModalProps) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#1A1A1E] rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center mb-8">
          <Image
            src="/assets/chainpaye.png"
            alt="Chainpaye"
            width={120}
            height={32}
            className="mb-6 dark:invert"
          />
          <h3 className="text-xl font-medium text-center text-[#202024] dark:text-white">
            Register to get your Chainpaye Visa Card
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#202024] dark:text-gray-300 mb-1">
              Name on card<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Bless!"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2A2A33] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#202024] dark:text-gray-300 mb-1">
              Whatsapp phone number<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              placeholder="234 916 810 3963"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2A2A33] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#202024] dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="e.g useremail@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2A2A33] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-fit mt-4 px-8 py-3 bg-[#003DFF] text-white rounded-lg font-bold text-sm hover:bg-[#002bb3] disabled:opacity-50 transition-colors"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
