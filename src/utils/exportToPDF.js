import { toPDF } from 'react-to-pdf';

export default async function exportToPDF(cvData, templateId) {
  const element = document.getElementById('cv-preview');

  if (!element) {
    alert('Không thể tạo PDF. Vui lòng thử lại.');
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
    alert('Có lỗi khi tạo PDF. Vui lòng thử lại sau.');
  }
}
