export default function ProfessionalTemplate({ data }) {
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center justify-between border-b-4 border-gray-800 pb-4">
            <div className="flex items-center">
              {/* Avatar */}
              {data.personal.avatar && (
                <div className="mr-6">
                  <img 
                    src={data.personal.avatar} 
                    alt={data.personal.name}
                    className="w-24 h-24 object-cover border-2 border-gray-300"
                  />
                </div>
              )}
              
              {/* Name and title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{data.personal.name}</h1>
                <p className="text-xl text-gray-700 mt-1">{data.personal.title}</p>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="mt-4 lg:mt-0 text-right flex-shrink-0">
              <p className="text-gray-700">{data.personal.email}</p>
              <p className="text-gray-700">{data.personal.phone}</p>
              <p className="text-gray-700">{data.personal.address}</p>
            </div>
          </div>
        </header>

        {/* Two-column layout for content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - About and Experience */}
          <div className="md:w-2/3">
            {/* About Me */}
            <section className="mb-6">
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3 text-gray-800">Professional Summary</h2>
              <p className="text-gray-700">{data.personal.about}</p>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4 text-gray-800">Professional Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800">{exp.title}</h3>
                    <span className="text-gray-600 text-sm">{exp.from} - {exp.to}</span>
                  </div>
                  <p className="text-gray-700 font-semibold">{exp.company}, {exp.location}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Right column - Education and Skills */}
          <div className="md:w-1/3">
            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3 text-gray-800">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.school}, {edu.location}</p>
                  <p className="text-gray-600 text-sm">{edu.from} - {edu.to}</p>
                  <p className="text-gray-600 mt-1">{edu.description}</p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3 text-gray-800">Skills</h2>
              <div>
                {data.skills.map((skill) => (
                  <div key={skill.id} className="mb-3">
                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                    <p className="text-gray-600">{skill.description}</p>
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
