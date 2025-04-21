export default function SimpleTemplate({ data }) {
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header / Personal Info */}
        <header className="border-b-2 border-gray-300 pb-4 mb-6">
          <div className="flex flex-wrap items-center">
            {/* Avatar */}
            {data.personal.avatar && (
              <div className="mr-6 mb-4 md:mb-0">
                <img 
                  src={data.personal.avatar} 
                  alt={data.personal.name}
                  className="w-24 h-24 rounded-full object-cover border border-gray-200 shadow"
                />
              </div>
            )}
            
            {/* Name and title */}
            <div className={`${data.personal.avatar ? 'flex-1' : 'w-full'}`}>
              <h1 className="text-2xl font-bold text-gray-800">{data.personal.name}</h1>
              <p className="text-lg text-gray-600 mt-1">{data.personal.title}</p>
              
              {/* Contact info */}
              <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
                <div>{data.personal.email}</div>
                <div>•</div>
                <div>{data.personal.phone}</div>
                <div>•</div>
                <div>{data.personal.address}</div>
              </div>
            </div>
          </div>
        </header>

        {/* About Me */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-gray-700">About Me</h2>
          <p className="text-gray-600">{data.personal.about}</p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-gray-700">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.from} - {exp.to}</span>
              </div>
              <p className="text-gray-700">{exp.company}, {exp.location}</p>
              <p className="text-gray-600 mt-1">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-gray-700">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{edu.degree}</h3>
                <span className="text-sm text-gray-500">{edu.from} - {edu.to}</span>
              </div>
              <p className="text-gray-700">{edu.school}, {edu.location}</p>
              <p className="text-gray-600 mt-1">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-gray-700">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.skills.map((skill) => (
              <div key={skill.id} className="mb-2">
                <h3 className="font-semibold text-gray-700">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
