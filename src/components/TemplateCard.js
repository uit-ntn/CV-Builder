import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function TemplateCard({ template }) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Function to generate gradient colors based on template ID
  const getGradientColors = (id) => {
    const colorMap = {
      'simple': ['from-gray-200', 'to-gray-400', 'text-gray-800'],
      'professional': ['from-blue-200', 'to-blue-400', 'text-blue-800'],
      'modern': ['from-indigo-200', 'to-indigo-400', 'text-indigo-800'],
      'webdev': ['from-green-200', 'to-green-400', 'text-green-800'],
      'cloud': ['from-sky-200', 'to-sky-400', 'text-sky-800'],
      'analyst': ['from-violet-200', 'to-violet-400', 'text-violet-800'],
      'dataeng': ['from-purple-200', 'to-purple-400', 'text-purple-800'],
      'devops': ['from-teal-200', 'to-teal-400', 'text-teal-800'],
      'marketing': ['from-rose-200', 'to-rose-400', 'text-rose-800'],
      'default': ['from-gray-200', 'to-gray-400', 'text-gray-800']
    };
    
    return colorMap[id] || colorMap.default;
  };
  
  const [fromColor, toColor, textColor] = getGradientColors(template.id);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-64 relative overflow-hidden">
        {!imageError ? (
          <div className="w-full h-full">
            <img
              src={template.image}
              alt={template.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              style={{ objectFit: 'cover' }}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          // Placeholder for missing images
          <div className={`w-full h-full bg-gradient-to-br ${fromColor} ${toColor} flex flex-col items-center justify-center transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <div className={`text-2xl font-bold ${textColor} mb-2`}>{template.name}</div>
            <div className={`text-sm ${textColor} px-6 text-center`}>Template Preview</div>
          </div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'}`}></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold drop-shadow-md">{template.name}</h3>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <p className="text-gray-600 mb-5 flex-grow">{template.description}</p>
        <Link 
          href={`/editor/${template.id}`}
          className={`block bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow transform ${isHovered ? 'translate-y-0' : 'translate-y-0.5'} duration-300 font-medium mt-auto`}
        >
          {t('useThisTemplate')}
        </Link>
      </div>
    </div>
  )
}
