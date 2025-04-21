import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../context/LanguageContext'

export default function TemplateCard({ template }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 relative">
        <Image
          src={template.image || '/images/template-placeholder.jpg'}
          alt={template.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
        <p className="text-gray-600 mb-4">{template.description}</p>
        <Link 
          href={`/editor/${template.id}`}
          className="block bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          {t('useThisTemplate')}
        </Link>
      </div>
    </div>
  )
}
