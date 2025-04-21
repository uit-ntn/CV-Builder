export default function CloudTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  const technicalExpertise = data?.technicalExpertise || [];
  const certifications = data?.certifications || [];
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header with cloud theme */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-t-lg">
        <div className="flex flex-wrap items-center">
          {/* Avatar */}
          {personalData.avatar && (
            <div className="mr-6 mb-4 md:mb-0">
              <img 
                src={personalData.avatar} 
                alt={personalData.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
          
          {/* Name and title */}
          <div className={`${personalData.avatar ? 'flex-1' : 'w-full'}`}>
            <h1 className="text-3xl font-bold">{personalData.name}</h1>
            <p className="text-xl mt-1">{personalData.title}</p>
            
            {/* Contact info with cloud-related icons */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <span>{personalData.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{personalData.address}</span>
              </div>
              {personalData.linkedin && (
                <div className="flex items-center">
                  <span className="mr-2">☁️</span>
                  <span>{personalData.linkedin}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 border-l border-r border-gray-200">
        {/* About Me */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            <span className="mr-2">🖥️</span> Professional Summary
          </h2>
          <p className="text-sm">{personalData.about || ""}</p>
        </section>

        {/* Technical Expertise - Specialized for Cloud Engineers */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            <span className="mr-2">⚙️</span> Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalExpertise.map((tech) => (
              <div key={tech.id} className="border-l-2 border-gray-400 pl-3 mb-2">
                <h3 className="font-semibold text-gray-800">{tech.category}</h3>
                <p className="text-sm mt-1">
                  {tech.skills.split(',').map((skill, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2 mb-2 text-xs"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Regular Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            <span className="mr-2">☁️</span> Cloud & Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {data.skills.map((skill) => (
              <div key={skill.id} className="border-l-2 border-gray-400 pl-3 mb-2">
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            <span className="mr-2">🏆</span> Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert.id} className="border-l-2 border-gray-400 pl-3">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
                <p className="text-sm text-gray-600">Date: {cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            Professional Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">{exp.title}</h3>
                <span className="text-sm text-gray-600">{exp.from} - {exp.to}</span>
              </div>
              <div className="text-gray-700 font-medium">{exp.company}, {exp.location}</div>
              <p className="text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-bold">{edu.degree}</h3>
                <span className="text-sm text-gray-600">{edu.from} - {edu.to}</span>
              </div>
              <div className="text-gray-700 font-medium">{edu.school}, {edu.location}</div>
              <p className="text-sm mt-1">{edu.description}</p>
            </div>
          ))}
        </section>
      </div>
      
      <footer className="bg-gray-800 text-white p-3 text-center text-sm rounded-b-lg">
        Cloud Engineer with experience in scalable infrastructure and DevOps practices
      </footer>
    </div>
  );
}
