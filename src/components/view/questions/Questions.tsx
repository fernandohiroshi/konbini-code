import { useTranslations } from 'next-intl'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/shadcn/accordion'

export function Questions() {
  const t = useTranslations('Questions')
  return (
    <section className="mb-20 scroll-mt-24 md:mb-40" id="questions">
      <h2 className="mb-4 animate-pulse text-xl md:text-4xl">
        {t('section-title')}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{t('1.question')}</AccordionTrigger>
          <AccordionContent>{t('1.response')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t('2.question')}</AccordionTrigger>
          <AccordionContent>{t('2.response')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t('3.question')}</AccordionTrigger>
          <AccordionContent>{t('3.response')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t('4.question')}</AccordionTrigger>
          <AccordionContent>{t('4.response')}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
