"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { type Lang } from "@/lib/i18n";

export function LanguageToggle({ lang, label }: { lang: Lang; label: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const newLang = lang === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath || `/${newLang}`);
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggleLang} className="gap-1.5">
      <Globe className="h-4 w-4" />
      {label}
    </Button>
  );
}
