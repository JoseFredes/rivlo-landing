import { type Dictionary } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function Pricing({ dict }: { dict: Dictionary }) {
  return (
    <section id="pricing" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {dict.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.pricing.subtitle}
          </p>
          <Badge className="mt-4 bg-violet-500/15 text-violet-300 border-violet-500/20 hover:bg-violet-500/25">
            {dict.pricing.comingSoon}
          </Badge>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {dict.pricing.plans.map((plan, i) => {
            const isPopular = "popular" in plan && plan.popular;
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-6 transition-all hover:translate-y-[-2px] ${
                  isPopular
                    ? "card-gradient-border glow-purple"
                    : "glass rounded-2xl"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-0">
                      Popular
                    </Badge>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className={`text-4xl font-bold ${isPopular ? "gradient-text" : "text-white"}`}>
                      {plan.price}
                    </span>
                    {plan.price !== dict.pricing.free && (
                      <span className="text-muted-foreground">
                        {dict.pricing.month}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
