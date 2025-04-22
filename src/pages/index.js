import Head from 'next/head'
import { useState } from 'react'
import TemplateCard from '../components/TemplateCard'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage();
  
  const templates = [
    {
      id: 'simple',
      nameKey: 'simpleCV',
      descriptionKey: 'simpleDesc',
      image: '/images/templates/simple.png'
    },
    {
      id: 'professional',
      nameKey: 'professionalCV',
      descriptionKey: 'professionalDesc',
      image: '/images/templates/professional.png'
    },
    {
      id: 'modern',
      nameKey: 'modernCV',
      descriptionKey: 'modernDesc',
      image: '/images/templates/modern.png'
    },
    {
      id: 'webdev',
      nameKey: 'webDevCV',
      descriptionKey: 'webDevDesc',
      image: '/images/templates/webdev.png'
    },
    {
      id: 'cloud',
      nameKey: 'cloudCV',
      descriptionKey: 'cloudDesc',
      image: '/images/templates/cloud.png'
    },
    {
      id: 'analyst',
      nameKey: 'analystCV',
      descriptionKey: 'analystDesc',
      image: '/images/templates/analyst.png'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>CV Template Editor</title>
        <meta name="description" content="Edit and export CV templates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-center mb-10">
          {t('chooseTemplate')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard 
              key={template.id} 
              template={{
                ...template,
                name: t(template.nameKey),
                description: t(template.descriptionKey)
              }} 
            />
          ))}
        </div>
      </main>
    </div>
  )
}
