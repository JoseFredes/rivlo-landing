import { type Dictionary } from "@/lib/i18n";
import { Upload, Brain, BarChart3 } from "lucide-react";

const icons = [Upload, Brain, BarChart3];
const gradients = [
  "from-purple-500 to-violet-600",
  "from-cyan-500 to-blue-600",
  "from-pink-500 to-rose-600",
];

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="how-it-works" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {dict.howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.howItWorks.subtitle}
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {dict.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[i]} shadow-lg shadow-purple-500/20 transition-transform group-hover:scale-110`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/30 text-sm font-medium text-purple-400">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
