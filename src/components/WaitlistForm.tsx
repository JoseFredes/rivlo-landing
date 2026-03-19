"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Lang, type Dictionary } from "@/lib/i18n";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

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
      <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300 backdrop-blur-sm">
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
          className="sm:min-w-[240px] bg-white/5 border-white/8 placeholder:text-white/25 text-white focus-visible:border-violet-500/50 focus-visible:ring-violet-500/20"
        />
        <Input
          type="text"
          placeholder={dict.waitlist.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/5 border-white/8 placeholder:text-white/25 text-white focus-visible:border-violet-500/50 focus-visible:ring-violet-500/20"
        />
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/30 cursor-pointer"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {dict.waitlist.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      {status === "duplicate" && (
        <p className="text-sm text-amber-400">{dict.waitlist.alreadyRegistered}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">{dict.waitlist.error}</p>
      )}
    </form>
  );
}
