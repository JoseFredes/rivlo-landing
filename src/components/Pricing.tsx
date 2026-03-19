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
          <Badge className="mt-4 bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30">
            {dict.pricing.comingSoon}
          </Badge>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {dict.pricing.plans.map((plan, i) => {
            const isPopular = "popular" in plan && plan.popular;
            return (
              <div
                key={i}
                className={`relative rounded-xl p-6 transition-all hover:translate-y-[-2px] ${
                  isPopular
                    ? "gradient-border glow-purple"
                    : "glass"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                      Popular
                    </Badge>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className={`text-4xl font-bold ${isPopular ? "gradient-text" : ""}`}>
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
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-purple-400 shrink-0" />
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
