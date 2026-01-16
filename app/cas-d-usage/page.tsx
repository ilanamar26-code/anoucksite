"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { CTAButton } from "@/components/CTAButton";
import { primaryCTAUrl } from "@/lib/constants";

export default function CasUsagePage() {
  const useCases = [
    {
      icon: "🧠",
      title: "Anxiété & surcharge mentale",
      subtitle: "Quand tout est sous contrôle… sauf l'intérieur",
      symptoms: [
        "Pensées qui tournent",
        "Difficulté à lâcher prise",
        "Hyper-vigilance permanente",
      ],
      solutions: [
        "👉 Apprendre à calmer le système nerveux en profondeur",
        "👉 Retrouver une sécurité intérieure stable",
      ],
      message: "Votre problématique a une logique. Le changement peut être doux.",
    },
    {
      icon: "😴",
      title: "Sommeil",
      subtitle: "Dormir sans lutter",
      symptoms: [
        "Endormissement difficile",
        "Réveils nocturnes",
        "Corps fatigué, esprit en alerte",
      ],
      solutions: [
        "👉 Réinstaller des nuits réparatrices",
        "👉 Permettre au corps de se reposer enfin",
      ],
      message: "Votre corps sait déjà comment guérir. Vous pouvez retrouver de la légèreté. Le changement peut être doux.",
      bgAlt: true,
    },
    {
      icon: "🍽️",
      title: "Relation à la nourriture",
      subtitle: "Se libérer de la lutte avec son corps",
      symptoms: [
        "Contrôle / perte de contrôle",
        "Culpabilité",
        "Rapport conflictuel à l'alimentation",
      ],
      solutions: [
        "👉 Retrouver une relation plus douce, plus juste avec soi-même",
        "👉 Sortir du cycle tension → compensation",
      ],
      message: "Tu n'es pas cassé(e). Ton système essaie de te protéger. Et on peut le reprogrammer autrement.",
    },
    {
      icon: "🐭",
      title: "Phobies",
      subtitle: "Quand la peur prend toute la place",
      symptoms: [
        "Réactions disproportionnées",
        "Peur incontrôlable",
        "Évitement",
      ],
      solutions: [
        "👉 Désactiver la réponse automatique de peur",
        "👉 Retrouver de la liberté là où il y avait une prison",
      ],
      message: "Votre problématique a une logique. Vous pouvez retrouver de la légèreté.",
      bgAlt: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-muted/30 via-background to-background pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center space-y-6 mb-16">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Cas d'usage
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Je vous accompagne pour faire disparaître ce qui entrave votre épanouissement
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Use Cases */}
        {useCases.map((useCase, index) => (
          <AnimatedSection key={useCase.title} delay={index * 0.1}>
            <Section className={useCase.bgAlt ? "bg-gradient-to-br from-muted/40 via-muted/30 to-muted/40 rounded-3xl py-16 md:py-20" : ""}>
              <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="text-5xl mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {useCase.icon}
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                    {useCase.title}
                  </h2>
                  <p className="text-xl md:text-2xl font-medium text-foreground/90">
                    {useCase.subtitle}
                  </p>
                  <div className="space-y-4 text-lg md:text-xl text-foreground/80 leading-relaxed">
                    {useCase.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-primary text-xl">•</span>
                        <p>{symptom}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white/95 to-white/90 backdrop-blur-sm border-primary/20 shadow-soft2 hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8 md:p-10 space-y-4 text-lg md:text-xl text-foreground/85 leading-relaxed">
                      <div className="space-y-4">
                        {useCase.solutions.map((solution, idx) => (
                          <p key={idx} className="font-semibold text-primary text-xl">
                            {solution}
                          </p>
                        ))}
                        <p className="pt-4 text-base text-foreground/80">
                          <strong className="text-foreground">{useCase.message}</strong>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </Section>
          </AnimatedSection>
        ))}

        {/* CTA Section */}
        <AnimatedSection delay={0.4}>
          <div className="text-center space-y-8 mt-16">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Prête à explorer une autre voie ?
              </h2>
              <p className="text-lg md:text-xl text-foreground/80">
                Prenez rendez-vous pour une séance de clarté
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <CTAButton
                href={primaryCTAUrl}
                eventName="cta_click_cas_usage"
                variant="primary"
                size="lg"
                delay={0}
              >
                👉 Prendre rendez-vous
              </CTAButton>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
