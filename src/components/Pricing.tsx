import { type Dictionary } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing({ dict }: { dict: Dictionary }) {
  return (
    <section id="pricing" className="border-t bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.pricing.subtitle}
          </p>
          <Badge variant="secondary" className="mt-4">
            {dict.pricing.comingSoon}
          </Badge>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {dict.pricing.plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative ${
                "popular" in plan && plan.popular
                  ? "border-primary shadow-md"
                  : "border-0 shadow-sm"
              }`}
            >
              {"popular" in plan && plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== dict.pricing.free && (
                    <span className="text-muted-foreground">
                      {dict.pricing.month}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
