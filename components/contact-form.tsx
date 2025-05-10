"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pourriez ajouter la logique pour envoyer le formulaire
    console.log("Form submitted:", formData)
    alert("Merci pour votre message ! Nous vous contacterons bientôt.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-[#0A3B5B] mb-6">Envoyez-nous un message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom</Label>
          <Input
            id="name"
            name="name"
            placeholder="Votre nom"
            required
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg border-gray-300 focus:border-[#1EAAA5] focus:ring-[#1EAAA5]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg border-gray-300 focus:border-[#1EAAA5] focus:ring-[#1EAAA5]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Votre numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-lg border-gray-300 focus:border-[#1EAAA5] focus:ring-[#1EAAA5]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Sujet</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Sujet de votre message"
            required
            value={formData.subject}
            onChange={handleChange}
            className="rounded-lg border-gray-300 focus:border-[#1EAAA5] focus:ring-[#1EAAA5]"
          />
        </div>
      </div>
      <div className="space-y-2 mb-6">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Votre message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="rounded-lg border-gray-300 focus:border-[#1EAAA5] focus:ring-[#1EAAA5] min-h-[120px]"
        />
      </div>
      <Button type="submit" className="w-full rounded-lg bg-[#1EAAA5] hover:bg-[#1EAAA5]/90 text-white">
        Envoyer le message
      </Button>
    </form>
  )
}
