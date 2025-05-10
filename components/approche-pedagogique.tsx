import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ApprochePedagogique() {
  const intelligences = [
    "Intelligence linguistique",
    "Intelligence logico-mathématique",
    "Intelligence spatiale",
    "Intelligence musicale",
    "Intelligence corporelle-kinesthésique",
    "Intelligence interpersonnelle",
    "Intelligence intrapersonnelle",
    "Intelligence naturaliste",
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A3B5B] mb-4">Notre Approche Pédagogique</h2>
        <div className="w-24 h-1 bg-[#1EAAA5] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nous croyons en une éducation qui respecte le rythme et les talents de chaque enfant, tout en favorisant
          l'excellence académique et le développement personnel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-[#0A3B5B] mb-4">Les intelligences multiples</h3>
            <p className="text-gray-600">
              Notre approche pédagogique s'inspire de la théorie des intelligences multiples d'Howard Gardner. Nous
              reconnaissons que chaque enfant possède un profil d'intelligences unique et nous adaptons notre
              enseignement pour valoriser et développer ces différentes formes d'intelligence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {intelligences.map((intelligence, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#1EAAA5] flex-shrink-0" />
                  <span className="text-gray-700">{intelligence}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-[#0A3B5B] mb-4">Plurilinguisme</h3>
            <p className="text-gray-600">
              Nous offrons un environnement plurilingue où les enfants sont exposés à différentes langues dès leur plus
              jeune âge, favorisant ainsi l'ouverture au monde et le développement de compétences linguistiques solides.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-square">
              <Image
                src="image/Intelligence.jpg?height=800&width=800"
                alt="Approche pédagogique"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#1EAAA5]/10 rounded-full"></div>
          <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-[#0A3B5B]/10 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
