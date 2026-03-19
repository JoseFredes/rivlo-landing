"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Lang, type Dictionary } from "@/lib/i18n";
import { Loader2, CheckCircle2 } from "lucide-react";

export function WaitlistForm({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, lang }),
      });

      if (res.status === 409) {
        setStatus("duplicate");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
      setName("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <p className="text-sm">{dict.waitlist.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-1">
        <Input
          type="email"
          required
          placeholder={dict.waitlist.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sm:min-w-[240px]"
        />
        <Input
          type="text"
          placeholder={dict.waitlist.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button type="submit" disabled={status === "loading"} className="shrink-0">
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          dict.waitlist.cta
        )}
      </Button>
      {status === "duplicate" && (
        <p className="text-sm text-amber-600">{dict.waitlist.alreadyRegistered}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">{dict.waitlist.error}</p>
      )}
    </form>
  );
}
