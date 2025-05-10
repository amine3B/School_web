import Image from "next/image"
import { Shield, Sun, Puzzle, Heart } from "lucide-react"

export default function Infrastructure() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-[#1EAAA5]" />,
      title: "Espaces Sécurisés",
      description: "Tous nos espaces sont conçus avec la sécurité des enfants comme priorité absolue.",
    },
    {
      icon: <Sun className="h-10 w-10 text-[#1EAAA5]" />,
      title: "Espaces Lumineux",
      description: "Des salles de classe lumineuses et aérées pour favoriser la concentration et le bien-être.",
    },
    {
      icon: <Puzzle className="h-10 w-10 text-[#1EAAA5]" />,
      title: "Équipements Ludiques",
      description: "Des équipements pédagogiques et ludiques adaptés à chaque âge pour apprendre en s'amusant.",
    },
    {
      icon: <Heart className="h-10 w-10 text-[#1EAAA5]" />,
      title: "Ambiance Chaleureuse",
      description: "Une décoration colorée et chaleureuse pour que les enfants se sentent comme à la maison.",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A3B5B] mb-4">Notre Infrastructure</h2>
        <div className="w-24 h-1 bg-[#1EAAA5] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Notre école dispose d'une infrastructure moderne et adaptée aux besoins des jeunes enfants, offrant un
          environnement sécurisé, stimulant et confortable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#1EAAA5]/30 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3B5B] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 order-1 lg:order-2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=400&width=400" alt="Salle de classe" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=400&width=400" alt="Espace de jeux" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=400&width=400" alt="Cantine" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Cour de récréation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-[#1EAAA5]/10 rounded-full"></div>
          <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-[#0A3B5B]/10 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
