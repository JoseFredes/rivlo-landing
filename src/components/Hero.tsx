import { type Lang, type Dictionary } from "@/lib/i18n";
import { WaitlistForm } from "./WaitlistForm";

export function Hero({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {dict.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {dict.hero.subtitle}
        </p>
        <div className="mx-auto mt-10 max-w-lg">
          <WaitlistForm lang={lang} dict={dict} />
        </div>
      </div>
    </section>
  );
}
