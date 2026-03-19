import { type Dictionary } from "@/lib/i18n";
import { Clock, ShieldCheck, TrendingUp, Users } from "lucide-react";

const icons = [Clock, ShieldCheck, TrendingUp, Users];
const iconColors = ["text-violet-400", "text-cyan-400", "text-emerald-400", "text-purple-400"];
const bgColors = ["bg-violet-500/10", "bg-cyan-500/10", "bg-emerald-500/10", "bg-purple-500/10"];

export function Benefits({ dict }: { dict: Dictionary }) {
  return (
    <section id="benefits" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {dict.benefits.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.benefits.subtitle}
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {dict.benefits.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="card-gradient-border rounded-2xl p-6 transition-all hover:translate-y-[-2px]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColors[i]}`}>
                  <Icon className={`h-6 w-6 ${iconColors[i]}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
