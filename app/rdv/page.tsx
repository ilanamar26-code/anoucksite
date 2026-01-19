"use client";

import { useEffect } from "react";
import { BookingQuestions } from "@/components/BookingQuestions";
import { track } from "@/lib/analytics";

type BookingFormData = {
  problem: string;
  duration: string;
  priorWork: "Oui" | "Non";
};

export default function BookingPage() {
  useEffect(() => {
    track("booking_page_view");
  }, []);

  const handleQuestionsComplete = (data: BookingFormData) => {
    track("booking_questions_complete");
  };

  return (
    <main className="min-h-screen bg-muted/30 py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card rounded-lg shadow-soft border border-border p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Avant de réserver
          </h1>
          <p className="text-muted-foreground mb-8">
            Quelques questions rapides pour mieux comprendre ta situation.
          </p>
          <BookingQuestions onComplete={handleQuestionsComplete} />
        </div>
      </div>
    </main>
  );
}
