import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLink } from 'react-icons/fa'

export default function WebDevTemplate({ data }) {
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header / Personal Info */}
      <header className="border-b-4 border-blue-600 pb-4">
        <h1 className="text-3xl font-bold text-blue-700">{data.personal.name}</h1>
        <p className="text-xl font-semibold text-blue-600 mt-1">{data.personal.title}</p>
        
        {/* Contact info with dev icons */}
        <div className="flex flex-wrap gap-4 mt-3 text-sm">
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-blue-600" />
            <span>{data.personal.email}</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2 text-blue-600" />
            <span>{data.personal.phone}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-600" />
            <span>{data.personal.address}</span>
          </div>
          {data.personal.github && (
            <div className="flex items-center">
              <FaGithub className="mr-2 text-blue-600" />
              <span>{data.personal.github}</span>
            </div>
          )}
          {data.personal.portfolio && (
            <div className="flex items-center">
              <FaLink className="mr-2 text-blue-600" />
              <span>{data.personal.portfolio}</span>
            </div>
          )}
        </div>
      </header>

      {/* About Me */}
      <section className="py-3">
        <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-2">About Me</h2>
        <p className="text-sm">{data.personal.about}</p>
      </section>

      {/* Tech Skills */}
      <section className="py-3">
        <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {data.skills.map((skill) => (
            <div key={skill.id} className="mb-2">
              <h3 className="font-semibold text-blue-700">{skill.name}</h3>
              <p className="text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-3">
        <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Experience</h2>
        {data.experience.map((exp) => (
          <div key={exp.id} className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">{exp.title}</h3>
              <span className="text-sm text-gray-600">{exp.from} - {exp.to}</span>
            </div>
            <div className="text-blue-700 font-medium">{exp.company}, {exp.location}</div>
            <p className="text-sm mt-1">{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="py-3">
        <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-2 mb-3">Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} className="mb-3">
            <div className="flex justify-between">
              <h3 className="font-bold">{edu.degree}</h3>
              <span className="text-sm text-gray-600">{edu.from} - {edu.to}</span>
            </div>
            <div className="text-blue-700 font-medium">{edu.school}, {edu.location}</div>
            <p className="text-sm mt-1">{edu.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
