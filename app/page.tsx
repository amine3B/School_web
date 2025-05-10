import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ApprochePedagogique from "@/components/approche-pedagogique"
import ActivitesEveil from "@/components/activites-eveil"
import Infrastructure from "@/components/infrastructure"
import Actualites from "@/components/actualites"
import InfoPratiques from "@/components/info-pratiques"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB]">
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative h-10 w-10 transform transition-transform duration-300 group-hover:scale-110">
                  
                <img src="/image/chrono_School.png" alt="Logo Chrono School" className="h-full w-full object-contain" />

                </div>
                <span className="text-xl font-bold text-[#0A3B5B] transition-colors duration-300 group-hover:text-[#1EAAA5]">
                  Chrono School
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#approche"
                className="text-sm font-medium text-gray-700 hover:text-[#1EAAA5] transition-all duration-300 relative group py-1 px-2"
              >
                Notre Approche
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1EAAA5] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 -z-10 scale-75 opacity-0 bg-[#1EAAA5]/5 rounded-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              </Link>
              <Link
                href="#infos"
                className="text-sm font-medium text-gray-700 hover:text-[#1EAAA5] transition-all duration-300 relative group py-1 px-2"
              >
                Infos Pratiques
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1EAAA5] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 -z-10 scale-75 opacity-0 bg-[#1EAAA5]/5 rounded-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              </Link>
              <Link
                href="#activites"
                className="text-sm font-medium text-gray-700 hover:text-[#1EAAA5] transition-all duration-300 relative group py-1 px-2"
              >
                Activités
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1EAAA5] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 -z-10 scale-75 opacity-0 bg-[#1EAAA5]/5 rounded-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              </Link>
              {/* <Link
                href="#infrastructure"
                className="text-sm font-medium text-gray-700 hover:text-[#1EAAA5] transition-all duration-300 relative group py-1 px-2"
              >
                Infrastructure
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1EAAA5] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 -z-10 scale-75 opacity-0 bg-[#1EAAA5]/5 rounded-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              </Link> */}
              <Link
                href="#actualites"
                className="text-sm font-medium text-gray-700 hover:text-[#1EAAA5] transition-all duration-300 relative group py-1 px-2"
              >
                Actualités
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1EAAA5] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 -z-10 scale-75 opacity-0 bg-[#1EAAA5]/5 rounded-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-[#1EAAA5] transition-all duration-300 relative group py-1 px-2"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1EAAA5] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 -z-10 scale-75 opacity-0 bg-[#1EAAA5]/5 rounded-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/212646266692?text=Je%20souhaite%20prendre%20rendez-vous%20pour%20une%20inscription%20%C3%A0%20votre%20%C3%A9cole.">
              <Button className="hidden md:flex rounded-full bg-[#1EAAA5] hover:bg-[#0A3B5B] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                Inscription
              </Button>
              </a>
              <MobileNav />
            </div>
            
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section id="approche" className="py-16 md:py-24">
          <ApprochePedagogique />
        </section>

        <section id="infos" className="py-16 md:py-24 bg-white">
          <InfoPratiques />
        </section>

        <section id="activites" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1EAAA5]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A3B5B]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <ActivitesEveil />
        </section>

        {/* <section id="infrastructure" className="py-16 md:py-24 bg-white">
          <Infrastructure />
        </section> */}

        <section id="actualites" className="py-16 md:py-24 bg-white">
          <Actualites />
        </section>
      </main>
      <footer id="contact" className="bg-[#0A3B5B] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-10 w-10">
                  <img
                    src="/image/chrono_school_white.png"
                    alt="Logo Chrono School"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white">Chrono School</span>
              </Link>
              <p className="text-white/80">
                Une école à taille humaine, tournée vers l'excellence pédagogique dès le plus jeune âge.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/p/Chrono-School-61558715837254/" 
                className="text-white/70 hover:text-[#1EAAA5] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/chrono.school/" 
                className="text-white/70 hover:text-[#1EAAA5] transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://wa.me/33123456789"
                  className="text-white/70 hover:text-[#1EAAA5] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M16.7 13.4c-.3-.1-1.7-.8-2-1s-.5-.1-.7.1c-.2.2-.8 1-1 1.2s-.4.2-.7.1c-.9-.3-1.6-.9-2.2-1.5s-1.2-1.4-1.5-2.2c-.1-.3 0-.5.1-.7.1-.1.9-1.1 1.1-1.3.1-.2.1-.4 0-.6s-.9-2.2-1.2-2.9c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.6 1.2 3.2 1.4 3.5.2.3 2.3 3.5 5.6 4.7.8.3 1.4.5 1.9.6.8.3 1.5.3 2 .2.6-.1 1.7-.7 2-1.3.2-.6.2-1.1.1-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
                  </svg>

                  <span className="sr-only">WhatsApp</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contactez-nous</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-[#1EAAA5] p-2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-white"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-white/80">+212 5 22 33 13 19</span>
                  <span className="text-white/80">+212 6 46 26 66 92</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-[#1EAAA5] p-2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-white"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-white/80">Schoolchrono@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-[#1EAAA5] p-2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-white"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-white/80">Lot Albadr N 118, Casablanca</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">Notre localisation</h3>
              <div className="h-64 w-full rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1763.7005737015288!2d-7.470575693743227!3d33.57334443839584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb00417dbafb%3A0xc7959c74038269bc!2schrono%20school!5e1!3m2!1sfr!2sma!4v1746111130899!5m2!1sfr!2sma" width="400" height="300"  loading="lazy" ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Chrono School. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}
