import { Link } from '@/i18n/routing'
import { Languages } from 'lucide-react'
import { useTranslations } from 'next-intl'
import * as React from 'react'

import { Button } from '@/components/ui/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/shadcn/dropdown-menu'

export function LanguageToggle() {
  const t = useTranslations('Languages')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/" locale="en">
          <DropdownMenuItem>{t('en')}</DropdownMenuItem>
        </Link>

        <Link href="/" locale="ja">
          <DropdownMenuItem>{t('ja')}</DropdownMenuItem>
        </Link>

        <Link href="/" locale="pt">
          <DropdownMenuItem>{t('pt')}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
