import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import CVEditor from '../../components/CVEditor'
import CVPreview from '../../components/CVPreview'
import exportToPDF from '../../utils/exportToPDF'
import exportToWord from '../../utils/exportToWord'

// Default CV data structure
const defaultCV = {
  personal: {
    name: 'Họ và tên',
    title: 'Vị trí công việc',
    email: 'email@example.com',
    phone: '0123456789',
    address: 'Địa chỉ của bạn',
    about: 'Giới thiệu ngắn về bản thân...'
  },
  experience: [
    {
      id: 'exp1',
      title: 'Vị trí công việc',
      company: 'Tên công ty',
      location: 'Địa điểm',
      from: '01/2020',
      to: 'Hiện tại',
      description: 'Mô tả công việc và thành tích của bạn'
    }
  ],
  education: [
    {
      id: 'edu1',
      degree: 'Bằng cấp',
      school: 'Tên trường',
      location: 'Địa điểm',
      from: '01/2015',
      to: '12/2019',
      description: 'Mô tả về quá trình học tập và thành tích'
    }
  ],
  skills: [
    { id: 'skill1', name: 'Kỹ năng 1', level: 80 },
    { id: 'skill2', name: 'Kỹ năng 2', level: 70 },
    { id: 'skill3', name: 'Kỹ năng 3', level: 90 }
  ]
}

export default function EditorPage() {
  const router = useRouter()
  const { id: templateId } = router.query
  const [cvData, setCvData] = useState(defaultCV)
  const [activeSection, setActiveSection] = useState('personal')

  const handleSavePDF = () => {
    exportToPDF(cvData, templateId)
  }

  const handleSaveWord = () => {
    exportToWord(cvData, templateId)
  }

  // Update CV data when user edits form
  const handleDataChange = (section, data) => {
    setCvData(prev => ({
      ...prev,
      [section]: data
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Edit CV Template</title>
        <meta name="description" content="Edit your CV" />
      </Head>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column - Editor */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-2xl font-bold mb-4">Chỉnh sửa CV</h2>
            
            {/* Section tabs */}
            <div className="flex mb-6 border-b">
              <button
                className={`px-4 py-2 ${activeSection === 'personal' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                onClick={() => setActiveSection('personal')}
              >
                Cá nhân
              </button>
              <button
                className={`px-4 py-2 ${activeSection === 'experience' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                onClick={() => setActiveSection('experience')}
              >
                Kinh nghiệm
              </button>
              <button
                className={`px-4 py-2 ${activeSection === 'education' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                onClick={() => setActiveSection('education')}
              >
                Học vấn
              </button>
              <button
                className={`px-4 py-2 ${activeSection === 'skills' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                onClick={() => setActiveSection('skills')}
              >
                Kỹ năng
              </button>
            </div>
            
            {/* Editor component */}
            <CVEditor 
              section={activeSection} 
              data={cvData[activeSection]} 
              onChange={(data) => handleDataChange(activeSection, data)} 
            />
          </div>
          
          {/* Export buttons */}
          <div className="flex gap-4 mt-4">
            <button 
              onClick={handleSavePDF}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex-1"
            >
              Xuất PDF
            </button>
            <button 
              onClick={handleSaveWord}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex-1"
            >
              Xuất Word
            </button>
          </div>
        </div>
        
        {/* Right column - Preview */}
        <div className="w-full md:w-2/3 bg-gray-100 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Xem trước</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CVPreview template={templateId} data={cvData} />
          </div>
        </div>
      </div>
    </div>
  )
}
