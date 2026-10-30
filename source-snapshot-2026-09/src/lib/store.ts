import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  eventDate: string;
  createdAt: string;
};

export type Subscriber = {
  email: string;
  createdAt: string;
};

type SiteState = {
  inquiries: Inquiry[];
  subscribers: Subscriber[];
  addInquiry: (input: Omit<Inquiry, "id" | "createdAt">) => Inquiry;
  addSubscriber: (email: string) => { ok: true } | { ok: false; reason: string };
};

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export const useSiteStore = create<SiteState>()(
  persist(
    (set, get) => ({
      inquiries: [],
      subscribers: [],
      addInquiry: (input) => {
        const inquiry: Inquiry = {
          ...input,
          id: uid(),
          createdAt: new Date().toISOString(),
        };
        set({ inquiries: [inquiry, ...get().inquiries].slice(0, 40) });
        return inquiry;
      },
      addSubscriber: (email) => {
        const normalized = email.trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
          return { ok: false, reason: "Enter a valid email." };
        }
        if (get().subscribers.some((s) => s.email === normalized)) {
          return { ok: false, reason: "That email is already on the list." };
        }
        set({
          subscribers: [
            { email: normalized, createdAt: new Date().toISOString() },
            ...get().subscribers,
          ],
        });
        return { ok: true };
      },
    }),
    { name: "ishs-site" },
  ),
);
