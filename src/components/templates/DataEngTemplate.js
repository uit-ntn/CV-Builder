export default function DataEngTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  const projects = data?.dataProjects || [];
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header / Personal Info */}
      <header className="border-b-4 border-purple-600 pb-6 mb-6">
        <div className="flex flex-wrap">
          {/* Left side: Avatar and name */}
          <div className="w-full md:w-7/12 flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            {personalData.avatar && (
              <div className="mr-6">
                <img 
                  src={personalData.avatar} 
                  alt={personalData.name || "Profile"}
                  className="w-28 h-28 rounded-full object-cover border-4 border-purple-100 shadow-lg"
                />
              </div>
            )}
            
            {/* Name and title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{personalData.name || ""}</h1>
              <p className="text-xl font-semibold text-purple-600 mt-1">{personalData.title || ""}</p>
            </div>
          </div>
          
          {/* Right side: Contact info in vertical layout */}
          <div className="w-full md:w-5/12 flex flex-col justify-center space-y-2">
            <div className="flex items-center">
              <span className="mr-3 text-purple-600 w-5 text-center">📧</span>
              <span>{personalData.email || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-purple-600 w-5 text-center">📱</span>
              <span>{personalData.phone || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-purple-600 w-5 text-center">📍</span>
              <span>{personalData.address || ""}</span>
            </div>
            {personalData.github && (
              <div className="flex items-center">
                <span className="mr-3 text-purple-600 w-5 text-center">💻</span>
                <span>{personalData.github}</span>
              </div>
            )}
            {personalData.linkedin && (
              <div className="flex items-center">
                <span className="mr-3 text-purple-600 w-5 text-center">👔</span>
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
            <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-2 mb-3">Professional Profile</h2>
            <p className="text-sm">{personalData.about || ""}</p>
          </section>

          {/* Data Engineer Skills - Specific to Data Engineers */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-2 mb-3">Technical Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                  <h3 className="font-semibold text-purple-700">{skill.name}</h3>
                  <p className="text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data Processing Tools */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-2 mb-3">Data Technologies</h2>
            <div className="space-y-3">
              <div className="mb-3">
                <h3 className="font-semibold text-purple-600 text-sm uppercase tracking-wide">Programming Languages</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.dataLanguages?.split(',').map((lang, i) => (
                    <span key={i} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                      {lang.trim()}
                    </span>
                  )) || (
                    <span className="text-gray-600 text-sm">Python, Scala, SQL, R</span>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-semibold text-purple-600 text-sm uppercase tracking-wide">Databases</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.databases?.split(',').map((db, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {db.trim()}
                    </span>
                  )) || (
                    <span className="text-gray-600 text-sm">PostgreSQL, MongoDB, Cassandra</span>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-semibold text-purple-600 text-sm uppercase tracking-wide">Big Data</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.bigDataTech?.split(',').map((tech, i) => (
                    <span key={i} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                      {tech.trim()}
                    </span>
                  )) || (
                    <span className="text-gray-600 text-sm">Hadoop, Spark, Kafka</span>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Middle column */}
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          {/* Professional Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-2 mb-3">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <h3 className="font-bold">{exp.title}</h3>
                <div className="text-purple-700 font-medium">{exp.company}</div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{exp.location}</span>
                  <span>{exp.from} - {exp.to}</span>
                </div>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </section>
          
          {/* Data Projects - Specific to Data Engineers */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-2 mb-3">Data Projects</h2>
            <div className="space-y-4">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div key={project.id} className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-xs text-purple-600">{project.technologies}</p>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  </div>
                ))
              ) : (
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">Data Pipeline Optimization</h3>
                    <p className="text-xs text-purple-600">Apache Airflow, Spark, S3</p>
                    <p className="text-sm text-gray-600 mt-1">Redesigned data pipelines that reduced processing time by 40% and improved data quality.</p>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">Customer Analytics Platform</h3>
                    <p className="text-xs text-purple-600">Python, PostgreSQL, Tableau</p>
                    <p className="text-sm text-gray-600 mt-1">Built an end-to-end analytics solution to track customer behavior and business KPIs.</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
        
        {/* Right column */}
        <div className="w-full md:w-1/3 px-4">
          {/* Data Pipelines - Specific to Data Engineer */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-2 mb-3">Data Pipeline Experience</h2>
            <div className="space-y-3">
              {data.dataPipelines ? (
                <p className="text-sm">{data.dataPipelines}</p>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm">• Designed and implemented robust ETL pipelines processing over 10TB of data daily</p>
                  <p className="text-sm">• Experience with batch and stream processing using Apache Kafka and Apache Spark</p>
                  <p className="text-sm">• Created data quality checks and monitoring systems for data validation</p>
                  <p className="text-sm">• Implemented data governance principles and documentation</p>
                </div>
              )}
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-2 mb-3">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-purple-700 font-medium">{edu.school}</div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{edu.location}</span>
                  <span>{edu.from} - {edu.to}</span>
                </div>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </section>
          
          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-2 mb-3">Certifications</h2>
            {data.certifications && data.certifications.length > 0 ? (
              <div className="space-y-3">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="border-l-2 border-gray-300 pl-3">
                  <h3 className="font-semibold">AWS Data Analytics Specialty</h3>
                  <p className="text-sm text-gray-600">Amazon Web Services • 2023</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h3 className="font-semibold">Databricks Certified Developer</h3>
                  <p className="text-sm text-gray-600">Databricks • 2022</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
