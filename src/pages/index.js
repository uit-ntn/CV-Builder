import Head from 'next/head'
import { useState, useEffect } from 'react'
import TemplateCard from '../components/TemplateCard'
import { useLanguage } from '../context/LanguageContext'
import Image from 'next/image'

export default function Home() {
  const { t } = useLanguage();
  const [animateIn, setAnimateIn] = useState(false);
  
  // Animation on page load
  useEffect(() => {
    setAnimateIn(true);
  }, []);
  
  const templates = [
    {
      id: 'simple',
      nameKey: 'simpleCV',
      descriptionKey: 'simpleDesc',
      image: '/images/templates/simple-template.jpg'
    },
    {
      id: 'professional',
      nameKey: 'professionalCV',
      descriptionKey: 'professionalDesc',
      image: '/images/templates/professional-template.jpg'
    },
    {
      id: 'modern',
      nameKey: 'modernCV',
      descriptionKey: 'modernDesc',
      image: '/images/templates/modern-template.jpg'
    },
    {
      id: 'webdev',
      nameKey: 'webDevCV',
      descriptionKey: 'webDevDesc',
      image: '/images/templates/webdev-template.jpg'
    },
    {
      id: 'cloud',
      nameKey: 'cloudCV',
      descriptionKey: 'cloudDesc',
      image: '/images/templates/cloud-template.jpg'
    },
    {
      id: 'analyst',
      nameKey: 'analystCV',
      descriptionKey: 'analystDesc',
      image: '/images/templates/analyst-template.jpg'
    }
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 transition-opacity duration-1000 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
      <Head>
        <title>N CV Builder | Create Professional CV Templates</title>
        <meta name="description" content="Create professional CV templates quickly and easily with N CV Builder by Nguyễn Thanh Nhân" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`md:w-1/2 transition-all duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-6 flex items-center">
                <div className="w-16 h-16 bg-white text-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-4xl font-bold">N</span>
                </div>
                <h1 className="text-4xl font-bold">CV Builder</h1>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t('heroTitle') || 'Create Professional CVs in Minutes'}
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">
                {t('heroSubtitle') || 'Choose from our professionally designed templates, customize to fit your needs, and export in seconds.'}
              </p>
              <button 
                onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
              >
                {t('getStarted') || 'Get Started'}
              </button>
            </div>
            <div className={`md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 delay-300 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative w-full h-80 md:h-96">
                <div className="absolute z-10 top-0 right-4 w-3/4 h-auto shadow-xl rounded-lg transform rotate-3 border-4 border-white">
                  <Image
                    src="/images/cv-example-1.jpg"
                    alt="CV Example"
                    width={400}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute z-0 bottom-0 left-4 w-3/4 h-auto shadow-xl rounded-lg transform -rotate-3 border-4 border-white">
                  <Image
                    src="/images/cv-example-2.jpg"
                    alt="CV Example"
                    width={400}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-blue-100/30"></div>
      </div>

      {/* Features section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">{t('ourFeatures') || 'Why Choose N CV Builder?'}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{t('feature1Title') || 'Professionally Designed'}</h3>
              <p className="text-gray-600 text-center">{t('feature1Desc') || 'Templates designed by professionals to help you stand out'}</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{t('feature2Title') || 'Easy to Customize'}</h3>
              <p className="text-gray-600 text-center">{t('feature2Desc') || 'Simple editor to perfect your CV in minutes'}</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{t('feature3Title') || 'Instant Export'}</h3>
              <p className="text-gray-600 text-center">{t('feature3Desc') || 'Download as PDF or Word with a single click'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Template section */}
      <div id="templates" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">{t('chooseTemplate')}</h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto">{t('templateSubtitle') || 'Select from our professionally designed templates tailored for different industries and roles'}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div 
                key={template.id}
                className={`transition-all duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <TemplateCard 
                  template={{
                    ...template,
                    name: t(template.nameKey),
                    description: t(template.descriptionKey)
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mx-auto shadow-lg">
                <Image
                  src="/images/portrait.jpg" 
                  alt="Nguyễn Thanh Nhân"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">{t('aboutTitle') || 'About the Creator'}</h2>
              <p className="text-xl mb-6">
                {t('aboutDesc') || 'Hi, I\'m Nguyễn Thanh Nhân, the founder of N CV Builder. With years of experience in professional resume creation, I designed this tool to help you create impressive CVs that stand out to employers.'}
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/nhannguyen95" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/nhannguyen95" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="mailto:contact@ncvbuilder.com" className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">{t('testimonials') || 'What Our Users Say'}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">TH</div>
                <div>
                  <h3 className="font-bold">Trần Hải</h3>
                  <p className="text-gray-600 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="italic text-gray-700">"N CV Builder helped me create a professional CV in minutes. I landed my dream job with it!"</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">LM</div>
                <div>
                  <h3 className="font-bold">Lê Mai</h3>
                  <p className="text-gray-600 text-sm">Marketing Manager</p>
                </div>
              </div>
              <p className="italic text-gray-700">"The templates are beautiful and so easy to customize. Exporting to PDF was a breeze!"</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">PT</div>
                <div>
                  <h3 className="font-bold">Phạm Tuấn</h3>
                  <p className="text-gray-600 text-sm">Data Analyst</p>
                </div>
              </div>
              <p className="italic text-gray-700">"The specialized templates helped me highlight my data skills. Highly recommended!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('readyToStart') || 'Ready to Create Your Professional CV?'}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('ctaDescription') || 'Choose from our templates and create a standout CV in minutes'}</p>
          <button 
            onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            {t('getStartedNow') || 'Get Started Now'}
          </button>
        </div>
      </div>
    </div>
  )
}
