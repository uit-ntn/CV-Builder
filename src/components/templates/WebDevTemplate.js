export default function WebDevTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  const projects = data?.projects || [];
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header / Personal Info */}
      <header className="border-b-4 border-blue-600 pb-6 mb-6">
        <div className="flex flex-wrap">
          {/* Left side: Avatar and name */}
          <div className="w-full md:w-7/12 flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            {personalData.avatar && (
              <div className="mr-6">
                <img 
                  src={personalData.avatar} 
                  alt={personalData.name || "Profile"}
                  className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                />
              </div>
            )}
            
            {/* Name and title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{personalData.name || ""}</h1>
              <p className="text-xl font-semibold text-blue-600 mt-1">{personalData.title || ""}</p>
            </div>
          </div>
          
          {/* Right side: Contact info in vertical layout */}
          <div className="w-full md:w-5/12 flex flex-col justify-center space-y-2">
            <div className="flex items-center">
              <span className="mr-3 text-blue-600 w-5 text-center">📧</span>
              <span>{personalData.email || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-blue-600 w-5 text-center">📱</span>
              <span>{personalData.phone || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-blue-600 w-5 text-center">📍</span>
              <span>{personalData.address || ""}</span>
            </div>
            {personalData.github && (
              <div className="flex items-center">
                <span className="mr-3 text-blue-600 w-5 text-center">💻</span>
                <span>{personalData.github}</span>
              </div>
            )}
            {personalData.linkedin && (
              <div className="flex items-center">
                <span className="mr-3 text-blue-600 w-5 text-center">👔</span>
                <span>{personalData.linkedin}</span>
              </div>
            )}
            {personalData.portfolio && (
              <div className="flex items-center">
                <span className="mr-3 text-blue-600 w-5 text-center">🔗</span>
                <span>{personalData.portfolio}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content - Three column layout */}
      <div className="flex flex-wrap -mx-4">
        {/* Left column */}
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          {/* About Me */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">About Me</h2>
            <p className="text-sm">{personalData.about || ""}</p>
          </section>

          {/* New specialized sections for WebDev */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Frontend Skills</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {data.frontendSkills && data.frontendSkills.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Backend Skills</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {data.backendSkills && data.backendSkills.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>
        </div>
        
        {/* Middle column */}
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          {/* Tech Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Technical Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                  <h3 className="font-semibold text-blue-700">{skill.name}</h3>
                  <p className="text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* DevOps Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">DevOps Skills</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {data.devOpsSkills && data.devOpsSkills.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>
          
          {/* Personal Projects - specific for WebDev Template */}
          {projects.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Projects</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="border rounded-lg overflow-hidden shadow-sm">
                    {project.image && (
                      <div className="h-32 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-3">
                      <h3 className="font-bold text-blue-700">{project.title}</h3>
                      <p className="text-xs mt-1">{project.description}</p>
                      <div className="mt-2">
                        <span className="text-xs font-semibold">Tech:</span>
                        <p className="text-xs">{project.technologies}</p>
                      </div>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-1 text-blue-600 hover:underline text-xs"
                        >
                          View Project →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        
        {/* Right column */}
        <div className="w-full md:w-1/3 px-4">
          {/* Code Snippet */}
          {data.codeSnippet && (
            <section className="mb-6">
              <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Code Example</h2>
              <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{data.codeSnippet}</pre>
              </div>
            </section>
          )}
          
          {/* Professional Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <h3 className="font-bold">{exp.title}</h3>
                <div className="text-blue-700 font-medium">{exp.company}</div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{exp.location}</span>
                  <span>{exp.from} - {exp.to}</span>
                </div>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-blue-700 font-medium">{edu.school}</div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{edu.location}</span>
                  <span>{edu.from} - {edu.to}</span>
                </div>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
