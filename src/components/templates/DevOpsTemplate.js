export default function DevOpsTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  const projects = data?.devOpsProjects || [];
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header / Personal Info */}
      <header className="border-b-4 border-teal-600 pb-6 mb-6">
        <div className="flex flex-wrap">
          {/* Left side: Avatar and name */}
          <div className="w-full md:w-7/12 flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            {personalData.avatar && (
              <div className="mr-6">
                <img 
                  src={personalData.avatar} 
                  alt={personalData.name || "Profile"}
                  className="w-28 h-28 rounded-full object-cover border-4 border-teal-100 shadow-lg"
                />
              </div>
            )}
            
            {/* Name and title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{personalData.name || ""}</h1>
              <p className="text-xl font-semibold text-teal-600 mt-1">{personalData.title || ""}</p>
            </div>
          </div>
          
          {/* Right side: Contact info in vertical layout */}
          <div className="w-full md:w-5/12 flex flex-col justify-center space-y-2">
            <div className="flex items-center">
              <span className="mr-3 text-teal-600 w-5 text-center">📧</span>
              <span>{personalData.email || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-teal-600 w-5 text-center">📱</span>
              <span>{personalData.phone || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-teal-600 w-5 text-center">📍</span>
              <span>{personalData.address || ""}</span>
            </div>
            {personalData.github && (
              <div className="flex items-center">
                <span className="mr-3 text-teal-600 w-5 text-center">💻</span>
                <span>{personalData.github}</span>
              </div>
            )}
            {personalData.linkedin && (
              <div className="flex items-center">
                <span className="mr-3 text-teal-600 w-5 text-center">👔</span>
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
            <h2 className="text-xl font-bold border-l-4 border-teal-600 pl-2 mb-3">Professional Profile</h2>
            <p className="text-sm">{personalData.about || ""}</p>
          </section>

          {/* DevOps Engineer Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-teal-600 pl-2 mb-3">Technical Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                  <h3 className="font-semibold text-teal-700">{skill.name}</h3>
                  <p className="text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DevOps Tools & Technologies */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-teal-600 pl-2 mb-3">DevOps Technologies</h2>
            <div className="space-y-3">
              <div className="mb-3">
                <h3 className="font-semibold text-teal-600 text-sm uppercase tracking-wide">CI/CD Pipelines</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.cicdPipelines?.split(',').map((tool, i) => (
                    <span key={i} className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">
                      {tool.trim()}
                    </span>
                  )) || (
                    <span className="text-gray-600 text-sm">Jenkins, GitHub Actions, GitLab CI/CD</span>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-semibold text-teal-600 text-sm uppercase tracking-wide">Containerization</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.containerization?.split(',').map((tool, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tool.trim()}
                    </span>
                  )) || (
                    <span className="text-gray-600 text-sm">Docker, Kubernetes, OpenShift</span>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-semibold text-teal-600 text-sm uppercase tracking-wide">Infrastructure Tools</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.infrastructureTools?.split(',').map((tool, i) => (
                    <span key={i} className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">
                      {tool.trim()}
                    </span>
                  )) || (
                    <span className="text-gray-600 text-sm">Terraform, Ansible, CloudFormation</span>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="font-semibold text-teal-600 text-sm uppercase tracking-wide">Monitoring</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.monitoringTools?.split(',').map((tool, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tool.trim()}
                    </span>
                  )) || (
                    <span className="text-gray-600 text-sm">Prometheus, Grafana, ELK Stack</span>
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
            <h2 className="text-xl font-bold border-l-4 border-teal-600 pl-2 mb-3">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <h3 className="font-bold">{exp.title}</h3>
                <div className="text-teal-700 font-medium">{exp.company}</div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{exp.location}</span>
                  <span>{exp.from} - {exp.to}</span>
                </div>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </section>
          
          {/* DevOps Projects */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-teal-600 pl-2 mb-3">Key Projects</h2>
            <div className="space-y-4">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div key={project.id} className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-xs text-teal-600">{project.technologies}</p>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  </div>
                ))
              ) : (
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">CI/CD Pipeline Modernization</h3>
                    <p className="text-xs text-teal-600">Jenkins, Docker, Kubernetes</p>
                    <p className="text-sm text-gray-600 mt-1">Redesigned deployment pipeline reducing deployment time from hours to minutes.</p>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <h3 className="font-semibold">Infrastructure as Code Implementation</h3>
                    <p className="text-xs text-teal-600">Terraform, AWS, GitOps</p>
                    <p className="text-sm text-gray-600 mt-1">Migrated manual infrastructure provisioning to IaC, achieving 100% environment consistency.</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
        
        {/* Right column */}
        <div className="w-full md:w-1/3 px-4">
          {/* Automation - Specific to DevOps */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-teal-600 pl-2 mb-3">Automation Expertise</h2>
            <div className="space-y-3">
              {data.automationScripts ? (
                <p className="text-sm">{data.automationScripts}</p>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm">• Created automation scripts that reduced manual operations by 75%</p>
                  <p className="text-sm">• Implemented infrastructure as code practices across multiple cloud platforms</p>
                  <p className="text-sm">• Developed self-healing systems using advanced monitoring and alerting</p>
                  <p className="text-sm">• Automated security compliance checks in the CI/CD pipeline</p>
                </div>
              )}
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 border-teal-600 pl-2 mb-3">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-teal-700 font-medium">{edu.school}</div>
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
            <h2 className="text-xl font-bold border-l-4 border-teal-600 pl-2 mb-3">Certifications</h2>
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
                  <h3 className="font-semibold">AWS Certified DevOps Engineer</h3>
                  <p className="text-sm text-gray-600">Amazon Web Services • 2023</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h3 className="font-semibold">Certified Kubernetes Administrator</h3>
                  <p className="text-sm text-gray-600">Cloud Native Computing Foundation • 2022</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <h3 className="font-semibold">HashiCorp Certified: Terraform Associate</h3>
                  <p className="text-sm text-gray-600">HashiCorp • 2021</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
