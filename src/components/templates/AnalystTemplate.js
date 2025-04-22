export default function AnalystTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  const methodologies = data?.methodologies || [];
  const achievements = data?.achievements || [];
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header / Personal Info */}
      <header className="border-b-2 border-indigo-600 pb-6 mb-6">
        <div className="flex flex-wrap">
          {/* Left side: Avatar and name */}
          <div className="w-full md:w-7/12 flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            {personalData.avatar && (
              <div className="mr-6">
                <img 
                  src={personalData.avatar} 
                  alt={personalData.name || "Profile"}
                  className="w-28 h-28 rounded-full object-cover border-4 border-indigo-100 shadow-lg"
                />
              </div>
            )}
            
            {/* Name and title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{personalData.name || ""}</h1>
              <p className="text-xl font-semibold text-indigo-600 mt-1">{personalData.title || ""}</p>
            </div>
          </div>
          
          {/* Right side: Contact info in vertical layout */}
          <div className="w-full md:w-5/12 flex flex-col justify-center space-y-2">
            <div className="flex items-center">
              <span className="mr-3 text-indigo-600 w-5 text-center">📧</span>
              <span>{personalData.email || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-indigo-600 w-5 text-center">📱</span>
              <span>{personalData.phone || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-indigo-600 w-5 text-center">📍</span>
              <span>{personalData.address || ""}</span>
            </div>
            {personalData.linkedin && (
              <div className="flex items-center">
                <span className="mr-3 text-indigo-600 w-5 text-center">👔</span>
                <span>{personalData.linkedin}</span>
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
            <h2 className="text-xl font-bold border-l-4 border-indigo-600 pl-2 mb-3">Professional Profile</h2>
            <p className="text-sm">{personalData.about || ""}</p>
          </section>

          {/* Business Skills - Specific to BA */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-indigo-600 pl-2 mb-3">Business Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                  <h3 className="font-semibold text-indigo-700">{skill.name}</h3>
                  <p className="text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools Used - Specific to BA */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-indigo-600 pl-2 mb-3">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {data.toolsUsed?.map((tool, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-gray-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              )) || (
                <span className="text-gray-500">SQL, Excel, PowerBI, Tableau, JIRA</span>
              )}
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-indigo-600 pl-2 mb-3">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-indigo-700 font-medium">{edu.school}</div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{edu.location}</span>
                  <span>{edu.from} - {edu.to}</span>
                </div>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </section>
        </div>
        
        {/* Middle column */}
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          {/* Professional Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-indigo-600 pl-2 mb-3">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <h3 className="font-bold">{exp.title}</h3>
                <div className="text-indigo-700 font-medium">{exp.company}</div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{exp.location}</span>
                  <span>{exp.from} - {exp.to}</span>
                </div>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </section>
          
          {/* Domain Expertise - Specific to BA */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-indigo-600 pl-2 mb-3">Domain Expertise</h2>
            <div className="space-y-2">
              {data.domains?.map((domain, index) => (
                <div key={index} className="border-l-2 border-gray-300 pl-3">
                  <h3 className="font-semibold">{domain.area}</h3>
                  <p className="text-sm text-gray-600">{domain.description}</p>
                </div>
              )) || (
                <div className="space-y-2">
                  <div className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">Finance & Banking</h3>
                    <p className="text-sm text-gray-600">Experience with financial reporting systems and banking processes</p>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">Healthcare</h3>
                    <p className="text-sm text-gray-600">Knowledge of healthcare systems and patient data management</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
        
        {/* Right column */}
        <div className="w-full md:w-1/3 px-4">
          {/* Methodologies - Specific to BA */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-indigo-600 pl-2 mb-3">Methodologies</h2>
            <div className="space-y-3">
              {methodologies.length > 0 ? (
                methodologies.map((method) => (
                  <div key={method.id} className="border-l-2 border-gray-300 pl-3 mb-3">
                    <h3 className="font-semibold">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                ))
              ) : (
                <div className="space-y-3">
                  <div className="border-l-2 border-gray-300 pl-3 mb-3">
                    <h3 className="font-semibold">Agile/Scrum</h3>
                    <p className="text-sm text-gray-600">Experience working in agile teams and facilitating user story creation</p>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3 mb-3">
                    <h3 className="font-semibold">Business Process Modeling</h3>
                    <p className="text-sm text-gray-600">BPMN modeling and process optimization</p>
                  </div>
                </div>
              )}
            </div>
          </section>
          
          {/* Key Achievements - Specific to BA */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-indigo-600 pl-2 mb-3">Key Achievements</h2>
            <div className="space-y-3">
              {achievements.length > 0 ? (
                achievements.map((achievement) => (
                  <div key={achievement.id} className="border-l-2 border-gray-300 pl-3 mb-3">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                ))
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Reduced reporting time by 35% through process optimization</li>
                  <li>Led requirements gathering for ERP implementation affecting 500+ users</li>
                  <li>Implemented data visualization solution that improved decision-making</li>
                </ul>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
