import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCloud, FaServer, FaCertificate } from 'react-icons/fa'

export default function CloudTemplate({ data }) {
  return (
    <div id="cv-preview" className="w-full h-full bg-white text-gray-800 font-sans p-6">
      {/* Header with cloud theme */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">{data.personal.name}</h1>
        <p className="text-xl mt-1">{data.personal.title}</p>
        
        {/* Contact info with cloud-related icons */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>{data.personal.email}</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>{data.personal.phone}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>{data.personal.address}</span>
          </div>
          {data.personal.linkedin && (
            <div className="flex items-center">
              <FaCloud className="mr-2" />
              <span>{data.personal.linkedin}</span>
            </div>
          )}
        </div>
      </header>

      <div className="p-6 border-l border-r border-gray-200">
        {/* About Me */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            <FaServer className="inline-block mr-2" /> Professional Summary
          </h2>
          <p className="text-sm">{data.personal.about}</p>
        </section>

        {/* Technical Skills - Cloud Focused */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            <FaCloud className="inline-block mr-2" /> Cloud & Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {data.skills.map((skill) => (
              <div key={skill.id} className="border-l-2 border-gray-400 pl-3 mb-2">
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section (special for cloud engineers) */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            <FaCertificate className="inline-block mr-2" /> Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.certifications ? (
              data.certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-gray-400 pl-3">
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
                  <p className="text-sm text-gray-600">Date: {cert.date}</p>
                </div>
              ))
            ) : (
              <p className="text-sm italic">Add your cloud certifications here</p>
            )}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            Professional Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">{exp.title}</h3>
                <span className="text-sm text-gray-600">{exp.from} - {exp.to}</span>
              </div>
              <div className="text-gray-700 font-medium">{exp.company}, {exp.location}</div>
              <p className="text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-3">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-bold">{edu.degree}</h3>
                <span className="text-sm text-gray-600">{edu.from} - {edu.to}</span>
              </div>
              <div className="text-gray-700 font-medium">{edu.school}, {edu.location}</div>
              <p className="text-sm mt-1">{edu.description}</p>
            </div>
          ))}
        </section>
      </div>
      
      <footer className="bg-gray-800 text-white p-3 text-center text-sm rounded-b-lg">
        Cloud Engineer with experience in scalable infrastructure and DevOps practices
      </footer>
    </div>
  )
}
