"use client";

import { useState, useEffect } from "react";
import { BookingQuestions } from "@/components/BookingQuestions";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { track } from "@/lib/analytics";
import type { z } from "zod";

type BookingFormData = {
  problem: string;
  duration: string;
  priorWork: "Oui" | "Non";
};

export default function BookingPage() {
  const [step, setStep] = useState<"questions" | "calendar">("questions");
  const [formData, setFormData] = useState<BookingFormData | null>(null);

  useEffect(() => {
    track("booking_page_view");
  }, []);

  const handleQuestionsComplete = (data: BookingFormData) => {
    setFormData(data);
    setStep("calendar");
  };

  return (
    <main className="min-h-screen bg-muted/30 py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {step === "questions" ? (
          <div className="bg-card rounded-lg shadow-soft border border-border p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Avant de réserver
            </h1>
            <p className="text-muted-foreground mb-8">
              Quelques questions rapides pour mieux comprendre ta situation.
            </p>
            <BookingQuestions onComplete={handleQuestionsComplete} />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-card rounded-lg shadow-soft border border-border p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Choisis ton créneau
              </h1>
              <p className="text-muted-foreground">
                Sélectionne un horaire qui te convient pour ta séance de clarté.
              </p>
            </div>
            <CalendlyEmbed />
          </div>
        )}
      </div>
    </main>
  );
}
