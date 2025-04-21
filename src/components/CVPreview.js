import SimpleTemplate from './templates/SimpleTemplate'
import ProfessionalTemplate from './templates/ProfessionalTemplate'
import ModernTemplate from './templates/ModernTemplate'

export default function CVPreview({ template, data }) {
  // Choose template component based on selected template
  switch(template) {
    case 'professional':
      return <ProfessionalTemplate data={data} />
    case 'modern':
      return <ModernTemplate data={data} />
    case 'simple':
    default:
      return <SimpleTemplate data={data} />
  }
}
