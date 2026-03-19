import { type Lang, type Dictionary } from "@/lib/i18n";
import { WaitlistForm } from "./WaitlistForm";
import { WaitlistCount } from "./WaitlistCount";

export function WaitlistCTA({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section className="border-t py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
