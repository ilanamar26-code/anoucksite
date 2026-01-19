"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { GoogleTestimonials } from "@/components/GoogleTestimonials";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { AnimatedSection } from "@/components/AnimatedSection";
import { primaryCTAUrl, showTestimonials, showTrustLine, cabinetLocation } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0 bg-gradient-to-b from-muted/30 via-background to-background">
        {/* SECTION 1 — HERO — EMOTIONAL ANCHOR */}
        <div className="min-h-screen flex items-center px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Contenu texte — Animation progressive */}
              <motion.div 
                className="space-y-4 md:space-y-5 order-first"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Logo dans encadré intelligent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="w-fit"
                >
                  <Card className="border-primary/20 bg-white shadow-soft hover:shadow-soft2 transition-all duration-300 p-2 md:p-3 w-fit">
                    <div className="w-16 md:w-20 h-16 md:h-20 relative flex items-center justify-center">
                      <Image
                        src="/branding/Unknown-2.jpeg"
                        alt="Anouck Amar"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </Card>
                </motion.div>
                
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
                
                <div className="space-y-3 md:space-y-4">
                  <motion.h1 
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-tight text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    Retrouver un apaisement profond, durable, et enfin respirer.
                  </motion.h1>
                  
                  <motion.div 
                    className="text-sm md:text-base text-foreground/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
                    <p>
                      Je vous accompagne pour faire disparaître ce qui entrave votre épanouissement : angoisses, peurs, stagnation, surmenage, surcontrôle, surpoids...
                    </p>
                  </motion.div>

                  <motion.div 
                    className="space-y-1.5 pt-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                  >
                    <p className="text-xs md:text-sm text-foreground/90">
                      🟢 <strong className="text-foreground">Vous n'êtes pas le problème.</strong>
                    </p>
                    <p className="text-xs md:text-sm text-foreground/90">
                      🟢 <strong className="text-foreground">Votre corps et votre esprit cherchent une solution.</strong>
                    </p>
                    <p className="text-xs md:text-sm text-foreground/90">
                      🟢 <strong className="text-foreground">Et il est possible d'aller mieux, plus vite que vous ne l'imaginez.</strong>
                    </p>
                  </motion.div>
                </div>

                {/* Cards Méthodes */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                >
                  {[
                    { title: "PNL", icon: "🧠" },
                    { title: "Hypnose", icon: "✨" },
                    { title: "Ennéagramme", icon: "🎯" },
                  ].map((method, idx) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.95 + idx * 0.1, duration: 0.5 }}
                    >
                      <Card className="border-primary/20 bg-gradient-to-br from-white/95 via-primary/5 to-white/90 backdrop-blur-sm shadow-soft hover:shadow-soft2 hover:scale-[1.02] transition-all duration-300 h-full">
                        <CardContent className="p-2 text-center space-y-1">
                          <div className="text-xl mb-0.5">{method.icon}</div>
                          <p className="text-xs font-medium text-foreground leading-tight">
                            {method.title}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* CTA — EMOTIONAL ANCHOR */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center gap-4 pt-2"
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
                </motion.div>
              </motion.div>

              {/* Photo d'Anouck — Animation subtile */}
              <motion.div 
                className="relative order-last md:order-last md:sticky md:top-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="relative aspect-[3/4] max-h-[500px] md:max-h-[600px] lg:max-h-[650px] rounded-2xl overflow-hidden shadow-soft2 border-2 border-primary/20"
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
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SECTION 2 — ALIGNEMENT */}
        <AnimatedSection delay={0.1}>
          <Section className="bg-muted/40 rounded-3xl py-16 md:py-20 relative">
            {/* Logo subtil en arrière-plan */}
            <div className="absolute top-8 right-8 opacity-5 hidden md:block">
              <Logo size="xl" variant="auto" bgColor="muted" />
            </div>
            <div className="space-y-10 relative z-10">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                  CE MESSAGE EST POUR VOUS
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold">Je m'adresse à toutes les personnes qui...</h2>
              </motion.div>

              {/* Cards indépendantes 2x2 - Garder 4/5 des cas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    text: (
                      <>
                        qui ont des <strong className="text-foreground">décalages intérieurs</strong>, qui ont l'impression de <strong className="text-foreground">jouer un rôle</strong>, et de <strong className="text-foreground">ne plus savoir qui elles sont vraiment</strong>.
                      </>
                    ),
                    icon: "💫"
                  },
                  { 
                    text: (
                      <>
                        qui <strong className="text-foreground">s'auto-sabotent</strong> sur le chemin de leur <strong className="text-foreground">succès</strong>, ce qui crée une <strong className="text-foreground">frustration</strong> de <strong className="text-foreground">ne pas aller jusqu'au bout</strong>.
                      </>
                    ),
                    icon: "🌀"
                  },
                  { 
                    text: (
                      <>
                        qui souffrent de <strong className="text-foreground">stress, d'anxiété, de tension</strong>, et qui ne trouve <strong className="text-foreground">aucune solution durable</strong> malgré leurs efforts.
                      </>
                    ),
                    icon: "⚡"
                  },
                  { 
                    text: (
                      <>
                        en parcours de <strong className="text-foreground">développement personnel</strong>, d'<strong className="text-foreground">amélioration</strong> au travail ou dans leur vie personnelle et qui cherche une <strong className="text-foreground">approche complémentaire efficace</strong>.
                      </>
                    ),
                    icon: "🌱"
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-white/95 via-primary/5 to-white/90 backdrop-blur-sm shadow-soft2 hover:shadow-glow transition-all duration-300 h-full">
                      <CardContent className="p-6 md:p-8 space-y-4">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                          {item.text}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

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
                        { text: "du développement personnel", icon: "📖", fullWidth: true },
                        { text: "des thérapies classiques", icon: "💊" },
                      ].map((item, idx) => (
                        <motion.div 
                          key={item.text} 
                          className={`flex items-center gap-3 text-base md:text-lg text-foreground/85 bg-white/70 px-4 py-3 rounded-lg border border-border/40 hover:border-primary/30 hover:bg-white/90 transition-all duration-300 ${item.fullWidth ? 'sm:col-span-2' : ''}`}
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

              </motion.div>
            </div>
          </Section>
        </AnimatedSection>

        {/* SECTION 5 — UNE PROTECTION NATURELLE */}
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
                  UNE PROTECTION NATURELLE
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
                  <div className="pt-4 w-full">
                    <CTAButton
                      href={primaryCTAUrl}
                      eventName="cta_click_protection"
                      variant="primary"
                      size="lg"
                      delay={0}
                      className="w-full"
                    >
                      👉 Prendre rendez-vous
                    </CTAButton>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white/95 to-white/90 backdrop-blur-sm border-primary/20 shadow-soft2 hover:shadow-glow transition-all duration-300">
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

        {/* SECTION 6 — ANOUCK AMAR */}
        <AnimatedSection>
          <Section id="a-propos" className="bg-muted/40 rounded-3xl py-16 md:py-20 relative">
            {/* Logo subtil en arrière-plan */}
            <div className="absolute top-8 right-8 opacity-5 hidden md:block">
              <Logo size="xl" variant="auto" bgColor="muted" />
            </div>
            <div className="space-y-10 relative z-10">
              <motion.div 
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
                  ANOUCK AMAR
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Qui suis-je pour vous promettre cela ?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-[1fr_1.8fr] gap-10 items-stretch">
                <motion.div 
                  className="relative order-2 md:order-1 h-full"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="relative h-full rounded-2xl overflow-hidden shadow-soft2 border-2 border-primary/20"
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
                </motion.div>

                <motion.div
                  className="order-1 md:order-2 h-full"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="border-primary/20 bg-gradient-to-br from-white/95 via-white/90 to-primary/5 backdrop-blur-sm shadow-soft2 hover:shadow-glow transition-all duration-300 h-full">
                    <CardContent className="p-8 md:p-10 space-y-6 text-lg md:text-xl text-foreground/85 leading-relaxed">
                      <div className="space-y-5">
                        <p>
                          Depuis l'enfance, j'ai été confrontée à des problèmes de poids et à des <strong className="text-foreground">blocages profonds</strong> qui ont longtemps influencé ma relation à moi-même. J'ai exploré de nombreuses formes de thérapies, cherchant des <strong className="text-foreground">solutions durables</strong>, sans jamais parvenir à un véritable apaisement.
                        </p>
                        <p>
                          Il y a quatre ans, la découverte de la <strong className="text-foreground">PNL et de l'hypnose</strong> a marqué un <strong className="text-foreground">tournant décisif</strong>. Pour la première fois, j'ai compris mes schémas inconscients et pu les transformer en profondeur. Deux ans plus tard, l'<strong className="text-foreground">ennéagramme</strong> est venu enrichir cette approche en apportant une compréhension fine de mes mécanismes de fonctionnement.
                        </p>
                        <p>
                          Aujourd'hui, j'accompagne celles et ceux qui se sentent bloqués dans des <strong className="text-foreground">schémas répétitifs</strong> ou un rapport difficile à eux-mêmes. Grâce à une approche personnalisée mêlant <strong className="text-foreground">PNL, hypnose et ennéagramme</strong>, je vous aide à retrouver <strong className="text-foreground">clarté, équilibre et liberté intérieure</strong>.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </Section>
        </AnimatedSection>

        {/* SECTION 7 — TÉMOIGNAGES GOOGLE */}
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
                <Logo size="sm" variant="auto" bgColor="white" />
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
