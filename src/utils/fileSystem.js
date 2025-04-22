/**
 * Utility functions for file system operations
 */

// Check if we have write permissions by attempting to write a test file
export const checkWritePermission = async (directory = '.') => {
  try {
    // Since we're in the browser environment, we can't directly check file system permissions
    // Instead, return true and handle errors when they occur during actual file operations
    return { success: true };
  } catch (error) {
    console.error('Permission check failed:', error);
    return { 
      success: false, 
      error,
      message: 'Unable to verify write permissions. File export may not work.'
    };
  }
};

// In browser environment, we use Blob and URL APIs to handle files
export const saveFile = async (content, filename, type = 'application/octet-stream') => {
  try {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }, 100);
    
    return { success: true };
  } catch (error) {
    console.error('Error saving file:', error);
    return {
      success: false,
      error,
      message: 'Failed to save file.'
    };
  }
};
