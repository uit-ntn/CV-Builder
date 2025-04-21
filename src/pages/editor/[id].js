import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import CVEditor from '../../components/CVEditor'
import CVPreview from '../../components/CVPreview'
import exportToPDF from '../../utils/exportToPDF'
import exportToWord from '../../utils/exportToWord'
import { useLanguage } from '../../context/LanguageContext'

export default function EditorPage() {
  const router = useRouter()
  const { id: templateId } = router.query
  const [activeSection, setActiveSection] = useState('personal')
  const { t, language } = useLanguage();
  
  // Define default CV data with specialized sections
  const getDefaultCV = () => ({
    personal: {
      name: t('name'),
      title: t('jobTitle'),
      email: 'email@example.com',
      phone: '0123456789',
      address: t('address'),
      about: t('about'),
      avatar: '', // Initialize empty avatar field
      github: 'github.com/username',
      portfolio: 'yourportfolio.com',
      linkedin: 'linkedin.com/in/username'
    },
    experience: [
      {
        id: 'exp1',
        title: t('position'),
        company: t('company'),
        location: t('location'),
        from: '01/2020',
        to: t('present'),
        description: t('description')
      }
    ],
    education: [
      {
        id: 'edu1',
        degree: t('degree'),
        school: t('school'),
        location: t('location'),
        from: '01/2015',
        to: '12/2019',
        description: t('eduDescription')
      }
    ],
    skills: [
      { id: 'skill1', name: `${t('skillName')} 1`, description: t('skillDescription') },
      { id: 'skill2', name: `${t('skillName')} 2`, description: t('skillDescription') },
      { id: 'skill3', name: `${t('skillName')} 3`, description: t('skillDescription') }
    ],
    certifications: [
      { id: 'cert1', name: `${t('certName')} 1`, issuer: t('issuer'), date: '01/2022' },
      { id: 'cert2', name: `${t('certName')} 2`, issuer: t('issuer'), date: '06/2021' }
    ],
    // New specialized sections
    projects: [
      {
        id: 'proj1',
        title: t('projectTitle') || 'Project Title',
        description: t('projectDescription') || 'Project Description',
        technologies: t('projectTechnologies') || 'HTML, CSS, JavaScript',
        link: 'https://github.com/yourusername/project',
        image: '' // Base64 encoded image or URL
      }
    ],
    technicalExpertise: [
      {
        id: 'tech1',
        category: t('technicalCategory') || 'Cloud Platforms',
        skills: t('technicalSkills') || 'AWS, Azure, Google Cloud Platform'
      },
      {
        id: 'tech2',
        category: t('technicalCategory2') || 'Containerization',
        skills: t('technicalSkills2') || 'Docker, Kubernetes, Container Orchestration'
      }
    ]
  });

  const [cvData, setCvData] = useState(() => getDefaultCV());

  // Update CV data when language changes
  useEffect(() => {
    // Only update if we haven't customized the CV data yet
    const hasCustomized = localStorage.getItem('cv-data-customized') === 'true';
    if (!hasCustomized) {
      setCvData(getDefaultCV());
    }
  }, [language]);

  const handleSavePDF = () => {
    exportToPDF(cvData, templateId);
  }

  const handleSaveWord = () => {
    exportToWord(cvData, templateId);
  }

  // Update CV data when user edits form
  const handleDataChange = (section, data) => {
    setCvData(prev => {
      localStorage.setItem('cv-data-customized', 'true');
      return {
        ...prev,
        [section]: data
      };
    });
  }

  // Determine which sections to show based on the template
  const getActiveSections = () => {
    const commonSections = ['personal', 'experience', 'education', 'skills'];
    
    switch (templateId) {
      case 'webdev':
        return [...commonSections, 'projects'];
      case 'cloud':
        return [...commonSections, 'technicalExpertise', 'certifications'];
      default:
        return commonSections;
    }
  };
  
  const [availableSections, setAvailableSections] = useState(['personal', 'experience', 'education', 'skills']);
  
  // Update available sections when template changes
  useEffect(() => {
    if (templateId) {
      setAvailableSections(getActiveSections());
      // If current active section is not available in new template, reset to personal
      if (!getActiveSections().includes(activeSection)) {
        setActiveSection('personal');
      }
    }
  }, [templateId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{t('editCV')}</title>
        <meta name="description" content="Edit your CV" />
      </Head>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column - Editor */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-2xl font-bold mb-4">{t('editCV')}</h2>
            
            {/* Section tabs - dynamically generated based on template */}
            <div className="flex flex-wrap mb-6 border-b">
              {availableSections.map(section => (
                <button
                  key={section}
                  className={`px-4 py-2 ${activeSection === section ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                  onClick={() => setActiveSection(section)}
                >
                  {t(section)}
                </button>
              ))}
            </div>
            
            {/* Editor component */}
            <CVEditor 
              section={activeSection} 
              data={cvData[activeSection]} 
              onChange={(data) => handleDataChange(activeSection, data)}
              translations={t}
            />
          </div>
          
          {/* Export buttons */}
          <div className="flex gap-4 mt-4">
            <button 
              onClick={handleSavePDF}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex-1"
            >
              {t('exportPDF')}
            </button>
            <button 
              onClick={handleSaveWord}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex-1"
            >
              {t('exportWord')}
            </button>
          </div>
        </div>
        
        {/* Right column - Preview */}
        <div className="w-full md:w-2/3 bg-gray-100 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold mb-4">{t('preview')}</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CVPreview template={templateId} data={cvData} />
          </div>
        </div>
      </div>
    </div>
  )
}
