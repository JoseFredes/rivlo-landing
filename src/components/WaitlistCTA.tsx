import { type Lang, type Dictionary } from "@/lib/i18n";
import { WaitlistForm } from "./WaitlistForm";
import { WaitlistCount } from "./WaitlistCount";

export function WaitlistCTA({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 relative">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
          {dict.waitlist.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {dict.waitlist.subtitle}
        </p>
        <div className="mt-8">
          <WaitlistForm lang={lang} dict={dict} />
        </div>
        <div className="mt-6">
          <WaitlistCount dict={dict} />
        </div>
      </div>
    </section>
  );
}
