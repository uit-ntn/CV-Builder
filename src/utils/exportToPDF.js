import { toPDF } from 'react-to-pdf';

export default async function exportToPDF(cvData, templateId) {
  const element = document.getElementById('cv-preview');
  
  // Get current language for error messages
  const language = localStorage.getItem('cv-language') || 'vi';
  const errorMessage = language === 'vi' 
    ? 'Không thể tạo PDF. Vui lòng thử lại.'
    : 'Could not create PDF. Please try again.';
  
  const generalError = language === 'vi'
    ? 'Có lỗi khi tạo PDF. Vui lòng thử lại sau.'
    : 'Error generating PDF. Please try again later.';

  if (!element) {
    alert(errorMessage);
    return;
  }

  const options = {
    filename: `${cvData.personal.name.replace(/\s+/g, '-').toLowerCase()}-cv.pdf`,
    page: {
      format: 'A4',
      orientation: 'portrait',
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      }
    },
    overrides: {
      // Override PDF output to ensure proper styling
      pdf: {
        compress: true,
        userUnit: 1.0,
      },
      canvas: {
        useCORS: true,
      }
    }
  };

  try {
    await toPDF(element, options);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert(generalError);
  }
}
