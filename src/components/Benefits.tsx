import { type Dictionary } from "@/lib/i18n";
import { Clock, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const icons = [Clock, ShieldCheck, TrendingUp, Users];

export function Benefits({ dict }: { dict: Dictionary }) {
  return (
    <section id="benefits" className="border-t py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
              <Card key={i} className="border-0 shadow-sm bg-muted/30">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-3 text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
