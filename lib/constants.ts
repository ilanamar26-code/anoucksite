export const practitionerName = "Anouck AMAR";
export const primaryCTAUrl = "/rdv";
export const bookingProvider: "calendly" | "calcom" = "calcom";
export const calendlyUrl = "https://calendly.com/XXXXX"; // Placeholder
export const calcomUrl = "https://cal.com/XXXXX"; // Placeholder - replace with actual Cal.com URL

export const showTestimonials = true;
export const showTrustLine = true;
export const showScarcity = false;

export interface Testimonial {
  name: string;
  location: "Visio" | "Cabinet";
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Camille D.",
    location: "Visio",
    quote: "Je suis sortie de la séance avec une clarté que je n'avais pas depuis longtemps. Je me suis sentie plus calme, sans avoir besoin de forcer.",
  },
  {
    name: "Sarah M.",
    location: "Cabinet",
    quote: "J'avais déjà beaucoup compris intellectuellement. Là, quelque chose s'est enfin apaisé à l'intérieur.",
  },
  {
    name: "Nina R.",
    location: "Visio",
    quote: "Ça m'a permis de voir ce qui se jouait vraiment pour moi. Après la séance, mes réactions n'étaient plus les mêmes.",
  },
  {
    name: "Julie A.",
    location: "Visio",
    quote: "Je suis venue avec beaucoup de tension. Je suis repartie avec un vrai sentiment d'espace et de sécurité.",
  },
  {
    name: "Élodie P.",
    location: "Cabinet",
    quote: "Ce n'était pas ce à quoi je m'attendais, mais c'est exactement ce dont j'avais besoin.",
  },
];

export const cabinetLocation = {
  address: "Ustaritz",
  fullAddress: "Centre commercial Super U, Route de Cambo, 64480 Ustaritz",
};
