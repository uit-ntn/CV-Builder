import SimpleTemplate from './templates/SimpleTemplate'
import ProfessionalTemplate from './templates/ProfessionalTemplate'
import ModernTemplate from './templates/ModernTemplate'
import WebDevTemplate from './templates/WebDevTemplate'
import CloudTemplate from './templates/CloudTemplate'
import AnalystTemplate from './templates/AnalystTemplate'
import DataEngTemplate from './templates/DataEngTemplate'
import DevOpsTemplate from './templates/DevOpsTemplate'
import MarketingTemplate from './templates/MarketingTemplate'

export default function CVPreview({ template, data }) {
  // Choose template component based on selected template
  switch(template) {
    case 'professional':
      return <ProfessionalTemplate data={data} />
    case 'modern':
      return <ModernTemplate data={data} />
    case 'webdev':
      return <WebDevTemplate data={data} />
    case 'cloud':
      return <CloudTemplate data={data} />
    case 'analyst':
      return <AnalystTemplate data={data} />
    case 'dataeng':
      return <DataEngTemplate data={data} />
    case 'devops':
      return <DevOpsTemplate data={data} />
    case 'marketing':
      return <MarketingTemplate data={data} />
    case 'simple':
    default:
      return <SimpleTemplate data={data} />
  }
}
