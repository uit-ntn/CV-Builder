export default function ModernTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  const accentColor = '#6366f1'; // Indigo color
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative header bar */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-lg -z-10"></div>
        
        {/* Header */}
        <header className="pt-10 pb-12 px-8 flex flex-col md:flex-row md:items-end mb-8 relative z-10">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{personalData.name || ""}</h1>
            <p className="text-2xl font-light opacity-90">{personalData.title || ""}</p>
            
            {/* Brief tagline */}
            <p className="mt-4 text-white/80 max-w-md italic">
              {personalData.tagline || personalData.about?.substring(0, 100) + "..." || ""}
            </p>
          </div>
          
          {/* Avatar */}
          {personalData.avatar && (
            <div className="mt-6 md:mt-0 ml-auto">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={personalData.avatar} 
                  alt={personalData.name || "Profile"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </header>

        {/* Contact info bar */}
        <div className="bg-gray-50 rounded-lg shadow-md mb-10 py-4 px-8 flex flex-wrap justify-between gap-4 text-sm">
          {personalData.email && (
            <div className="flex items-center gap-2">
              <span style={{ color: accentColor }}>✉</span>
              <span>{personalData.email}</span>
            </div>
          )}
          {personalData.phone && (
            <div className="flex items-center gap-2">
              <span style={{ color: accentColor }}>☎</span>
              <span>{personalData.phone}</span>
            </div>
          )}
          {personalData.address && (
            <div className="flex items-center gap-2">
              <span style={{ color: accentColor }}>⌂</span>
              <span>{personalData.address}</span>
            </div>
          )}
          {personalData.linkedin && (
            <div className="flex items-center gap-2">
              <span style={{ color: accentColor }}>👔</span>
              <span>{personalData.linkedin}</span>
            </div>
          )}
          {personalData.github && (
            <div className="flex items-center gap-2">
              <span style={{ color: accentColor }}>💻</span>
              <span>{personalData.github}</span>
            </div>
          )}
        </div>

        {/* Two column layout for content */}
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main column */}
            <div className="md:w-7/12">
              {/* About */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
                  About Me
                </h2>
                <p className="leading-relaxed text-gray-700">{personalData.about || ""}</p>
              </section>

              {/* Experience */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
                  Experience
                </h2>
                <div className="space-y-8">
                  {data.experience.map((exp, i) => (
                    <div key={exp.id} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-indigo-500">
                      <div className="flex flex-wrap justify-between items-baseline mb-1">
                        <h3 className="font-bold text-xl text-gray-800">{exp.title}</h3>
                        <span className="text-sm text-indigo-600 font-medium">{exp.from} - {exp.to}</span>
                      </div>
                      <p className="font-medium text-lg" style={{ color: accentColor }}>{exp.company}, {exp.location}</p>
                      <p className="mt-3 text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="md:w-5/12">
              {/* Skills */}
              <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
                  Skills
                </h2>
                <div className="space-y-5">
                  {data.skills.map((skill) => (
                    <div key={skill.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-gray-800">{skill.name}</h3>
                      <p className="text-gray-600 mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
                  Education
                </h2>
                <div className="space-y-6">
                  {data.education.map((edu) => (
                    <div key={edu.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                      <p className="font-medium" style={{ color: accentColor }}>{edu.school}</p>
                      <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
                        <span>{edu.location}</span>
                        <span>{edu.from} - {edu.to}</span>
                      </div>
                      {edu.description && <p className="mt-2 text-gray-700">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Certifications (if available) */}
              {data.certifications && data.certifications.length > 0 && (
                <section>
                  <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
                    Certifications
                  </h2>
                  <div className="space-y-3">
                    {data.certifications.map((cert) => (
                      <div key={cert.id} className="flex justify-between items-center border-l-2 pl-3 py-1" style={{ borderColor: accentColor }}>
                        <div>
                          <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                        </div>
                        <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded">{cert.date}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
