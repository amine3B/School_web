import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[#0A3B5B]/5 z-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center rounded-full bg-[#1EAAA5]/10 px-3 py-1 text-sm font-medium text-[#1EAAA5]">
              Bienvenue à Chrono School
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A3B5B]">
              Éveiller les <span className="text-[#1EAAA5]">talents</span> de chaque enfant
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Notre école offre un cadre éducatif bienveillant où chaque enfant peut s'épanouir grâce à une approche
              pédagogique innovante basée sur les intelligences multiples.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-[#1EAAA5] hover:bg-[#1EAAA5]/90 text-white">
                <Link href="#approche">Découvrir notre approche</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#0A3B5B] text-[#0A3B5B] hover:bg-[#0A3B5B]/10"
              >
                <Link href="https://wa.me/212646266692?text=Je%20souhaite%20prendre%20rendez-vous%20pour%20une%20inscription%20%C3%A0%20votre%20%C3%A9cole.">Prendre rendez-vous</Link>
              </Button>
            </div>
          </div>
          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3]">
                <Image
                  src="image/Etablicement.webp"
                  alt="Enfants à l'école"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3B5B]/30 to-transparent mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1EAAA5]/20 rounded-full blur-xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#0A3B5B]/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#F9FAFB"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
