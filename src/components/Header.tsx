import Link from "next/link";
import { type Lang, type Dictionary } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function Header({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}`} className="text-xl font-bold tracking-tight gradient-text">
          Rivlo
        </Link>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <a href="#how-it-works" className="text-white/50 hover:text-fuchsia-400 transition-colors">
            {dict.nav.howItWorks}
          </a>
          <a href="#benefits" className="text-white/50 hover:text-fuchsia-400 transition-colors">
            {dict.nav.benefits}
          </a>
          <a href="#pricing" className="text-white/50 hover:text-fuchsia-400 transition-colors">
            {dict.nav.pricing}
          </a>
        </nav>
        <LanguageToggle lang={lang} label={dict.nav.switchLang} />
      </div>
    </header>
  );
}
