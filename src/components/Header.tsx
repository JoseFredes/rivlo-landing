import Link from "next/link";
import { type Lang, type Dictionary } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function Header({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}`} className="text-xl font-bold tracking-tight">
          Rivlo
        </Link>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            {dict.nav.howItWorks}
          </a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
            {dict.nav.benefits}
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            {dict.nav.pricing}
          </a>
        </nav>
        <LanguageToggle lang={lang} label={dict.nav.switchLang} />
      </div>
    </header>
  );
}
