export default function CloudTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  const technicalExpertise = data?.technicalExpertise || [];
  const certifications = data?.certifications || [];
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header with cloud theme */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-t-lg">
        <div className="flex flex-wrap">
          {/* Left side: Avatar and name */}
          <div className="w-full md:w-7/12 flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            {personalData.avatar && (
              <div className="mr-6">
                <img 
                  src={personalData.avatar} 
                  alt={personalData.name || "Profile"}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            )}
            
            {/* Name and title */}
            <div>
              <h1 className="text-3xl font-bold">{personalData.name || ""}</h1>
              <p className="text-xl mt-1">{personalData.title || ""}</p>
            </div>
          </div>
          
          {/* Right side: Contact info in vertical layout */}
          <div className="w-full md:w-5/12 flex flex-col justify-center space-y-2">
            <div className="flex items-center">
              <span className="mr-3 w-5 text-center">📧</span>
              <span>{personalData.email || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 w-5 text-center">📱</span>
              <span>{personalData.phone || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 w-5 text-center">📍</span>
              <span>{personalData.address || ""}</span>
            </div>
            {personalData.linkedin && (
              <div className="flex items-center">
                <span className="mr-3 w-5 text-center">☁️</span>
                <span>{personalData.linkedin}</span>
              </div>
            )}
            {personalData.github && (
              <div className="flex items-center">
                <span className="mr-3 w-5 text-center">💻</span>
                <span>{personalData.github}</span>
              </div>
            )}
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

        {/* Three column layout for main content */}
        <div className="flex flex-wrap -mx-4">
          {/* Left column */}
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            {/* Technical Expertise - Specialized for Cloud Engineers */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                <span className="mr-2">⚙️</span> Technical Expertise
              </h2>
              <div className="space-y-3">
                {technicalExpertise.map((tech) => (
                  <div key={tech.id} className="border-l-2 border-gray-400 pl-3 mb-3">
                    <h3 className="font-semibold text-gray-800">{tech.category}</h3>
                    <div className="flex flex-wrap mt-1">
                      {tech.skills.split(',').map((skill, index) => (
                        <span 
                          key={index} 
                          className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded mr-1 mb-1 text-xs"
                        >
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Regular Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                <span className="mr-2">☁️</span> Cloud Skills
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="border-l-2 border-gray-400 pl-3 mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* New Cloud Platforms section */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                <span className="mr-2">☁️</span> Cloud Platforms
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.cloudPlatforms && data.cloudPlatforms.split(',').map((platform, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm mb-2"
                  >
                    {platform.trim()}
                  </span>
                ))}
              </div>
            </section>
          </div>
          
          {/* Middle column */}
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            {/* Certifications */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                <span className="mr-2">🏆</span> Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="border-l-2 border-gray-400 pl-3 mb-3">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
                    <p className="text-sm text-gray-600">Date: {cert.date}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id} className="mb-3">
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p className="text-sm text-gray-600">{edu.from} - {edu.to}</p>
                    <div className="text-gray-700 font-medium">{edu.school}</div>
                    <div className="text-sm text-gray-600">{edu.location}</div>
                    <p className="text-sm mt-1">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Infrastructure Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                <span className="mr-2">🏗️</span> Infrastructure Skills
              </h2>
              <p className="text-sm mb-2">{data.infrastructureSkills}</p>
            </section>
            
            {/* Security Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                <span className="mr-2">🔒</span> Security Skills
              </h2>
              <p className="text-sm mb-2">{data.securitySkills}</p>
            </section>
          </div>
          
          {/* Right column */}
          <div className="w-full md:w-1/3 px-4">
            {/* Professional Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="mb-4">
                    <h3 className="font-bold">{exp.title}</h3>
                    <p className="text-sm text-gray-600">{exp.from} - {exp.to}</p>
                    <div className="text-gray-700 font-medium">{exp.company}</div>
                    <div className="text-sm text-gray-600">{exp.location}</div>
                    <p className="text-sm mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* DevOps Tools */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
                <span className="mr-2">🔧</span> DevOps Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.devOpsTools && data.devOpsTools.split(',').map((tool, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm mb-2"
                  >
                    {tool.trim()}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white p-3 text-center text-sm rounded-b-lg">
        Cloud Engineer with experience in scalable infrastructure and DevOps practices
      </footer>
    </div>
  );
}
