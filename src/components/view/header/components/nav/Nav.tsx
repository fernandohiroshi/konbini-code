import { useTranslations } from 'next-intl'
import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { ThemeToggle } from '@/components/themes/ThemeToggle'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/shadcn/navigation-menu'
import { LanguageToggle } from '@/components/view/languages/LanguageToggle'

export function Nav() {
  const t = useTranslations('Nav')
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="#about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('about')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#services" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('services')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#templates" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('templates')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#questions" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('questions')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('contact')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <LanguageToggle />
        <ThemeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
