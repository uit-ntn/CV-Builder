import { getErrorMessage } from './errorHandler';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

// Add success callback parameter
export default async function exportToWord(cvData, templateId, onSuccess = null) {
  const element = document.getElementById('cv-preview');
  
  // Get current language for error messages
  const language = localStorage.getItem('cv-language') || 'vi';
  const errorMessage = language === 'vi' 
    ? 'Không thể tạo file Word. Vui lòng thử lại.'
    : 'Could not create Word document. Please try again.';
  
  if (!element) {
    alert(errorMessage);
    return { success: false };
  }

  try {
    // Capture the CV as an image
    const canvas = await html2canvas(element, { 
      scale: 2,
      useCORS: true,
      logging: false
    });
    
    // Convert canvas to blob
    const blob = await new Promise(resolve => {
      canvas.toBlob(resolve, 'image/png');
    });
    
    // Create simple HTML with the image embedded
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${cvData.personal.name} - CV</title>
      </head>
      <body>
        <div style="width: 100%; text-align: center;">
          <img src="${URL.createObjectURL(blob)}" style="max-width: 100%; height: auto;" />
        </div>
      </body>
      </html>
    `;
    
    // Convert to Blob and download
    const wordBlob = new Blob([htmlContent], {type: 'application/msword'});
    const filename = `${cvData.personal.name.replace(/\s+/g, '-').toLowerCase()}-cv.doc`;
    
    saveAs(wordBlob, filename);
    
    // Call success callback if provided
    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess('Word');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error generating Word document:', error);
    
    // Use our error handler to get an appropriate message
    const errorCode = error.code || 'DEFAULT';
    const message = getErrorMessage(errorCode, language);
    
    alert(message || errorMessage);
    return { success: false, error };
  }
}
