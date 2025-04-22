import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function TemplateCard({ template }) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-56 relative overflow-hidden">
        <Image
          src={template.image || '/images/template-placeholder.jpg'}
          alt={template.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'}`}></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold drop-shadow-md">{template.name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-5">{template.description}</p>
        <Link 
          href={`/editor/${template.id}`}
          className={`block bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow transform ${isHovered ? 'translate-y-0' : 'translate-y-0.5'} duration-300 font-medium`}
        >
          {t('useThisTemplate')}
        </Link>
      </div>
    </div>
  )
}
