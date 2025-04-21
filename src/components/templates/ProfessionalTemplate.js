export default function ProfessionalTemplate({ data }) {
  const { personal, experience, education, skills } = data
  
  return (
    <div id="cv-preview" className="bg-white font-serif">
      <header className="bg-gray-800 text-white p-8">
        <h1 className="text-3xl font-bold">{personal.name}</h1>
        <h2 className="text-xl mt-1 text-gray-300">{personal.title}</h2>
        
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4 text-sm">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>{personal.email}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>{personal.phone}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            <span>{personal.address}</span>
          </div>
        </div>
      </header>
      
      <div className="p-8">
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 border-b border-gray-400 pb-1 mb-3">PROFILE</h3>
          <p className="text-gray-700 leading-relaxed">{personal.about}</p>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-400 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h3>
              
              {experience.map(job => (
                <div key={job.id} className="mb-5">
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="font-bold text-gray-800">{job.title}</h4>
                    <div className="text-gray-600 text-sm">{job.from} - {job.to}</div>
                  </div>
                  <div className="font-semibold text-gray-700">{job.company}, {job.location}</div>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                </div>
              ))}
            </section>
            
            <section>
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-400 pb-1 mb-3">EDUCATION</h3>
              
              {education.map(edu => (
                <div key={edu.id} className="mb-5">
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                    <div className="text-gray-600 text-sm">{edu.from} - {edu.to}</div>
                  </div>
                  <div className="font-semibold text-gray-700">{edu.school}, {edu.location}</div>
                  <p className="mt-2 text-gray-600">{edu.description}</p>
                </div>
              ))}
            </section>
          </div>
          
          <div>
            <section>
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-400 pb-1 mb-3">SKILLS</h3>
              
              {skills.map(skill => (
                <div key={skill.id} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-gray-700 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
