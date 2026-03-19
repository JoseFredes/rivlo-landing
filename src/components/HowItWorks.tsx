import { type Dictionary } from "@/lib/i18n";
import { Upload, Brain, BarChart3 } from "lucide-react";

const icons = [Upload, Brain, BarChart3];

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="how-it-works" className="border-t bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-2 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium">
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
