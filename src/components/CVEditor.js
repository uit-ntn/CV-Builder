import { useState, useRef } from 'react';
import ImageCropper from './ImageCropper';

export default function CVEditor({ section, data, onChange, translations: t }) {
  const [avatarFile, setAvatarFile] = useState(null);
  const fileInputRef = useRef(null);
  const projectImageRef = useRef(null);
  const [showCropper, setShowCropper] = useState(false);
  const [cropperImage, setCropperImage] = useState(null);

  // Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      setCropperImage(URL.createObjectURL(e.target.files[0]));
      setShowCropper(true);
    }
  };

  // Handle click on avatar
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  // Handle cropped image
  const handleCroppedImage = (croppedImageBase64) => {
    handlePersonalChange('avatar', croppedImageBase64);
    setShowCropper(false);
    setCropperImage(null);
  };

  // Handle cropper cancel
  const handleCropperCancel = () => {
    setShowCropper(false);
    setCropperImage(null);
  };

  // Handle personal data change
  const handlePersonalChange = (field, value) => {
    const updatedPersonal = { ...data, [field]: value };
    onChange(updatedPersonal);
  };

  // Handle add item to array
  const handleAddItem = (newItem) => {
    onChange([...(data || []), newItem]);
  };

  // Handle remove item from array
  const handleRemoveItem = (itemId) => {
    const updatedData = data.filter(item => item.id !== itemId);
    onChange(updatedData);
  };

  // Handle update item in array
  const handleUpdateItem = (itemId, field, value) => {
    const updatedData = data.map(item => 
      item.id === itemId ? { ...item, [field]: value } : item
    );
    onChange(updatedData);
  };

  // Handle project image change
  const handleProjectImageChange = (projectId, e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        handleUpdateItem(projectId, 'image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Render different section forms based on the active section
  switch (section) {
    case 'personal':
      const personalData = data || {};
      
      return (
        <div>
          {/* Avatar upload */}
          <div className="mb-6 text-center">
            <div 
              onClick={handleAvatarClick} 
              className="relative w-32 h-32 mx-auto cursor-pointer group"
            >
              {personalData.avatar ? (
                <div className="relative">
                  <img 
                    src={personalData.avatar} 
                    alt="Avatar" 
                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-white text-sm font-medium">Change Photo</span>
                  </div>
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-400 group-hover:bg-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/jpeg, image/png"
                className="hidden"
              />
            </div>
            {personalData.avatar && (
              <button
                onClick={() => handlePersonalChange('avatar', '')}
                className="mt-2 text-red-500 hover:text-red-700"
              >
                {t('removeAvatar')}
              </button>
            )}
          </div>
          
          {/* Personal details */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('name')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={personalData.name || ''}
              onChange={(e) => handlePersonalChange('name', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('jobTitle')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={personalData.title || ''}
              onChange={(e) => handlePersonalChange('title', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('email')}</label>
            <input 
              type="email" 
              className="w-full border rounded px-3 py-2"
              value={personalData.email || ''}
              onChange={(e) => handlePersonalChange('email', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('phone')}</label>
            <input 
              type="tel" 
              className="w-full border rounded px-3 py-2"
              value={personalData.phone || ''}
              onChange={(e) => handlePersonalChange('phone', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('address')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={personalData.address || ''}
              onChange={(e) => handlePersonalChange('address', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('github')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={personalData.github || ''}
              onChange={(e) => handlePersonalChange('github', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('portfolio')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={personalData.portfolio || ''}
              onChange={(e) => handlePersonalChange('portfolio', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('linkedin')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={personalData.linkedin || ''}
              onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('about')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="4"
              value={personalData.about || ''}
              onChange={(e) => handlePersonalChange('about', e.target.value)}
            />
          </div>
          
          {/* Image cropper modal */}
          {showCropper && cropperImage && (
            <ImageCropper
              image={cropperImage}
              onCropComplete={handleCroppedImage}
              onCancel={handleCropperCancel}
            />
          )}
        </div>
      );
    
    case 'skills':
      return (
        <div>
          {/* List of skills */}
          {data.map((skill) => (
            <div key={skill.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(skill.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">{t('skillName')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={skill.name}
                  onChange={(e) => handleUpdateItem(skill.id, 'name', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">{t('skillDescription')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={skill.description || ''}
                  onChange={(e) => handleUpdateItem(skill.id, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add skill button */}
          <button 
            onClick={() => handleAddItem({
              id: `skill${Date.now()}`,
              name: t('skillName'),
              description: t('skillDescription')
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addSkill')}
          </button>
        </div>
      );
    
    case 'experience':
      return (
        <div>
          {/* List of experiences */}
          {data.map((exp) => (
            <div key={exp.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(exp.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">{t('position')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={exp.title}
                  onChange={(e) => handleUpdateItem(exp.id, 'title', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">{t('company')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={exp.company}
                  onChange={(e) => handleUpdateItem(exp.id, 'company', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">{t('location')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={exp.location}
                  onChange={(e) => handleUpdateItem(exp.id, 'location', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <label className="block text-gray-700 mb-1">{t('from')}</label>
                  <input 
                    type="text" 
                    className="w-full border rounded px-3 py-2"
                    value={exp.from}
                    onChange={(e) => handleUpdateItem(exp.id, 'from', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t('to')}</label>
                  <input 
                    type="text" 
                    className="w-full border rounded px-3 py-2"
                    value={exp.to}
                    onChange={(e) => handleUpdateItem(exp.id, 'to', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">{t('description')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={exp.description}
                  onChange={(e) => handleUpdateItem(exp.id, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add experience button */}
          <button 
            onClick={() => handleAddItem({
              id: `exp${Date.now()}`,
              title: t('position'),
              company: t('company'),
              location: t('location'),
              from: '01/2022',
              to: t('present'),
              description: t('description')
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addExperience')}
          </button>
        </div>
      );
    
    case 'education':
      return (
        <div>
          {/* List of education */}
          {data.map((edu) => (
            <div key={edu.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(edu.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">{t('degree')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={edu.degree}
                  onChange={(e) => handleUpdateItem(edu.id, 'degree', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">{t('school')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={edu.school}
                  onChange={(e) => handleUpdateItem(edu.id, 'school', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">{t('location')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={edu.location}
                  onChange={(e) => handleUpdateItem(edu.id, 'location', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <label className="block text-gray-700 mb-1">{t('from')}</label>
                  <input 
                    type="text" 
                    className="w-full border rounded px-3 py-2"
                    value={edu.from}
                    onChange={(e) => handleUpdateItem(edu.id, 'from', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t('to')}</label>
                  <input 
                    type="text" 
                    className="w-full border rounded px-3 py-2"
                    value={edu.to}
                    onChange={(e) => handleUpdateItem(edu.id, 'to', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">{t('eduDescription')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={edu.description}
                  onChange={(e) => handleUpdateItem(edu.id, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add education button */}
          <button 
            onClick={() => handleAddItem({
              id: `edu${Date.now()}`,
              degree: t('degree'),
              school: t('school'),
              location: t('location'),
              from: '01/2015',
              to: '12/2019',
              description: t('eduDescription')
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addEducation')}
          </button>
        </div>
      );
      
    case 'projects':
      return (
        <div>
          {/* List of projects */}
          {Array.isArray(data) && data.map((project) => (
            <div key={project.id} className="mb-6 border rounded p-4 relative">
              <button 
                onClick={() => handleRemoveItem(project.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              
              {/* Project image */}
              <div className="mb-4 text-center">
                {project.image ? (
                  <div className="relative inline-block">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-40 object-cover rounded border border-gray-200"
                    />
                    <button
                      onClick={() => handleUpdateItem(project.id, 'image', '')}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 shadow-md"
                      title={t('removeAvatar')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div 
                    onClick={() => projectImageRef.current.click()}
                    className="h-40 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-xs text-gray-500 mt-2">{t('projectImage')}</span>
                    
                    <input 
                      type="file" 
                      ref={projectImageRef}
                      onChange={(e) => handleProjectImageChange(project.id, e)}
                      accept="image/jpeg, image/png"
                      className="hidden"
                    />
                  </div>
                )}
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('projectTitle')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={project.title}
                  onChange={(e) => handleUpdateItem(project.id, 'title', e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('projectDescription')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={project.description}
                  onChange={(e) => handleUpdateItem(project.id, 'description', e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('projectTechnologies')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={project.technologies}
                  onChange={(e) => handleUpdateItem(project.id, 'technologies', e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('projectLink')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={project.link}
                  onChange={(e) => handleUpdateItem(project.id, 'link', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add project button */}
          <button 
            onClick={() => handleAddItem({
              id: `proj${Date.now()}`,
              title: t('projectTitle'),
              description: t('projectDescription'),
              technologies: t('projectTechnologies'),
              link: 'https://github.com/yourusername/project',
              image: ''
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addProject')}
          </button>
        </div>
      );
      
    case 'technicalExpertise':
      return (
        <div>
          {/* List of technical expertise */}
          {Array.isArray(data) && data.map((tech) => (
            <div key={tech.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(tech.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('technicalCategory')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={tech.category}
                  onChange={(e) => handleUpdateItem(tech.id, 'category', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">{t('technicalSkills')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={tech.skills}
                  onChange={(e) => handleUpdateItem(tech.id, 'skills', e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {t('separateWithCommas') || 'Separate skills with commas'}
                </p>
              </div>
            </div>
          ))}
          
          {/* Add technical expertise button */}
          <button 
            onClick={() => handleAddItem({
              id: `tech${Date.now()}`,
              category: t('technicalCategory'),
              skills: t('technicalSkills')
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addTechnical')}
          </button>
        </div>
      );
      
    case 'certifications':
      return (
        <div>
          {/* List of certifications */}
          {Array.isArray(data) && data.map((cert) => (
            <div key={cert.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(cert.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('certName')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={cert.name}
                  onChange={(e) => handleUpdateItem(cert.id, 'name', e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('issuer')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={cert.issuer}
                  onChange={(e) => handleUpdateItem(cert.id, 'issuer', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">{t('date')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={cert.date}
                  onChange={(e) => handleUpdateItem(cert.id, 'date', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add certification button */}
          <button 
            onClick={() => handleAddItem({
              id: `cert${Date.now()}`,
              name: t('certName'),
              issuer: t('issuer'),
              date: '01/2022'
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addCertificate')}
          </button>
        </div>
      );
      
    case 'frontendBackend':
      const webData = data || {};
      
      return (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('frontendSkills')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="3"
              value={webData.frontendSkills || ''}
              onChange={(e) => onChange({...webData, frontendSkills: e.target.value})}
              placeholder="React, Angular, Vue.js, etc."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('backendSkills')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="3"
              value={webData.backendSkills || ''}
              onChange={(e) => onChange({...webData, backendSkills: e.target.value})}
              placeholder="Node.js, Django, Express, etc."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('devOpsSkills')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="3"
              value={webData.devOpsSkills || ''}
              onChange={(e) => onChange({...webData, devOpsSkills: e.target.value})}
              placeholder="Docker, Kubernetes, CI/CD, etc."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('codeSnippet')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2 font-mono text-sm"
              rows="6"
              value={webData.codeSnippet || ''}
              onChange={(e) => onChange({...webData, codeSnippet: e.target.value})}
              placeholder="// Your sample code here"
            />
            <p className="text-xs text-gray-500 mt-1">{t('codeDescription')}</p>
          </div>
        </div>
      );
    
    case 'cloudInfrastructure':
      const cloudData = data || {};
      
      return (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('infrastructureSkills')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="3"
              value={cloudData.infrastructureSkills || ''}
              onChange={(e) => onChange({...cloudData, infrastructureSkills: e.target.value})}
              placeholder="Terraform, CloudFormation, Networking, etc."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('securitySkills')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="3"
              value={cloudData.securitySkills || ''}
              onChange={(e) => onChange({...cloudData, securitySkills: e.target.value})}
              placeholder="IAM, Security Groups, VPC, etc."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('cloudPlatforms')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={cloudData.cloudPlatforms || ''}
              onChange={(e) => onChange({...cloudData, cloudPlatforms: e.target.value})}
              placeholder="AWS, Azure, GCP, etc."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('devOpsTools')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={cloudData.devOpsTools || ''}
              onChange={(e) => onChange({...cloudData, devOpsTools: e.target.value})}
              placeholder="Docker, Kubernetes, Jenkins, etc."
            />
          </div>
        </div>
      );
    
    case 'methodologies':
      return (
        <div>
          {/* List of methodologies */}
          {Array.isArray(data) && data.map((method) => (
            <div key={method.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(method.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('methodologies')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={method.name}
                  onChange={(e) => handleUpdateItem(method.id, 'name', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">{t('description')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={method.description}
                  onChange={(e) => handleUpdateItem(method.id, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add methodology button */}
          <button 
            onClick={() => handleAddItem({
              id: `method${Date.now()}`,
              name: t('methodologies'),
              description: t('description')
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addMethodology')}
          </button>
        </div>
      );
    
    case 'achievements':
      return (
        <div>
          {/* List of achievements */}
          {Array.isArray(data) && data.map((achievement) => (
            <div key={achievement.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(achievement.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('achievements')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={achievement.title}
                  onChange={(e) => handleUpdateItem(achievement.id, 'title', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">{t('description')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={achievement.description}
                  onChange={(e) => handleUpdateItem(achievement.id, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add achievement button */}
          <button 
            onClick={() => handleAddItem({
              id: `achv${Date.now()}`,
              title: t('achievements'),
              description: t('description')
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addAchievement')}
          </button>
        </div>
      );
    
    case 'businessTools':
      const businessData = data || {};
      
      return (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('toolsUsed')}</label>
            <div className="border rounded p-3">
              <div className="flex flex-wrap gap-2 mb-2">
                {businessData.toolsUsed?.map((tool, index) => (
                  <div key={index} className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                    <span className="text-sm">{tool}</span>
                    <button
                      onClick={() => {
                        const newTools = [...(businessData.toolsUsed || [])];
                        newTools.splice(index, 1);
                        onChange({...businessData, toolsUsed: newTools});
                      }}
                      className="ml-2 text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  placeholder="Add tool (e.g., SQL, Excel, JIRA)"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      const newTools = [...(businessData.toolsUsed || []), e.target.value.trim()];
                      onChange({...businessData, toolsUsed: newTools});
                      e.target.value = '';
                    }
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Press Enter to add</p>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('domain')}</label>
            {businessData.domains?.map((domain, index) => (
              <div key={index} className="mb-3 border rounded p-3 relative">
                <button 
                  onClick={() => {
                    const newDomains = [...(businessData.domains || [])];
                    newDomains.splice(index, 1);
                    onChange({...businessData, domains: newDomains});
                  }} 
                  className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
                >
                  ×
                </button>
                
                <div className="mb-2">
                  <label className="block text-gray-700 mb-1">{t('domain')}</label>
                  <input 
                    type="text" 
                    className="w-full border rounded px-3 py-2"
                    value={domain.area}
                    onChange={(e) => {
                      const newDomains = [...(businessData.domains || [])];
                      newDomains[index] = {...domain, area: e.target.value};
                      onChange({...businessData, domains: newDomains});
                    }}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">{t('description')}</label>
                  <textarea 
                    className="w-full border rounded px-3 py-2"
                    rows="2"
                    value={domain.description}
                    onChange={(e) => {
                      const newDomains = [...(businessData.domains || [])];
                      newDomains[index] = {...domain, description: e.target.value};
                      onChange({...businessData, domains: newDomains});
                    }}
                  />
                </div>
              </div>
            ))}
            
            <button 
              onClick={() => {
                const newDomains = [...(businessData.domains || []), { area: '', description: '' }];
                onChange({...businessData, domains: newDomains});
              }}
              className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
            >
              + Add Domain
            </button>
          </div>
        </div>
      );
    
    case 'dataProjects':
      return (
        <div>
          {/* List of data projects */}
          {Array.isArray(data) && data.map((project) => (
            <div key={project.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(project.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('projectTitle')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={project.title}
                  onChange={(e) => handleUpdateItem(project.id, 'title', e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('projectTechnologies')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={project.technologies}
                  onChange={(e) => handleUpdateItem(project.id, 'technologies', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">{t('description')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={project.description}
                  onChange={(e) => handleUpdateItem(project.id, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add data project button */}
          <button 
            onClick={() => handleAddItem({
              id: `dproj${Date.now()}`,
              title: t('projectTitle'),
              technologies: t('projectTechnologies'),
              description: t('description')
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addDataProject')}
          </button>
        </div>
      );
    
    case 'dataTechnologies':
      const dataEngData = data || {};
      
      return (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('dataLanguages')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={dataEngData.dataLanguages || ''}
              onChange={(e) => onChange({...dataEngData, dataLanguages: e.target.value})}
              placeholder="Python, Scala, SQL, R"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('databases')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={dataEngData.databases || ''}
              onChange={(e) => onChange({...dataEngData, databases: e.target.value})}
              placeholder="PostgreSQL, MongoDB, Cassandra"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('bigDataTech')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={dataEngData.bigDataTech || ''}
              onChange={(e) => onChange({...dataEngData, bigDataTech: e.target.value})}
              placeholder="Hadoop, Spark, Kafka"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('dataPipelines')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="6"
              value={dataEngData.dataPipelines || ''}
              onChange={(e) => onChange({...dataEngData, dataPipelines: e.target.value})}
              placeholder="• Designed and implemented ETL pipelines\n• Experience with batch and stream processing"
            />
          </div>
        </div>
      );

    case 'devOpsProjects':
      return (
        <div>
          {/* List of DevOps projects */}
          {Array.isArray(data) && data.map((project) => (
            <div key={project.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(project.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('projectTitle')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={project.title}
                  onChange={(e) => handleUpdateItem(project.id, 'title', e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('projectTechnologies')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={project.technologies}
                  onChange={(e) => handleUpdateItem(project.id, 'technologies', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">{t('description')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={project.description}
                  onChange={(e) => handleUpdateItem(project.id, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add DevOps project button */}
          <button 
            onClick={() => handleAddItem({
              id: `devproj${Date.now()}`,
              title: t('projectTitle'),
              technologies: t('projectTechnologies'),
              description: t('description')
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addDevOpsProject')}
          </button>
        </div>
      );
    
    case 'devOpsTechnologies':
      const devOpsData = data || {};
      
      return (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('cicdPipelines')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={devOpsData.cicdPipelines || ''}
              onChange={(e) => onChange({...devOpsData, cicdPipelines: e.target.value})}
              placeholder="Jenkins, GitHub Actions, GitLab CI/CD"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('containerization')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={devOpsData.containerization || ''}
              onChange={(e) => onChange({...devOpsData, containerization: e.target.value})}
              placeholder="Docker, Kubernetes, OpenShift"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('infrastructureTools')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={devOpsData.infrastructureTools || ''}
              onChange={(e) => onChange({...devOpsData, infrastructureTools: e.target.value})}
              placeholder="Terraform, Ansible, CloudFormation"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('monitoringTools')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="2"
              value={devOpsData.monitoringTools || ''}
              onChange={(e) => onChange({...devOpsData, monitoringTools: e.target.value})}
              placeholder="Prometheus, Grafana, ELK Stack"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('automationScripts')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="6"
              value={devOpsData.automationScripts || ''}
              onChange={(e) => onChange({...devOpsData, automationScripts: e.target.value})}
              placeholder="• Created automation scripts\n• Implemented infrastructure as code"
            />
          </div>
        </div>
      );
    
    case 'campaigns':
      return (
        <div>
          {/* List of campaigns */}
          {Array.isArray(data) && data.map((campaign) => (
            <div key={campaign.id} className="mb-4 border rounded p-3 relative">
              <button 
                onClick={() => handleRemoveItem(campaign.id)} 
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('campaignTitle')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={campaign.title}
                  onChange={(e) => handleUpdateItem(campaign.id, 'title', e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-gray-700 mb-1">{t('campaignClient')}</label>
                  <input 
                    type="text" 
                    className="w-full border rounded px-3 py-2"
                    value={campaign.client}
                    onChange={(e) => handleUpdateItem(campaign.id, 'client', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t('campaignDate')}</label>
                  <input 
                    type="text" 
                    className="w-full border rounded px-3 py-2"
                    value={campaign.date}
                    onChange={(e) => handleUpdateItem(campaign.id, 'date', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label className="block text-gray-700 mb-1">{t('campaignDescription')}</label>
                <textarea 
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                  value={campaign.description}
                  onChange={(e) => handleUpdateItem(campaign.id, 'description', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">{t('campaignResult')}</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2"
                  value={campaign.result}
                  onChange={(e) => handleUpdateItem(campaign.id, 'result', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          {/* Add campaign button */}
          <button 
            onClick={() => handleAddItem({
              id: `camp${Date.now()}`,
              title: t('campaignTitle'),
              client: t('campaignClient'),
              date: 'Q1 2023',
              description: t('campaignDescription'),
              result: '25% increase in engagement'
            })}
            className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition-colors"
          >
            + {t('addCampaign')}
          </button>
        </div>
      );
    
    case 'marketingDetails':
      const marketingData = data || {};
      
      return (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('socialPlatforms')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="3"
              value={marketingData.socialPlatforms || ''}
              onChange={(e) => onChange({...marketingData, socialPlatforms: e.target.value})}
              placeholder="Instagram, Facebook, LinkedIn, Twitter, TikTok"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t('separateWithCommas') || 'Separate platforms with commas'}
            </p>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">{t('marketingTools')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="4"
              value={marketingData.marketingTools || ''}
              onChange={(e) => onChange({...marketingData, marketingTools: e.target.value})}
              placeholder="Google Analytics, Mailchimp, Hootsuite, SEMrush, Canva"
            />
          </div>
        </div>
      );
    
    default:
      return <div>Please select a section to edit.</div>;
  }
}
