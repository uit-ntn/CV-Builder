import html2canvas from 'html2canvas';

export default async function exportToWord(cvData, templateId, onSuccess = null) {
  const element = document.getElementById('cv-preview');
  
  if (!element) {
    alert('Could not find CV preview. Please try again.');
    return { success: false };
  }
  
  try {
    // Capture the CV as an image
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false
    });
    
    // Convert canvas to Blob
    const blob = await new Promise(resolve => {
      canvas.toBlob(resolve, 'image/png', 0.95);
    });
    
    // Create object URL
    const url = URL.createObjectURL(blob);
    
    // Create HTML content with embedded image
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${cvData.personal?.name || 'CV'}</title>
        <style>
          body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
          img { max-width: 100%; height: auto; }
        </style>
      </head>
      <body>
        <div style="width: 100%;">
          <img src="${url}" style="width: 100%; max-width: 100%;" />
        </div>
      </body>
      </html>
    `;
    
    // Create a Blob with the HTML content
    const htmlBlob = new Blob([htmlContent], { type: 'application/msword' });
    
    // Create a link to download the file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(htmlBlob);
    link.download = `${cvData.personal?.name?.replace(/\s+/g, '-').toLowerCase() || 'cv'}.doc`;
    
    // Append to the document, click it and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up URLs
    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      URL.revokeObjectURL(url);
    }, 100);
    
    // Call success callback
    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess('Word');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error generating Word document:', error);
    alert('An error occurred while generating the Word document. Please try again.');
    return { success: false, error };
  }
}
