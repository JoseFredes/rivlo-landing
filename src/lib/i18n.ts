export type Lang = "es" | "en";

const dictionary = {
  es: {
    meta: {
      title: "Rivlo - Transforma feedback en decisiones de producto",
      description:
        "Analiza feedback de usuarios con AI y obtiene recomendaciones de features priorizadas con evidencia.",
    },
    nav: {
      howItWorks: "Cómo funciona",
      benefits: "Beneficios",
      pricing: "Planes",
      switchLang: "EN",
    },
    hero: {
      title: "Transforma feedback en decisiones de producto",
      subtitle:
        "Rivlo analiza el feedback de tus usuarios con inteligencia artificial y te entrega recomendaciones priorizadas con evidencia real.",
      cta: "Unirme a la waitlist",
    },
    howItWorks: {
      title: "Cómo funciona",
      subtitle: "3 simples pasos para tomar mejores decisiones de producto",
      steps: [
        {
          title: "Sube tu feedback",
          description:
            "Importa conversaciones, encuestas, reviews o cualquier fuente de feedback de usuarios.",
        },
        {
          title: "La AI analiza",
          description:
            "Nuestra inteligencia artificial identifica patrones, sentimientos y temas recurrentes automáticamente.",
        },
        {
          title: "Decide con datos",
          description:
            "Recibe recomendaciones priorizadas con evidencia para tomar decisiones informadas.",
        },
      ],
    },
    benefits: {
      title: "Beneficios",
      subtitle: "Todo lo que necesitas para tomar mejores decisiones",
      items: [
        {
          title: "Ahorra tiempo",
          description:
            "Deja de leer cientos de mensajes manualmente. La AI procesa todo en minutos.",
        },
        {
          title: "Decisiones con evidencia",
          description:
            "Cada recomendación viene respaldada por datos reales de tus usuarios.",
        },
        {
          title: "Priorización inteligente",
          description:
            "Sabe qué construir primero basándote en impacto real, no en intuición.",
        },
        {
          title: "Para todo el equipo",
          description:
            "Comparte insights con tu equipo y alinea a todos en la misma dirección.",
        },
      ],
    },
    pricing: {
      title: "Planes",
      subtitle: "Elige el plan que mejor se adapte a tu equipo",
      comingSoon: "Próximamente",
      month: "/mes",
      free: "Gratis",
      plans: [
        {
          name: "Free",
          price: "Gratis",
          description: "Para probar Rivlo",
          features: [
            "1 proyecto",
            "50 feedbacks/mes",
            "Análisis básico con AI",
            "1 usuario",
          ],
        },
        {
          name: "Starter",
          price: "$29",
          description: "Para equipos pequeños",
          features: [
            "3 proyectos",
            "500 feedbacks/mes",
            "Análisis avanzado con AI",
            "5 usuarios",
            "Exportar reportes",
          ],
          popular: true,
        },
        {
          name: "Pro",
          price: "$79",
          description: "Para equipos en crecimiento",
          features: [
            "Proyectos ilimitados",
            "Feedbacks ilimitados",
            "AI con modelos premium",
            "Usuarios ilimitados",
            "API access",
            "Soporte prioritario",
          ],
        },
      ],
    },
    waitlist: {
      title: "Sé de los primeros en usar Rivlo",
      subtitle:
        "Únete a la waitlist y obtén acceso anticipado cuando lancemos.",
      emailPlaceholder: "tu@email.com",
      namePlaceholder: "Tu nombre (opcional)",
      cta: "Unirme a la waitlist",
      success: "Te has registrado exitosamente. Te avisaremos cuando lancemos.",
      error: "Hubo un error. Intenta de nuevo.",
      alreadyRegistered: "Este email ya está registrado.",
      countPrefix: "Ya se unieron",
      countSuffix: "personas",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho con",
    },
  },
  en: {
    meta: {
      title: "Rivlo - Turn feedback into product decisions",
      description:
        "Analyze user feedback with AI and get prioritized feature recommendations backed by evidence.",
    },
    nav: {
      howItWorks: "How it works",
      benefits: "Benefits",
      pricing: "Pricing",
      switchLang: "ES",
    },
    hero: {
      title: "Turn feedback into product decisions",
      subtitle:
        "Rivlo analyzes your user feedback with artificial intelligence and delivers prioritized recommendations backed by real evidence.",
      cta: "Join the waitlist",
    },
    howItWorks: {
      title: "How it works",
      subtitle: "3 simple steps to make better product decisions",
      steps: [
        {
          title: "Upload your feedback",
          description:
            "Import conversations, surveys, reviews, or any source of user feedback.",
        },
        {
          title: "AI analyzes it",
          description:
            "Our AI automatically identifies patterns, sentiments, and recurring themes.",
        },
        {
          title: "Decide with data",
          description:
            "Receive prioritized recommendations with evidence to make informed decisions.",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      subtitle: "Everything you need to make better decisions",
      items: [
        {
          title: "Save time",
          description:
            "Stop reading hundreds of messages manually. AI processes everything in minutes.",
        },
        {
          title: "Evidence-based decisions",
          description:
            "Every recommendation is backed by real data from your users.",
        },
        {
          title: "Smart prioritization",
          description:
            "Know what to build first based on real impact, not gut feeling.",
        },
        {
          title: "For the whole team",
          description:
            "Share insights with your team and align everyone in the same direction.",
        },
      ],
    },
    pricing: {
      title: "Pricing",
      subtitle: "Choose the plan that fits your team",
      comingSoon: "Coming soon",
      month: "/month",
      free: "Free",
      plans: [
        {
          name: "Free",
          price: "Free",
          description: "To try Rivlo",
          features: [
            "1 project",
            "50 feedbacks/month",
            "Basic AI analysis",
            "1 user",
          ],
        },
        {
          name: "Starter",
          price: "$29",
          description: "For small teams",
          features: [
            "3 projects",
            "500 feedbacks/month",
            "Advanced AI analysis",
            "5 users",
            "Export reports",
          ],
          popular: true,
        },
        {
          name: "Pro",
          price: "$79",
          description: "For growing teams",
          features: [
            "Unlimited projects",
            "Unlimited feedbacks",
            "AI with premium models",
            "Unlimited users",
            "API access",
            "Priority support",
          ],
        },
      ],
    },
    waitlist: {
      title: "Be one of the first to use Rivlo",
      subtitle:
        "Join the waitlist and get early access when we launch.",
      emailPlaceholder: "you@email.com",
      namePlaceholder: "Your name (optional)",
      cta: "Join the waitlist",
      success: "You've registered successfully! We'll notify you when we launch.",
      error: "Something went wrong. Please try again.",
      alreadyRegistered: "This email is already registered.",
      countPrefix: "",
      countSuffix: "people have joined",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
  },
};

export type Dictionary = (typeof dictionary)["es"];

export function getDictionary(lang: Lang): Dictionary {
  return dictionary[lang] || dictionary.es;
}
