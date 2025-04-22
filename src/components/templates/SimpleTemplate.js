export default function SimpleTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header / Personal Info */}
        <header className="border-b-2 border-gray-300 pb-6 mb-6">
          <div className="flex flex-wrap items-center justify-between">
            {/* Left side: Avatar and name */}
            <div className="flex items-center mb-4 lg:mb-0">
              {/* Avatar */}
              {personalData.avatar && (
                <div className="mr-6">
                  <img 
                    src={personalData.avatar} 
                    alt={personalData.name || "Profile"}
                    className="w-24 h-24 rounded-full object-cover border border-gray-200 shadow"
                  />
                </div>
              )}
              
              {/* Name and title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{personalData.name || ""}</h1>
                <p className="text-xl text-gray-600 mt-1">{personalData.title || ""}</p>
              </div>
            </div>
            
            {/* Right side: Contact info */}
            <div className="w-full lg:w-auto flex flex-col space-y-1 text-right">
              {personalData.email && (
                <div className="flex items-center justify-end">
                  <span className="text-gray-700">{personalData.email}</span>
                  <span className="ml-2 text-gray-400">📧</span>
                </div>
              )}
              {personalData.phone && (
                <div className="flex items-center justify-end">
                  <span className="text-gray-700">{personalData.phone}</span>
                  <span className="ml-2 text-gray-400">📱</span>
                </div>
              )}
              {personalData.address && (
                <div className="flex items-center justify-end">
                  <span className="text-gray-700">{personalData.address}</span>
                  <span className="ml-2 text-gray-400">📍</span>
                </div>
              )}
              {personalData.linkedin && (
                <div className="flex items-center justify-end">
                  <span className="text-gray-700">{personalData.linkedin}</span>
                  <span className="ml-2 text-gray-400">👔</span>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex flex-wrap -mx-4">
          {/* Main Content (2/3) */}
          <div className="w-full lg:w-2/3 px-4">
            {/* About Me */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-700 border-b border-gray-200 pb-2">About Me</h2>
              <p className="text-gray-600 leading-relaxed">{personalData.about || ""}</p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-700 border-b border-gray-200 pb-2">Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-5">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <span className="text-sm text-gray-500">{exp.from} - {exp.to}</span>
                  </div>
                  <div className="text-gray-700 font-medium">{exp.company}, {exp.location}</div>
                  <p className="text-gray-600 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </section>
          </div>
          
          {/* Sidebar (1/3) */}
          <div className="w-full lg:w-1/3 px-4">
            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-700 border-b border-gray-200 pb-2">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.school}, {edu.location}</p>
                  <p className="text-gray-600 text-sm">{edu.from} - {edu.to}</p>
                  <p className="text-gray-600 mt-1">{edu.description}</p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-700 border-b border-gray-200 pb-2">Skills</h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="mb-2">
                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Languages or other sections */}
            {data.languages && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-700 border-b border-gray-200 pb-2">Languages</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {data.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
