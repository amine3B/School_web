import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, BookOpen, Palette, Trophy } from "lucide-react"

export default function ActivitesEveil() {
  const activites = [
    {
      title: "Activités Informatiques",
      description: "Initiation ludique à l'informatique et au codage à travers des jeux, des projets créatifs et des outils numériques adaptés aux enfants.",
      icon: <Code className="h-12 w-12 text-[#1EAAA5]" />,
      image: "image/info.jpg?height=400&width=600",
    },
    {
      title: "Activités Artistiques",
      description: "Expression créative à travers la peinture, le dessin, la sculpture et d'autres formes d'art.",
      icon: <Palette className="h-12 w-12 text-[#1EAAA5]" />,
      image: "image/art.webp?height=318&width=480",
    },
    {
      title: "Activités Coraniques",
      description: "Apprentissage progressif du Coran, de la récitation à la mémorisation, dans un cadre respectueux et adapté à l'âge des enfants.",
      icon: <BookOpen className="h-12 w-12 text-[#1EAAA5]" />,
      image: "image/Quran.jpg?height=400&width=600",
    },
    {
      title: "Activités Sportives",
      description: "Jeux collectifs, motricité et sports adaptés pour favoriser le développement physique.",
      icon: <Trophy className="h-12 w-12 text-[#1EAAA5]" />,
      image: "image/Football.jpg?height=1470&width=2310",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A3B5B] mb-4">Activités d'Éveil</h2>
        <div className="w-24 h-1 bg-[#1EAAA5] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nous proposons une variété d'activités d'éveil adaptées à chaque tranche d'âge pour stimuler la curiosité et
          favoriser l'apprentissage par l'expérience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activites.map((activite, index) => (
          <Card
            key={index}
            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="relative h-full min-h-[200px] overflow-hidden">
                <Image 
                  src={activite.image || "/placeholder.svg"} 
                  alt={activite.title} 
                  fill 
                  className="object-cover object-center" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="mb-4">{activite.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3B5B] mb-3">{activite.title}</h3>
                <p className="text-gray-600">{activite.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}