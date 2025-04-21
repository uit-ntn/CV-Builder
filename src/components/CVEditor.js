import { useState, useRef } from 'react'

export default function CVEditor({ section, data, onChange, translations: t }) {
  const fileInputRef = useRef(null);
  
  // Function to handle avatar upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('File is too large. Maximum size is 2MB.');
      return;
    }
    
    // Validate file type
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      alert('Only JPG and PNG formats are supported.');
      return;
    }
    
    // Read file as data URL
    const reader = new FileReader();
    reader.onload = (event) => {
      onChange({
        ...data,
        avatar: event.target.result
      });
    };
    reader.readAsDataURL(file);
  };
  
  // Function to remove avatar
  const handleRemoveAvatar = () => {
    onChange({
      ...data,
      avatar: ''
    });
  };

  // Function to handle adding a new item to arrays (skills, experience, education)
  const handleAddItem = (item) => {
    if (Array.isArray(data)) {
      const newData = [...data, item]
      onChange(newData)
    }
  }

  // Function to handle removing an item from arrays
  const handleRemoveItem = (id) => {
    if (Array.isArray(data)) {
      const newData = data.filter(item => item.id !== id)
      onChange(newData)
    }
  }

  // Function to handle updating an item in arrays
  const handleUpdateItem = (id, field, value) => {
    if (Array.isArray(data)) {
      const newData = data.map(item => {
        if (item.id === id) {
          return { ...item, [field]: value }
        }
        return item
      })
      onChange(newData)
    }
  }

  // Function to handle personal information changes
  const handlePersonalChange = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  // Render different section forms based on the active section
  switch (section) {
    case 'personal':
      return (
        <div>
          {/* Avatar upload */}
          <div className="mb-6 text-center">
            <label className="block text-gray-700 mb-2 font-medium">{t('avatar')}</label>
            
            {data.avatar ? (
              <div className="relative inline-block">
                <img 
                  src={data.avatar} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                />
                <button
                  onClick={handleRemoveAvatar}
                  className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-1 shadow-md"
                  title={t('removeAvatar')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div 
                onClick={() => fileInputRef.current.click()}
                className="w-32 h-32 mx-auto border-2 border-dashed border-gray-300 rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-xs text-gray-500 mt-2">{t('uploadAvatar')}</span>
              </div>
            )}
            
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleAvatarChange}
              accept="image/jpeg, image/png"
              className="hidden"
            />
            <p className="text-xs text-gray-500 mt-2">
              {t('supportedFormats')} • {t('maxFileSize')}
            </p>
          </div>
          
          {/* Rest of personal info form */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('name')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={data.name || ''}
              onChange={(e) => handlePersonalChange('name', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('jobTitle')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={data.title || ''}
              onChange={(e) => handlePersonalChange('title', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('email')}</label>
            <input 
              type="email" 
              className="w-full border rounded px-3 py-2"
              value={data.email || ''}
              onChange={(e) => handlePersonalChange('email', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('phone')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={data.phone || ''}
              onChange={(e) => handlePersonalChange('phone', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('address')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={data.address || ''}
              onChange={(e) => handlePersonalChange('address', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('github')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={data.github || ''}
              onChange={(e) => handlePersonalChange('github', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('portfolio')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={data.portfolio || ''}
              onChange={(e) => handlePersonalChange('portfolio', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('linkedin')}</label>
            <input 
              type="text" 
              className="w-full border rounded px-3 py-2"
              value={data.linkedin || ''}
              onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">{t('about')}</label>
            <textarea 
              className="w-full border rounded px-3 py-2"
              rows="4"
              value={data.about || ''}
              onChange={(e) => handlePersonalChange('about', e.target.value)}
            />
          </div>
        </div>
      )
    
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
      )
    
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
      )
    
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
      )
      
    default:
      return <div>Please select a section to edit.</div>
  }
}
