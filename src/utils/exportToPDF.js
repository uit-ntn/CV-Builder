import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default async function exportToPDF(cvData, templateId, onSuccess = null) {
  // Get the element that contains the CV preview
  const element = document.getElementById('cv-preview');
  
  if (!element) {
    alert('Could not find CV preview. Please try again.');
    return { success: false };
  }
  
  try {
    // Create canvas from the element
    const canvas = await html2canvas(element, { 
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      allowTaint: true
    });
    
    // Create a PDF with proper dimensions (A4)
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Add the canvas as an image to the PDF
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
    
    // If the CV is longer than one page, add additional pages
    let heightLeft = imgHeight;
    let position = 0;
    
    while (heightLeft >= pageHeight) {
      position = heightLeft - pageHeight;
      pdf.addPage();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, -position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    // Save the PDF
    const filename = `${cvData.personal?.name?.replace(/\s+/g, '-').toLowerCase() || 'cv'}.pdf`;
    pdf.save(filename);
    
    // Call success callback
    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess('PDF');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('An error occurred while generating the PDF. Please try again.');
    return { success: false, error };
  }
}
