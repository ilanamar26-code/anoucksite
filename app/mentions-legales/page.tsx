import { Section } from "@/components/Section";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen py-12 md:py-16">
      <Section>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Mentions légales</h1>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Éditeur du site</h2>
              <p>
                Le site est édité par Anouck AMAR, praticienne en PNL, hypnose et ennéagramme.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Hébergement</h2>
              <p>
                Le site est hébergé par [À compléter avec les informations d'hébergement].
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos) est la propriété d'Anouck AMAR
                et est protégé par les lois relatives à la propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Données personnelles</h2>
              <p>
                Pour plus d'informations sur le traitement de vos données personnelles,
                consultez la{" "}
                <Link href="/politique-confidentialite" className="text-rose-600 hover:underline">
                  politique de confidentialité
                </Link>
                .
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
