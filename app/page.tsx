"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { GoogleTestimonials } from "@/components/GoogleTestimonials";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { AnimatedSection } from "@/components/AnimatedSection";
import { primaryCTAUrl, showTestimonials, showTrustLine, cabinetLocation } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-20 md:pb-0 bg-gradient-to-b from-muted/30 via-background to-background">
        {/* SECTION 1 — HERO — EMOTIONAL ANCHOR */}
        <div className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)] flex items-center px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 lg:gap-20 items-center">
              {/* Contenu texte — Animation progressive */}
              <motion.div 
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="flex items-center gap-2 text-xs md:text-sm font-medium text-foreground/70 bg-primary/5 px-4 py-2 rounded-full border border-primary/10 w-fit"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <motion.span 
                    className="h-2 w-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Cabinet / Visio — sur rendez-vous
                </motion.div>
                
                <div className="space-y-5 md:space-y-6">
                  <motion.h1 
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    Retrouver un apaisement profond, durable, et enfin respirer
                  </motion.h1>
                  
                  <motion.div 
                    className="space-y-4 text-lg md:text-xl text-foreground/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
                    <p>
                      Je vous accompagne pour faire disparaître ce qui entrave votre épanouissement : phobies, traumatismes, angoisses, peurs, sommeil, burnout, surpoids...
                    </p>
                    <p className="text-xl md:text-2xl font-medium text-foreground">
                      👉 Une voie de compréhension, de libération et de transformation intérieure.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="space-y-3 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                  >
                    <p className="text-base md:text-lg text-foreground/90">
                      🟢 <strong className="text-foreground">Vous n'êtes pas le problème.</strong>
                    </p>
                    <p className="text-base md:text-lg text-foreground/90">
                      🟢 <strong className="text-foreground">Votre corps et votre esprit cherchent une solution.</strong>
                    </p>
                    <p className="text-base md:text-lg text-foreground/90">
                      🟢 <strong className="text-foreground">Et il est possible d'aller mieux, plus vite que vous ne l'imaginez.</strong>
                    </p>
                  </motion.div>
                </div>

                {/* Cards Méthodes */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                >
                  {[
                    { title: "Programmation neuro linguistique", icon: "🧠" },
                    { title: "Hypnose", icon: "✨" },
                    { title: "Ennéagramme", icon: "🔮" },
                  ].map((method, idx) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.95 + idx * 0.1, duration: 0.5 }}
                    >
                      <Card className="border-primary/20 bg-gradient-to-br from-white/95 via-primary/5 to-white/90 backdrop-blur-sm shadow-soft hover:shadow-soft2 hover:scale-[1.02] transition-all duration-300 h-full">
                        <CardContent className="p-4 text-center space-y-2">
                          <div className="text-3xl mb-2">{method.icon}</div>
                          <p className="text-sm md:text-base font-medium text-foreground leading-tight">
                            {method.title}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* CTA — EMOTIONAL ANCHOR */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-start gap-4 pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                  >
                  <CTAButton
                    href={primaryCTAUrl}
                    eventName="cta_click_hero"
                    variant="primary"
                    size="lg"
                    delay={0}
                    className="w-full sm:w-auto"
                  >
                    👉 Prendre rendez-vous
                  </CTAButton>
                  <CTAButton
                    href="/cas-d-usage"
                    eventName="cta_click_cas_usage_hero"
                    variant="secondary"
                    size="lg"
                    delay={0.1}
                    className="w-full sm:w-auto"
                  >
                    Découvrir les cas d'usage
                  </CTAButton>
                  {showTrustLine && (
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3, duration: 0.5 }}
                    >
                      Réponse sous 24–48h
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>

              {/* Photo d'Anouck — Animation subtile */}
              <motion.div 
                className="relative order-first md:order-last"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="relative aspect-[3/4] max-h-[500px] md:max-h-[650px] rounded-2xl overflow-hidden shadow-soft2 border-2 border-primary/20"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/anouck-hero.png"
                    alt="Anouck Amar - Praticienne PNL, Hypnose, Ennéagramme"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  {/* Badge avec logo — Animation */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-soft border border-primary/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Logo size="sm" variant="dark" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SECTION 2 — RECONNAISSANCE ÉMOTIONNELLE */}
        <AnimatedSection>
          <Section>
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <motion.p 
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/90 bg-primary/5 px-4 py-2 rounded-full border border-primary/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Protection avant confort
                </motion.p>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  Ton cerveau n'est pas conçu pour te rendre heureuse.
                  <br />
                  Il est conçu pour te protéger.
                </h2>
                <div className="space-y-5 text-lg md:text-xl text-foreground/80 leading-relaxed">
                  <p><strong className="text-foreground">Tu n'es pas cassé(e).</strong></p>
                  <p><strong className="text-foreground">Ton système essaie de te protéger.</strong></p>
                  <p>Ton système fait exactement ce qu'il a appris à faire pour te protéger.</p>
                  <p>
                    <strong className="text-foreground">Et on peut le reprogrammer autrement.</strong>
                  </p>
                  <p className="pt-2 text-xl font-medium text-foreground">
                    <strong>Il est possible d'aller mieux sans se forcer.</strong>
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white/95 to-white/90 backdrop-blur-sm border-primary/20 shadow-soft2 hover:shadow-glow transition-all duration-300">
                  <div className="absolute top-4 right-4 opacity-10">
                    <Logo size="lg" variant="dark" />
                  </div>
                  <CardContent className="p-8 md:p-10 space-y-4 text-lg md:text-xl text-foreground/85 leading-relaxed relative z-10">
                    <div className="space-y-4">
                      <p className="font-semibold text-foreground text-xl"><strong>Votre problématique a une logique.</strong></p>
                      <p>Ton système privilégie la survie avant le confort.</p>
                      <p className="font-medium text-primary text-lg"><strong>Le changement peut être doux.</strong></p>
                      <p className="pt-2"><strong className="text-foreground">Votre corps sait déjà comment guérir.</strong></p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </Section>
        </AnimatedSection>

        {/* SECTION 3 — CE QUE LA PERSONNE A DÉJÀ ESSAYÉ */}
        <AnimatedSection delay={0.1}>
          <Section className="bg-gradient-to-br from-muted/40 via-muted/30 to-muted/40 rounded-3xl py-16 md:py-20">
            <div className="space-y-12">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  Tu ne vois pas la réalité telle qu'elle est.
                  <br />
                  Tu la vois à travers un filtre de protection.
                </h2>
                <div className="text-foreground/80 text-lg md:text-xl leading-relaxed space-y-5">
                  <p className="font-medium text-foreground">Ton cerveau ajuste en permanence ce que tu perçois pour :</p>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {[
                      { text: "préserver ton équilibre", icon: "🛡️" },
                      { text: "maintenir une image cohérente de toi", icon: "🪞" },
                      { text: "éviter l'effondrement intérieur", icon: "⚖️" },
                    ].map((item, idx) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                      >
                        <Card className="border-primary/20 bg-white/95 backdrop-blur-sm hover:shadow-soft2 hover:scale-[1.02] transition-all duration-300 cursor-default">
                          <CardContent className="p-6 text-center space-y-3">
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <p className="text-base md:text-lg font-medium text-foreground">{item.text}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <Separator className="bg-border/60" />

              <div className="grid md:grid-cols-[1fr_0.6fr] gap-10 items-center">
                <motion.div 
                  className="space-y-6 text-foreground/80 text-lg md:text-xl"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="font-semibold text-foreground text-xl">Tu as peut-être déjà essayé :</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { text: "de comprendre", icon: "💭" },
                      { text: "d'analyser", icon: "🔍" },
                      { text: "de contrôler", icon: "🎯" },
                      { text: "de lâcher prise", icon: "🧘" },
                      { text: "du développement personnel", icon: "📚" },
                    ].map((item, idx) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Card className="border-border/60 bg-white/95 backdrop-blur-sm hover:border-primary/40 hover:shadow-soft transition-all duration-300 cursor-default">
                          <CardContent className="p-4 text-center space-y-2">
                            <div className="text-2xl">{item.icon}</div>
                            <p className="text-sm md:text-base font-medium text-foreground">{item.text}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  <p className="pt-4 font-medium text-foreground text-lg">
                    Et malgré tout, le stress, l'anxiété ou la tension reviennent.
                  </p>
                </motion.div>
                
                {/* CTA CARD — EMOTIONAL ANCHOR */}
                <motion.div 
                  className="flex md:justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-white/95 to-white/90 backdrop-blur-sm shadow-soft2 hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8 text-center space-y-5">
                      <motion.div 
                        className="text-5xl mb-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      >
                        ✨
                      </motion.div>
                      <p className="text-base font-medium text-foreground/80">
                        Prête à explorer une autre voie ?
                      </p>
                      <CTAButton
                        href={primaryCTAUrl}
                        eventName="cta_click_mid"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        delay={0}
                      >
                        👉 Prendre rendez-vous
                      </CTAButton>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </Section>
        </AnimatedSection>

        {/* SECTION 4 — MA FAÇON DE TRAVAILLER */}
        <AnimatedSection>
          <Section>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div 
                className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl md:text-2xl font-medium text-foreground">
                  Tu crois décider avec ta tête.
                  <br />
                  En réalité, ton système nerveux décide avant.
                </p>
                <p>Ici, on ne travaille pas uniquement avec le mental.</p>
                <p>On travaille avec ce qui, en toi, réagit encore comme si le danger était présent.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white/95 to-white/90 backdrop-blur-sm border-primary/20 shadow-soft2 hover:shadow-glow transition-all duration-300">
                  <motion.div 
                    className="absolute bottom-4 left-4 opacity-5"
                    style={{ transform: "rotate(12deg)" }}
                    animate={{ rotate: [12, 18, 12] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    <Logo size="xl" variant="dark" />
                  </motion.div>
                  <CardContent className="p-8 md:p-10 space-y-4 text-lg md:text-xl text-foreground leading-relaxed relative z-10">
                    <div className="space-y-4">
                      <p className="font-semibold text-xl text-primary">Quand ton système change,</p>
                      <p className="font-medium text-lg">tes réactions changent.</p>
                      <p className="font-semibold text-xl text-primary">Sans forcer. Sans lutter.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </Section>
        </AnimatedSection>

        {/* SECTION 5 — TÉMOIGNAGES GOOGLE */}
        {showTestimonials && (
          <AnimatedSection delay={0.1}>
            <Section id="temoignages">
              <div className="space-y-8">
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                    Témoignages
                  </p>
                  <h2 className="text-3xl md:text-4xl font-semibold">Des dizaines de personnes m'ont déjà fait confiance</h2>
                  <p className="text-sm text-muted-foreground">
                    Trustindex vérifie que la source originale de l'avis est Google.
                  </p>
                </motion.div>
                <GoogleTestimonials />
                <motion.div 
                  className="text-center pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <CTAButton
                    href={primaryCTAUrl}
                    eventName="cta_click_testimonials"
                    variant="primary"
                    size="lg"
                    delay={0}
                  >
                    👉 Prendre rendez-vous
                  </CTAButton>
                </motion.div>
              </div>
            </Section>
          </AnimatedSection>
        )}

        {/* SECTION 6 — À QUI ÇA S'ADRESSE */}
        <AnimatedSection delay={0.1}>
          <Section className="bg-muted/40 rounded-3xl py-16 md:py-20">
            <div className="space-y-10">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                  Alignement
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold">Je m'adresse à toutes les personnes qui...</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-white/95 via-primary/5 to-white/90 backdrop-blur-sm shadow-soft2 hover:shadow-glow transition-all duration-300">
                  <div className="absolute top-6 right-6 opacity-5">
                    <Logo size="lg" variant="dark" />
                  </div>
                  <CardContent className="p-8 md:p-10 space-y-6 relative z-10">
                    <div className="grid gap-5">
                      {[
                        { text: "Toutes les personnes qui ont eu des", highlight: "décalages intérieurs", highlight2: "blocages émotionnels", icon: "💫" },
                        { text: "Toutes les personnes qui souffrent de", highlight: "stress, d'anxiété, de tensions", icon: "🌀" },
                        { text: "Toutes les personnes qui sont", highlight: "tendues, anxieuses", highlight2: "pression intérieure", icon: "⚡" },
                        { text: "Toutes les personnes en", highlight: "parcours de développement personnel", icon: "🌱" },
                        { text: "Toutes les personnes qui sentent que les", highlight: "perturbations de leur système sont liées", icon: "🔗" },
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                          <div className="text-2xl flex-shrink-0 mt-1">{item.icon}</div>
                          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed flex-1">
                            {item.text} <strong className="text-foreground">{item.highlight}</strong>
                            {item.highlight2 && (
                              <> ou <strong className="text-foreground">{item.highlight2}</strong></>
                            )}
                            {idx === 0 && " qui rendent parfois leur quotidien difficile..."}
                            {idx === 1 && " et qui ne trouvent aucune solution durable malgré leurs efforts."}
                            {idx === 2 && ", qui ressentent une pression intérieure, des réactions incontrôlables..."}
                            {idx === 3 && " et qui recherchent une approche complémentaire efficace."}
                            {idx === 4 && ", mais qui ne trouvent pas la bonne personne pour les traiter."}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                className="space-y-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Si tu es dans <span className="text-primary">l'une des situations citées ci-dessus</span>,
                </h3>
                <p className="text-xl md:text-2xl text-foreground/90 font-medium">
                  Sache qu'il est possible d'<strong className="text-foreground">apaiser durablement ces tensions</strong>, même si tu penses avoir déjà tout essayé...
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Card className="relative overflow-hidden border-2 border-dashed border-primary/30 bg-gradient-to-br from-white/90 via-primary/5 to-white/90 backdrop-blur-sm shadow-soft hover:shadow-soft2 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 opacity-5">
                    <Logo size="md" variant="dark" />
                  </div>
                  <CardContent className="p-8 md:p-10 space-y-5 relative z-10">
                    <p className="text-lg md:text-xl font-semibold text-foreground">
                      Tu as peut-être déjà essayé :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { text: "de comprendre intellectuellement", icon: "🧠" },
                        { text: "d'analyser tes schémas", icon: "🔬" },
                        { text: "de contrôler tes réactions", icon: "🎯" },
                        { text: "de lâcher prise (sans y arriver)", icon: "🤲" },
                        { text: "du développement personnel", icon: "📖" },
                        { text: "des thérapies classiques", icon: "💊" },
                      ].map((item, idx) => (
                        <motion.div 
                          key={item.text} 
                          className="flex items-center gap-3 text-base md:text-lg text-foreground/85 bg-white/70 px-4 py-3 rounded-lg border border-border/40 hover:border-primary/30 hover:bg-white/90 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.4 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span>{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-primary/20">
                      <motion.p 
                        className="text-lg md:text-xl font-semibold text-primary text-center"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        ✨ Une autre voie est possible ! ✨
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA — EMOTIONAL ANCHOR */}
              <motion.div 
                className="text-center pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <CTAButton
                  href={primaryCTAUrl}
                  eventName="cta_click_qualification"
                  variant="primary"
                  size="lg"
                  delay={0}
                >
                  👉 Prendre rendez-vous
                </CTAButton>
              </motion.div>

              <Separator className="bg-border/60" />

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold">À qui cet accompagnement s'adresse</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-white/95 to-white/90 backdrop-blur-sm shadow-soft2 hover:shadow-glow transition-all duration-300 h-full">
                      <div className="absolute top-4 right-4 opacity-5">
                        <Logo size="md" variant="dark" />
                      </div>
                      <CardContent className="p-8 space-y-5 relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-4xl">✅</div>
                          <h3 className="text-xl font-semibold text-foreground">C'est pour toi si :</h3>
                        </div>
                        <ul className="space-y-4 text-foreground/85 text-lg">
                          {[
                            { text: "tu te reconnais dans ce décalage intérieur", icon: "🎯" },
                            { text: "tu veux un changement réel, pas juste de la compréhension", icon: "💫" },
                            { text: "tu es prête à t'impliquer dans un vrai travail", icon: "🌱" },
                          ].map((item, idx) => (
                            <motion.li 
                              key={item.text} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
                            >
                              <span className="text-xl flex-shrink-0">{item.icon}</span>
                              <span className="flex-1">{item.text}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <Card className="relative overflow-hidden border-border/70 bg-white/95 backdrop-blur-sm shadow-soft hover:shadow-soft2 transition-all duration-300 h-full">
                      <CardContent className="p-8 space-y-5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-4xl">❌</div>
                          <h3 className="text-xl font-semibold text-foreground">Ce n'est pas pour toi si :</h3>
                        </div>
                        <ul className="space-y-4 text-foreground/85 text-lg">
                          {[
                            { text: "tu cherches une solution magique", icon: "✨" },
                            { text: "tu veux tout contrôler sans rien explorer", icon: "🔒" },
                            { text: "tu n'es pas prête à te regarder avec honnêteté", icon: "🪞" },
                          ].map((item, idx) => (
                            <motion.li 
                              key={item.text} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
                            >
                              <span className="text-xl flex-shrink-0">{item.icon}</span>
                              <span className="flex-1">{item.text}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <Card className="border-dashed border-border/80 bg-white/90 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-8 md:p-10 space-y-4 text-lg md:text-xl text-foreground/85 leading-relaxed">
                      <h3 className="text-2xl font-semibold text-foreground">Mon approche</h3>
                      <p>
                        Ici, on ne force pas le changement.
                        <br />
                        On ne lutte pas contre toi.
                      </p>
                      <p>
                        On ne travaille pas uniquement avec le mental.
                        <br />
                        On travaille avec ce qui, en toi, réagit encore comme si le danger était présent.
                      </p>
                      <p className="font-medium">Quand ton système se sent enfin en sécurité :</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>les réactions changent</li>
                        <li>les schémas s'assouplissent</li>
                        <li>le contrôle devient inutile</li>
                      </ul>
                      <p className="font-semibold text-foreground text-xl pt-2">
                        👉 Le changement devient possible sans te forcer à lâcher prise.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </Section>
        </AnimatedSection>

        {/* SECTION 7 — QUI SUIS-JE (CRÉDIBILITÉ) */}
        <AnimatedSection>
          <Section id="a-propos">
            <div className="space-y-10">
              <motion.div 
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                  Crédibilité
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Qui suis-je pour que tu me fasses confiance ?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
                <motion.div 
                  className="relative order-2 md:order-1"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="relative aspect-[3/4] max-h-[500px] rounded-2xl overflow-hidden shadow-soft2 border-2 border-primary/20"
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <Image
                      src="/anouck-hero.png"
                      alt="Anouck Amar"
                      fill
                      className="object-cover object-center"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-soft2 border-2 border-primary/20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Logo size="sm" variant="dark" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="order-1 md:order-2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="border-primary/20 bg-gradient-to-br from-white/95 via-white/90 to-primary/5 backdrop-blur-sm shadow-soft2 hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8 md:p-10 space-y-6 text-lg md:text-xl text-foreground/85 leading-relaxed">
                      <div className="space-y-5">
                        <p>
                          Je suis <strong className="text-foreground text-xl">Anouck AMAR</strong>, praticienne en PNL, hypnose et ennéagramme.
                        </p>
                        <p>
                          Depuis plusieurs années, j'accompagne des personnes qui, comme toi peut-être, se sentent bloquées malgré leur compréhension intellectuelle de leurs difficultés.
                        </p>
                        <p>
                          Ce qui me passionne, c'est de travailler avec ce qui, en toi, réagit encore comme si le danger était présent — même quand ta tête sait que ce n'est plus le cas.
                        </p>
                        <p>
                          Mon approche ne se limite pas au mental. Elle s'adresse directement à ton système nerveux, à ce qui, en toi, a besoin de se sentir enfin en sécurité pour que les réactions changent naturellement, sans forcer.
                        </p>
                        <p className="font-semibold text-foreground text-xl pt-2">
                          Aujourd'hui, je mets toute cette expérience et cette énergie au service de celles qui sont prêtes à explorer une autre voie.
                        </p>
                      </div>
                      
                      <div className="pt-6 border-t border-border/60">
                        <p className="text-base md:text-lg text-muted-foreground">
                          <strong className="text-foreground">Cabinet / Visio</strong> — {cabinetLocation.address}
                        </p>
                        {cabinetLocation.fullAddress && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {cabinetLocation.fullAddress}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </Section>
        </AnimatedSection>

        {/* SECTION 8 — APPEL À L'ACTION PRINCIPAL — ULTIMATE EMOTIONAL ANCHOR */}
        <AnimatedSection delay={0.2}>
          <Section>
            <motion.div 
              className="relative overflow-hidden text-center space-y-8 max-w-5xl mx-auto bg-gradient-to-br from-primary/10 via-white/95 to-white/90 backdrop-blur-sm rounded-3xl border-2 border-primary/20 shadow-soft2 px-8 py-16 md:px-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            >
              {/* Logo stylisé en arrière-plan */}
              <motion.div 
                className="absolute top-8 right-8 opacity-5"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Logo size="xl" variant="dark" />
              </motion.div>
              <motion.div 
                className="absolute bottom-8 left-8 opacity-5"
                style={{ transform: "rotate(180deg)" }}
                animate={{ rotate: [180, 540] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Logo size="xl" variant="dark" />
              </motion.div>
              
              <div className="relative z-10 space-y-8">
                <motion.div 
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/90 bg-primary/10 px-5 py-2.5 rounded-full border border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.span 
                    className="h-2.5 w-2.5 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Dernière étape
                </motion.div>
                
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Séance de clarté & orientation
                </motion.h2>
                
                <motion.p 
                  className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Une séance pour comprendre ce qui se joue vraiment pour toi
                  <br />
                  et voir si cet accompagnement est adapté.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col items-center gap-5 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <CTAButton
                    href={primaryCTAUrl}
                    eventName="cta_click_final"
                    variant="primary"
                    size="lg"
                    delay={0}
                    className="px-12 py-7 text-xl font-semibold"
                  >
                    👉 Prendre rendez-vous maintenant
                  </CTAButton>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Réponse sous 24–48h • Cabinet / Visio
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </Section>
        </AnimatedSection>

        {/* FOOTER */}
        <footer className="border-t border-border/80 bg-white/80 backdrop-blur-sm py-10 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-foreground/80">
              <div className="flex flex-col items-center md:items-start gap-3">
                <Logo size="sm" variant="dark" />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-foreground">Anouck AMAR</p>
                  <p>Cabinet / Visio — sur rendez-vous</p>
                </div>
              </div>
              <nav className="flex gap-6">
                <a
                  href="/mentions-legales"
                  className="hover:text-foreground transition-colors"
                >
                  Mentions légales
                </a>
                <a
                  href="/politique-confidentialite"
                  className="hover:text-foreground transition-colors"
                >
                  Politique de confidentialité
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </main>
      <MobileStickyCTA />
    </>
  );
}
