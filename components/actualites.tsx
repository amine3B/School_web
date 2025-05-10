import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, ArrowRight } from "lucide-react"

export default function Actualites() {
  const actualites = [
    {
      title: "Journée portes ouvertes",
      date: "15 juin 2024",
      description:
        "Venez découvrir notre école et rencontrer l'équipe pédagogique lors de notre journée portes ouvertes.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Spectacle de fin d'année",
      date: "28 juin 2024",
      description: "Les élèves présenteront leur spectacle de fin d'année sur le thème des contes du monde.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Atelier parents-enfants",
      date: "10 juillet 2024",
      description: "Participez à notre atelier créatif parents-enfants autour des arts plastiques.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3B5B] mb-4">Actualités et Événements</h2>
          <div className="w-24 h-1 bg-[#1EAAA5] mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Restez informés des dernières actualités et des événements à venir de notre école.
          </p>
        </div>
        <Button variant="outline" className="rounded-full border-[#1EAAA5] text-[#1EAAA5] hover:bg-[#1EAAA5]/10 px-6">
          Toutes les actualités <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {actualites.map((actualite, index) => (
          <Card
            key={index}
            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image src={actualite.image || "/placeholder.svg"} alt={actualite.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-[#0A3B5B] flex items-center">
                <CalendarDays className="h-4 w-4 mr-2 text-[#1EAAA5]" />
                {actualite.date}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#0A3B5B] mb-3">{actualite.title}</h3>
              <p className="text-gray-600 mb-4">{actualite.description}</p>
              <Link href="#" className="inline-flex items-center text-[#1EAAA5] font-medium hover:underline">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
