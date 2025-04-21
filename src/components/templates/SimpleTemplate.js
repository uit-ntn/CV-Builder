export default function SimpleTemplate({ data }) {
  const { personal, experience, education, skills } = data
  
  return (
    <div id="cv-preview" className="bg-white p-8 font-sans">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">{personal.name}</h1>
        <h2 className="text-xl text-gray-600 mt-1">{personal.title}</h2>
        
        <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600 flex-wrap">
          <div>{personal.email}</div>
          <div>{personal.phone}</div>
          <div>{personal.address}</div>
        </div>
      </header>
      
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-3">GIỚI THIỆU</h3>
        <p className="text-gray-700">{personal.about}</p>
      </section>
      
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-3">KINH NGHIỆM LÀM VIỆC</h3>
        
        {experience.map(job => (
          <div key={job.id} className="mb-4">
            <div className="flex justify-between">
              <h4 className="font-bold">{job.title}</h4>
              <div className="text-gray-600 text-sm">
                {job.from} - {job.to}
              </div>
            </div>
            <div className="text-gray-700">{job.company}, {job.location}</div>
            <p className="text-gray-600 mt-1 text-sm">{job.description}</p>
          </div>
        ))}
      </section>
      
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-3">HỌC VẤN</h3>
        
        {education.map(edu => (
          <div key={edu.id} className="mb-4">
            <div className="flex justify-between">
              <h4 className="font-bold">{edu.degree}</h4>
              <div className="text-gray-600 text-sm">
                {edu.from} - {edu.to}
              </div>
            </div>
            <div className="text-gray-700">{edu.school}, {edu.location}</div>
            <p className="text-gray-600 mt-1 text-sm">{edu.description}</p>
          </div>
        ))}
      </section>
      
      <section>
        <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-3">KỸ NĂNG</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {skills.map(skill => (
            <div key={skill.id} className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
