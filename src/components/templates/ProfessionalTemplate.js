export default function ProfessionalTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center justify-between border-b-4 border-gray-800 pb-6">
            <div className="flex items-center">
              {/* Avatar */}
              {personalData.avatar && (
                <div className="mr-6">
                  <img 
                    src={personalData.avatar} 
                    alt={personalData.name || "Profile"}
                    className="w-28 h-28 object-cover border-2 border-gray-800 shadow-lg"
                  />
                </div>
              )}
              
              {/* Name and title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{personalData.name || ""}</h1>
                <p className="text-xl text-gray-700 mt-1 font-semibold">{personalData.title || ""}</p>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="mt-4 lg:mt-0 text-right flex-shrink-0">
              <div className="text-gray-700 space-y-1">
                {personalData.email && <p>{personalData.email}</p>}
                {personalData.phone && <p>{personalData.phone}</p>}
                {personalData.address && <p>{personalData.address}</p>}
                {personalData.linkedin && <p>{personalData.linkedin}</p>}
              </div>
            </div>
          </div>
          
          {/* Professional Summary */}
          <div className="mt-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-300 pb-2">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{personalData.about || ""}</p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main column - Experience */}
          <div className="lg:w-2/3">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Professional Experience</h2>
              <div className="space-y-6">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="mb-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-gray-700 font-semibold">{exp.company}, {exp.location}</p>
                      </div>
                      <span className="text-gray-600 text-sm font-medium bg-gray-100 px-3 py-1 rounded">{exp.from} - {exp.to}</span>
                    </div>
                    <p className="text-gray-700 mt-3">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Projects (if available) */}
            {data.projects && data.projects.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Key Projects</h2>
                <div className="space-y-4">
                  {data.projects.map((project) => (
                    <div key={project.id} className="border-l-2 border-gray-300 pl-4">
                      <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                      <p className="text-gray-700 mt-1">{project.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right sidebar - Skills and Education */}
          <div className="lg:w-1/3">
            {/* Skills */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Skills</h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="mb-2">
                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.school}, {edu.location}</p>
                  <p className="text-gray-600 text-sm">{edu.from} - {edu.to}</p>
                  <p className="text-gray-600 mt-1">{edu.description}</p>
                </div>
              ))}
            </section>
            
            {/* Certifications (if available) */}
            {data.certifications && data.certifications.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">Certifications</h2>
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="mb-3">
                    <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
