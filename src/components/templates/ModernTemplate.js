export default function ModernTemplate({ data }) {
  const accentColor = '#6366f1'; // Indigo color
  
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end mb-8" style={{ color: accentColor }}>
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight">{data.personal.name}</h1>
            <p className="text-xl mt-2 font-light">{data.personal.title}</p>
          </div>
          
          {/* Avatar */}
          {data.personal.avatar && (
            <div className="mt-4 md:mt-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4" style={{ borderColor: accentColor }}>
                <img 
                  src={data.personal.avatar} 
                  alt={data.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </header>

        {/* Contact info */}
        <div className="mb-8 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span style={{ color: accentColor }}>✉</span>
            <span>{data.personal.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <span style={{ color: accentColor }}>☎</span>
            <span>{data.personal.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <span style={{ color: accentColor }}>⌂</span>
            <span>{data.personal.address}</span>
          </div>
          {data.personal.portfolio && (
            <div className="flex items-center gap-1">
              <span style={{ color: accentColor }}>🔗</span>
              <span>{data.personal.portfolio}</span>
            </div>
          )}
        </div>

        {/* About */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor }}>
            About Me
          </h2>
          <p className="leading-relaxed">{data.personal.about}</p>
        </section>

        {/* Two column layout for content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main column */}
          <div className="md:w-2/3">
            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor }}>
                Experience
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-xl">{exp.title}</h3>
                    <span className="text-sm text-gray-500">{exp.from} - {exp.to}</span>
                  </div>
                  <p className="font-medium" style={{ color: accentColor }}>{exp.company}, {exp.location}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3">
            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor }}>
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="font-medium" style={{ color: accentColor }}>{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.from} - {edu.to}</p>
                  <p className="mt-1">{edu.description}</p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor }}>
                Skills
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id}>
                    <h3 className="font-bold">{skill.name}</h3>
                    <p className="text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
