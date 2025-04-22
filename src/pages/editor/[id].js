import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CVEditor from '../../components/CVEditor';
import CVPreview from '../../components/CVPreview';
import exportToPDF from '../../utils/exportToPDF';
import exportToWord from '../../utils/exportToWord';
import { useLanguage } from '../../context/LanguageContext';
import { getErrorMessage } from '../../utils/errorHandler';
import ThankYouModal from '../../components/ThankYouModal';

export default function EditorPage() {
  const router = useRouter();
  const { id: templateId } = router.query;
  const [activeSection, setActiveSection] = useState('personal');
  const { t, language } = useLanguage();
  const [error, setError] = useState(null);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [exportedFileType, setExportedFileType] = useState('');

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
    // Projects section for WebDev
    projects: [
      {
        id: 'proj1',
        title: t('projectTitle') || 'Project Title',
        description: t('projectDescription') || 'Project Description',
        technologies: t('projectTechnologies') || 'HTML, CSS, JavaScript',
        link: 'https://github.com/yourusername/project',
        image: '', // Base64 encoded image or URL
        codeSnippet: '// Example code\nfunction hello() {\n  console.log("Hello world!");\n}' // New field for WebDev
      }
    ],
    // Technical expertise section for Cloud
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
    ],
    // New specialized sections for WebDev
    frontendSkills: 'React, Vue.js, Angular, HTML5, CSS3, JavaScript, TypeScript, SASS/LESS, Responsive Design',
    backendSkills: 'Node.js, Express, Django, Flask, ASP.NET, PHP, REST APIs, GraphQL',
    devOpsSkills: 'CI/CD, Jenkins, GitHub Actions, Docker, Kubernetes',
    
    // New specialized sections for Cloud Engineer
    infrastructureSkills: 'IaC, Terraform, CloudFormation, Networking, Load Balancing, Auto Scaling',
    securitySkills: 'IAM, Security Groups, VPC, Encryption, Compliance, Auditing',
    cloudPlatforms: 'AWS, Azure, GCP, Alibaba Cloud',
    devOpsTools: 'Docker, Kubernetes, Jenkins, GitHub Actions, GitLab CI, ArgoCD',
    
    // New specialized sections for Business Analyst
    methodologies: [
      {
        id: 'method1',
        name: 'Agile/Scrum',
        description: 'Experience facilitating agile ceremonies and user story workshops'
      },
      {
        id: 'method2',
        name: 'Business Process Modeling',
        description: 'BPMN 2.0, process optimization, workflow analysis'
      }
    ],
    achievements: [
      {
        id: 'achv1',
        title: 'ERP Implementation',
        description: 'Successfully gathered and documented requirements for company-wide ERP system'
      },
      {
        id: 'achv2',
        title: 'Process Optimization',
        description: 'Reduced reporting cycle time by 40% through automation and process redesign'
      }
    ],
    toolsUsed: ['SQL', 'Excel', 'PowerBI', 'Tableau', 'JIRA', 'Confluence', 'Visio'],
    domains: [
      { area: 'Finance', description: 'Financial reporting, budgeting, forecasting' },
      { area: 'Healthcare', description: 'Patient data management, regulatory compliance' }
    ],
    // Marketing sections
    campaigns: [
      {
        id: 'camp1',
        title: t('campaignTitle') || 'Campaign Title',
        client: t('campaignClient') || 'Client Name',
        date: 'Q1 2023',
        description: t('campaignDescription') || 'Campaign Description',
        result: '25% increase in engagement'
      }
    ],
    socialPlatforms: 'Instagram, Facebook, LinkedIn, Twitter, TikTok',
    marketingTools: 'Google Analytics, Mailchimp, Hootsuite, SEMrush, Canva, HubSpot'
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

  const handleExportSuccess = (fileType) => {
    setExportedFileType(fileType);
    setShowThankYouModal(true);
  };

  const handleSavePDF = async () => {
    try {
      const result = await exportToPDF(cvData, templateId, handleExportSuccess);
      if (!result.success && result.error) {
        const errorMsg = getErrorMessage(result.error.code || 'DEFAULT', language);
        setError(errorMsg);
      }
    } catch (err) {
      console.error('PDF export error:', err);
      setError(t('generalError'));
    }
  };

  const handleSaveWord = async () => {
    try {
      const result = await exportToWord(cvData, templateId, handleExportSuccess);
      if (!result.success && result.error) {
        const errorMsg = getErrorMessage(result.error.code || 'DEFAULT', language);
        setError(errorMsg);
      }
    } catch (err) {
      console.error('Word export error:', err);
      setError(t('generalError'));
    }
  };

  // Update CV data when user edits form
  const handleDataChange = (section, data) => {
    setCvData(prev => {
      localStorage.setItem('cv-data-customized', 'true');
      return {
        ...prev,
        [section]: data
      };
    });
  };

  // Clear error when template or language changes
  useEffect(() => {
    setError(null);
  }, [templateId, language]);

  // Determine which sections to show based on the template
  const getActiveSections = () => {
    const commonSections = ['personal', 'experience', 'education', 'skills'];
    
    switch (templateId) {
      case 'webdev':
        return [...commonSections, 'projects', 'frontendBackend'];
      case 'cloud':
        return [...commonSections, 'technicalExpertise', 'certifications', 'cloudInfrastructure'];
      case 'analyst':
        return [...commonSections, 'methodologies', 'achievements', 'businessTools'];
      case 'dataeng':
        return [...commonSections, 'dataProjects', 'dataTechnologies', 'certifications'];
      case 'devops':
        return [...commonSections, 'devOpsProjects', 'devOpsTechnologies', 'certifications'];
      case 'marketing':
        return [...commonSections, 'campaigns', 'marketingDetails', 'certifications'];
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

      {/* Error message display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold mr-2">Error:</strong>
          <span className="block sm:inline">{error}</span>
          <button
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setError(null)}
          >
            <span className="text-xl">&times;</span>
          </button>
        </div>
      )}

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
      
      {/* Thank you modal */}
      <ThankYouModal 
        isOpen={showThankYouModal} 
        onClose={() => setShowThankYouModal(false)}
        fileType={exportedFileType}
      />
    </div>
  );
}
