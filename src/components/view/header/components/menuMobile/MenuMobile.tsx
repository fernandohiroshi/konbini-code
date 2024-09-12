import { IconHome } from '@tabler/icons-react'
import { HelpCircle, Mail, Images, Globe } from 'lucide-react' // Ícones de Lucide
import React from 'react'

import { FloatingDockMobile } from '@/components/ui/aceternity/floating-dock'

export function MenuMobile() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Services',
      icon: (
        <Globe className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#services', // ID ou URL da seção de serviços
    },
    {
      title: 'Templates',
      icon: (
        <Images className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#templates', // ID ou URL da seção de templates
    },
    {
      title: 'Questions',
      icon: (
        <HelpCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#questions', // ID ou URL da seção de perguntas
    },
    {
      title: 'Contact',
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#contact', // ID ou URL da seção de contato
    },
  ]
  return <FloatingDockMobile items={links} />
}
