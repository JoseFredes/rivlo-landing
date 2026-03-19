import { type Lang, getDictionary } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (langParam === "en" ? "en" : "es") as Lang;
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen">
      <Header lang={lang} dict={dict} />
      <main>
        <Hero lang={lang} dict={dict} />
        <HowItWorks dict={dict} />
        <Benefits dict={dict} />
        <Pricing dict={dict} />
        <WaitlistCTA lang={lang} dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
