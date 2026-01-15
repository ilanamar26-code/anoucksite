"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  problem: z.string().min(10, "Merci de décrire brièvement votre situation"),
  duration: z.enum(["< 1 mois", "1–6 mois", "6–12 mois", "+ 1 an"], {
    required_error: "Veuillez sélectionner une durée",
  }),
  priorWork: z.enum(["Oui", "Non"], {
    required_error: "Veuillez répondre à cette question",
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingQuestionsProps {
  onComplete: (data: BookingFormData) => void;
}

export function BookingQuestions({ onComplete }: BookingQuestionsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormData) => {
    track("booking_questions_submit", {
      duration: data.duration,
      priorWork: data.priorWork,
    });
    onComplete(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
          Quel est le problème principal pour lequel tu consultes aujourd'hui ?
        </label>
        <textarea
          id="problem"
          {...register("problem")}
          rows={4}
          className={cn(
            "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors",
            errors.problem && "border-red-500"
          )}
          placeholder="Décris brièvement ta situation..."
        />
        {errors.problem && (
          <p className="mt-1 text-sm text-red-600">{errors.problem.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
          Depuis combien de temps cela dure-t-il ?
        </label>
        <select
          id="duration"
          {...register("duration")}
          className={cn(
            "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors bg-white",
            errors.duration && "border-red-500"
          )}
        >
          <option value="">Sélectionne une option</option>
          <option value="< 1 mois">&lt; 1 mois</option>
          <option value="1–6 mois">1–6 mois</option>
          <option value="6–12 mois">6–12 mois</option>
          <option value="+ 1 an">+ 1 an</option>
        </select>
        {errors.duration && (
          <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          As-tu déjà fait un travail sur toi ?
        </label>
        <div className="space-y-2">
          {(["Oui", "Non"] as const).map((value) => (
            <label
              key={value}
              className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                value={value}
                {...register("priorWork")}
                className="w-4 h-4 text-rose-600 focus:ring-rose-500"
              />
              <span className="text-gray-700">{value}</span>
            </label>
          ))}
        </div>
        {errors.priorWork && (
          <p className="mt-1 text-sm text-red-600">{errors.priorWork.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[44px]"
      >
        {isSubmitting ? "Chargement..." : "Accéder au calendrier"}
      </button>
    </form>
  );
}
