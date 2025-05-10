import { Card, CardContent } from "@/components/ui/card"

export default function InfoPratiques() {
  const infos = [
    {
      title: "Inscriptions",
      description: "Procédure d'inscription simple et accompagnée pour les nouvelles familles.",
      icon: (
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
          className="h-10 w-10"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Transport Scolaire",
      description: "Service de transport sécurisé et adapté aux besoins des familles.",
      icon: (
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
          className="h-10 w-10"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
          <path d="M12 3v6" />
        </svg>
      ),
    },
    {
      title: "Garde",
      description: "Accueil des enfants avant et après la classe dans un cadre sûr, calme et bienveillant.",
      icon: (
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
  className="h-10 w-10"
>
  <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
  <path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10" />
  <path d="M18 5v17" />
  <path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6" />
  <path d="M6 5v17" />
  <circle cx="12" cy="9" r="2" />
</svg>

      ),
    },
    {
      title: "Suivi Pédagogique",
      description: "Accompagnement personnalisé et communication régulière avec les parents.",
      icon: (
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
          className="h-10 w-10"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A3B5B] mb-4">Informations Pratiques</h2>
        <div className="w-24 h-1 bg-[#1EAAA5] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Tout ce que vous devez savoir pour faciliter la vie scolaire de votre enfant et votre organisation familiale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {infos.map((info, index) => (
          <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-[#1EAAA5] mb-6">{info.icon}</div>
                <h3 className="text-xl font-semibold text-[#0A3B5B] mb-3">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
