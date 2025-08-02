'use client'

import { useTranslations } from 'next-intl'
import React, { useState, FormEvent } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/shadcn/button'

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const t = useTranslations('ContactForm')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Mensagem enviada! (simulado)')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="flex w-full flex-col justify-between rounded-xl border bg-zinc-100 p-4 dark:bg-transparent md:p-8">
      <div className="mb-4">
        <h2 className="mb-1 animate-pulse text-2xl font-semibold text-purple-500">
          {t('section-title')}
        </h2>
        <p className="hidden text-sm opacity-80 md:block">{t('description')}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">
        <input
          className="rounded-lg px-4 py-2 outline-none dark:bg-zinc-950"
          type="text"
          placeholder={t('yourName')}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <input
          className="rounded-lg px-4 py-2 outline-none dark:bg-zinc-950"
          type="text"
          placeholder={t('email')}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <textarea
          placeholder={t('message')}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
          className="h-[10rem] resize-none rounded-lg px-4 py-2 outline-none dark:bg-zinc-950"
        />
        <div className="flex justify-end">
          <Button variant="outline" type="submit">
            {t('submit')}
          </Button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
