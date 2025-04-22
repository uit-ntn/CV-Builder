export default function MarketingTemplate({ data }) {
  // Ensure data has the expected structure
  const personalData = data?.personal || {};
  const campaigns = data?.campaigns || [];
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header / Personal Info with coral highlight color */}
      <header className="border-b-4 border-coral-500 pb-6 mb-6" style={{ borderColor: '#FF7F50' }}>
        <div className="flex flex-wrap">
          {/* Left side: Avatar and name */}
          <div className="w-full md:w-7/12 flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            {personalData.avatar && (
              <div className="mr-6">
                <img 
                  src={personalData.avatar} 
                  alt={personalData.name || "Profile"}
                  className="w-28 h-28 rounded-full object-cover border-4 shadow-lg"
                  style={{ borderColor: '#FFEBE5' }}
                />
              </div>
            )}
            
            {/* Name and title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{personalData.name || ""}</h1>
              <p className="text-xl font-semibold mt-1" style={{ color: '#FF7F50' }}>{personalData.title || ""}</p>
            </div>
          </div>
          
          {/* Right side: Contact info in vertical layout */}
          <div className="w-full md:w-5/12 flex flex-col justify-center space-y-2">
            <div className="flex items-center">
              <span className="mr-3 w-5 text-center" style={{ color: '#FF7F50' }}>📧</span>
              <span>{personalData.email || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 w-5 text-center" style={{ color: '#FF7F50' }}>📱</span>
              <span>{personalData.phone || ""}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 w-5 text-center" style={{ color: '#FF7F50' }}>📍</span>
              <span>{personalData.address || ""}</span>
            </div>
            {personalData.linkedin && (
              <div className="flex items-center">
                <span className="mr-3 w-5 text-center" style={{ color: '#FF7F50' }}>👔</span>
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
            <h2 className="text-xl font-bold border-l-4 pl-2 mb-3" style={{ borderColor: '#FF7F50' }}>
              Professional Profile
            </h2>
            <p className="text-sm">{personalData.about || ""}</p>
          </section>

          {/* Marketing Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 pl-2 mb-3" style={{ borderColor: '#FF7F50' }}>
              Marketing Skills
            </h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                  <h3 className="font-semibold" style={{ color: '#FF7F50' }}>{skill.name}</h3>
                  <p className="text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media Platforms */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 pl-2 mb-3" style={{ borderColor: '#FF7F50' }}>
              Social Media
            </h2>
            <div className="flex flex-wrap gap-2 mt-1">
              {data.socialPlatforms ? data.socialPlatforms.split(',').map((platform, i) => (
                <span key={i} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#FFEBE5', color: '#FF7F50' }}>
                  {platform.trim()}
                </span>
              )) : (
                <>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#FFEBE5', color: '#FF7F50' }}>Instagram</span>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#FFEBE5', color: '#FF7F50' }}>Facebook</span>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#FFEBE5', color: '#FF7F50' }}>LinkedIn</span>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#FFEBE5', color: '#FF7F50' }}>Twitter</span>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: '#FFEBE5', color: '#FF7F50' }}>TikTok</span>
                </>
              )}
            </div>
          </section>
          
          {/* Marketing Tools */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 pl-2 mb-3" style={{ borderColor: '#FF7F50' }}>
              Tools
            </h2>
            <div className="space-y-3">
              {data.marketingTools ? (
                <p className="text-sm">{data.marketingTools}</p>
              ) : (
                <p className="text-sm">Google Analytics, Mailchimp, Hootsuite, SEMrush, Adobe Creative Suite, Canva, HubSpot, WordPress, Ahrefs, Buffer</p>
              )}
            </div>
          </section>
        </div>
        
        {/* Middle column */}
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          {/* Professional Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 pl-2 mb-3" style={{ borderColor: '#FF7F50' }}>
              Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <h3 className="font-bold">{exp.title}</h3>
                <div className="font-medium" style={{ color: '#FF7F50' }}>{exp.company}</div>
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
            <h2 className="text-xl font-bold border-l-4 pl-2 mb-3" style={{ borderColor: '#FF7F50' }}>
              Education
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="font-medium" style={{ color: '#FF7F50' }}>{edu.school}</div>
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>{edu.location}</span>
                  <span>{edu.from} - {edu.to}</span>
                </div>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </section>
        </div>
        
        {/* Right column */}
        <div className="w-full md:w-1/3 px-4">
          {/* Marketing Campaigns - Specific to Marketing */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 pl-2 mb-3" style={{ borderColor: '#FF7F50' }}>
              Key Campaigns
            </h2>
            <div className="space-y-4">
              {campaigns.length > 0 ? (
                campaigns.map((campaign) => (
                  <div key={campaign.id} className="border-l-2 border-gray-300 pl-3 mb-3">
                    <h3 className="font-semibold">{campaign.title}</h3>
                    <div className="text-sm flex justify-between">
                      <span style={{ color: '#FF7F50' }}>{campaign.client}</span>
                      <span className="text-gray-600">{campaign.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{campaign.description}</p>
                    <p className="text-sm font-medium mt-1">
                      Result: <span style={{ color: '#FF7F50' }}>{campaign.result}</span>
                    </p>
                  </div>
                ))
              ) : (
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-300 pl-3 mb-3">
                    <h3 className="font-semibold">Holiday Season Social Campaign</h3>
                    <div className="text-sm flex justify-between">
                      <span style={{ color: '#FF7F50' }}>Fashion Brand X</span>
                      <span className="text-gray-600">Q4 2022</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Designed and executed an integrated social media campaign across Instagram and Facebook.</p>
                    <p className="text-sm font-medium mt-1">
                      Result: <span style={{ color: '#FF7F50' }}>47% increase in engagement, 28% sales growth</span>
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-gray-300 pl-3 mb-3">
                    <h3 className="font-semibold">Product Launch Email Campaign</h3>
                    <div className="text-sm flex justify-between">
                      <span style={{ color: '#FF7F50' }}>Tech Company Y</span>
                      <span className="text-gray-600">Q2 2023</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Created a 4-email sequence for new product launch with segmented targeting.</p>
                    <p className="text-sm font-medium mt-1">
                      Result: <span style={{ color: '#FF7F50' }}>32% open rate, 22% CTR, $250K in revenue</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
          
          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-l-4 pl-2 mb-3" style={{ borderColor: '#FF7F50' }}>
              Certifications
            </h2>
            {data.certifications && data.certifications.length > 0 ? (
              <div className="space-y-3">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="border-l-2 border-gray-300 pl-3 mb-3">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="border-l-2 border-gray-300 pl-3 mb-3">
                  <h3 className="font-semibold">Google Analytics Certification</h3>
                  <p className="text-sm text-gray-600">Google • 2023</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3 mb-3">
                  <h3 className="font-semibold">Digital Marketing Specialist</h3>
                  <p className="text-sm text-gray-600">HubSpot Academy • 2022</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
