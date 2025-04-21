import Head from 'next/head'
import { useState } from 'react'
import TemplateCard from '../components/TemplateCard'

export default function Home() {
  const templates = [
    {
      id: 'simple',
      name: 'Simple CV',
      description: 'A clean, minimalist CV template',
      image: '/images/templates/simple.png'
    },
    {
      id: 'professional',
      name: 'Professional CV',
      description: 'A business-style CV for corporate roles',
      image: '/images/templates/professional.png'
    },
    {
      id: 'modern',
      name: 'Modern CV',
      description: 'A creative CV for designers and artists',
      image: '/images/templates/modern.png'
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
          Chọn mẫu CV bạn muốn sử dụng
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </main>
    </div>
  )
}
