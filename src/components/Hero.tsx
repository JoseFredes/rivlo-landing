import { type Lang, type Dictionary } from "@/lib/i18n";
import { WaitlistForm } from "./WaitlistForm";
import { Scene3D } from "./Scene3D";

export function Hero({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Scene3D />
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          AI-Powered Feedback Analysis
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl leading-tight">
          <span className="gradient-text">{dict.hero.title}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          {dict.hero.subtitle}
        </p>
        <div className="mx-auto mt-10 max-w-lg">
          <WaitlistForm lang={lang} dict={dict} />
        </div>
      </div>
    </section>
  );
}
