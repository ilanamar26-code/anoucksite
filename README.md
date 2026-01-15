# Anouck AMAR — Site de réservation

Site de landing page single-page avec flow de réservation pour Anouck AMAR, praticienne en PNL, hypnose et ennéagramme.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Configuration

1. **Cal.com URL** : Modifier `lib/constants.ts` et remplacer `calcomUrl` par votre URL Cal.com réelle :
   ```typescript
   export const calcomUrl = "https://cal.com/votre-username";
   ```

2. **Plausible Analytics** : Modifier `app/layout.tsx` et remplacer `data-domain="anouckamar.fr"` par votre domaine réel.

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
app/
  page.tsx                    # Landing page principale
  rdv/page.tsx                # Page de réservation (questions + calendrier)
  mentions-legales/page.tsx   # Mentions légales
  politique-confidentialite/  # Politique de confidentialité
components/
  Section.tsx                 # Wrapper de section
  CTAButton.tsx              # Bouton CTA avec tracking
  Testimonials.tsx           # Section témoignages
  BookingQuestions.tsx       # Formulaire de questions (RHF + Zod)
  CalendlyEmbed.tsx          # Embed Cal.com (générique)
  MobileStickyCTA.tsx        # CTA sticky mobile
lib/
  constants.ts               # Configuration et constantes
  analytics.ts               # Helper Plausible
  utils.ts                   # Utilitaires (cn)
```

## 🎯 Fonctionnalités

- ✅ Landing page single-page avec 7 sections
- ✅ Flow de réservation en 2 étapes (questions → calendrier)
- ✅ Tracking analytics avec Plausible
- ✅ CTA sticky mobile (masqué sur `/rdv`)
- ✅ Design responsive et accessible
- ✅ Pages légales (mentions légales, politique de confidentialité)

## 📊 Analytics

Les événements suivants sont trackés avec Plausible :

- `cta_click_hero` - Clic sur CTA hero
- `cta_click_mid` - Clic sur CTA milieu de page
- `cta_click_testimonials` - Clic sur CTA après témoignages
- `cta_click_final` - Clic sur CTA final
- `cta_click_sticky_mobile` - Clic sur CTA sticky mobile
- `booking_page_view` - Vue de la page de réservation
- `booking_questions_submit` - Soumission du formulaire de questions
- `calendar_view` - Affichage du calendrier

## 🛠️ Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Plausible Analytics
- Lucide Icons

## 📝 Notes

- Le site est conçu comme une landing page conversion-first
- Tous les CTAs pointent vers `/rdv`
- Le formulaire de questions limite à 3 questions maximum
- Le calendrier Cal.com est intégré via iframe
- Le CTA sticky mobile est visible uniquement sur mobile (≤ md breakpoint)
