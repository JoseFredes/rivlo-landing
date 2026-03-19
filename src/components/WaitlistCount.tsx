"use client";

import { useEffect, useState } from "react";
import { type Dictionary } from "@/lib/i18n";
import { Users } from "lucide-react";

export function WaitlistCount({ dict }: { dict: Dictionary }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist")
      .then((r) => r.json())
      .then((data) => setCount(data.count))
      .catch(() => {});
  }, []);

  if (count === null || count === 0) return null;

  return (
    <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
      <Users className="h-4 w-4" />
      {dict.waitlist.countPrefix} {count} {dict.waitlist.countSuffix}
    </p>
  );
}
