import { toPDF } from 'react-to-pdf';
import { getErrorMessage } from './errorHandler';

// Add export success callback parameter
export default async function exportToPDF(cvData, templateId, onSuccess = null) {
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
    return { success: false };
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
    },
    // Set to use blob instead of file system directly
    method: 'save-pdf',
  };

  try {
    // Create a blob first instead of writing to file directly
    const pdfBlob = await toPDF(element, {
      ...options,
      method: 'blob'
    });
    
    // Create a download link and trigger it
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(pdfBlob);
    downloadLink.download = options.filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(downloadLink.href), 100);
    
    // Call success callback if provided
    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess('PDF');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error generating PDF:', error);
    
    // Use our error handler to get a appropriate message
    const errorCode = error.code || 'DEFAULT';
    const message = getErrorMessage(errorCode, language);
    
    alert(message || generalError);
    return { success: false, error };
  }
}
