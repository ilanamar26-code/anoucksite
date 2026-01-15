import { Section } from "@/components/Section";
import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen py-12 md:py-16">
      <Section>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Politique de confidentialité</h1>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Collecte des données</h2>
              <p>
                Les données personnelles collectées sur ce site sont utilisées uniquement dans le cadre
                de la prise de rendez-vous et de la communication avec Anouck AMAR.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Utilisation des données</h2>
              <p>
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Traiter vos demandes de rendez-vous</li>
                <li>Vous contacter concernant votre séance</li>
                <li>Améliorer nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Conservation des données</h2>
              <p>
                Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles
                elles ont été collectées, conformément à la réglementation en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression
                et d'opposition concernant vos données personnelles. Pour exercer ces droits,
                contactez Anouck AMAR.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Cookies et analytics</h2>
              <p>
                Ce site utilise Plausible Analytics, un outil d'analyse respectueux de la vie privée
                qui ne nécessite pas de cookies et qui est conforme au RGPD.
              </p>
            </section>
          </div>

          <div className="pt-8">
            <Link
              href="/"
              className="text-rose-600 hover:underline font-medium"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
