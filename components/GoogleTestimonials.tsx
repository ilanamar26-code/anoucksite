"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Témoignages Google - À remplacer par votre widget Google Reviews
// Vous pouvez utiliser Trustindex, Google Reviews API, ou un widget embed
export function GoogleTestimonials() {
  // Placeholder - Remplacez par vos vrais témoignages Google
  const testimonials = [
    {
      name: "Camille D.",
      date: "2025-03-19",
      rating: 5,
      text: "Séance de groupe pour apprendre à découvrir Anouck et la pratique de la relaxation et comment fonctionne l'hypnose. Séance super intéressante, Anouck met tout de suite en confiance et est très solaire ce qui fait plaisir ☀️, je compte prendre d'autres séances avec elle alors vous pouvez y aller les yeux fermés 🙈✨",
      verified: true,
    },
    {
      name: "Sarah M.",
      date: "2025-02-16",
      rating: 5,
      text: "Anouck m'a accueillie avec bienveillance. Elle a été très à l'écoute de mes enjeux et m'a aidée avec une solution sur-mesure. Je suis très reconnaissante et je vous la recommande vivement.",
      verified: true,
    },
    {
      name: "Nina R.",
      date: "2024-12-30",
      rating: 5,
      text: "Je viens de faire une séance d'hypnose avec Anouck, et je ne peux que la recommander chaleureusement. Dès le début, on sent son intégrité et sa bienveillance. Elle a véritablement à cœur de bien faire son travail.",
      verified: true,
    },
    {
      name: "Julie A.",
      date: "2024-11-05",
      rating: 5,
      text: "Anouck est une thérapeute bienveillante et à l'écoute. Elle sait nous guider pour utiliser au mieux nos ressources intérieures. Je recommande les yeux fermés.",
      verified: true,
    },
  ];

  const averageRating = 5;
  const totalReviews = testimonials.length;
  
  // Limiter à 3 témoignages
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Header avec note moyenne */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="text-4xl font-bold text-foreground">EXCELLENT</div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-primary">★</span>
            ))}
          </div>
          <span className="text-lg text-foreground/80">
            Basée sur <strong>{totalReviews} avis</strong>
          </span>
        </div>
      </motion.div>

      {/* Grid de témoignages - 3 en grille statique */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedTestimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <Card className="w-full border-primary/20 bg-gradient-to-br from-white/95 via-primary/5 to-white/90 backdrop-blur-sm shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all duration-300 h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 border-2 border-primary/30 bg-primary/10">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/20 text-primary font-semibold text-base">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(testimonial.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <span className="text-xs text-primary/80 text-right">
                      ✓ Vérifié
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg text-primary">★</span>
                  ))}
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
