/**
 * Utility for handling application errors
 */

// Generic error handler for file system operations
export const handleFileSystemError = (error, operation = 'file operation') => {
  console.error(`Error during ${operation}:`, error);
  
  // Check for permission issues
  if (error.code === 'EPERM' || error.code === 'EACCES') {
    return {
      success: false,
      message: `Permission denied. Please check file permissions or run the application with appropriate privileges.`,
      error
    };
  }
  
  // Handle file not found
  if (error.code === 'ENOENT') {
    return {
      success: false,
      message: `File or directory not found. Please verify the path exists.`,
      error
    };
  }
  
  // Generic error response
  return {
    success: false,
    message: `An error occurred during ${operation}. Please try again.`,
    error
  };
};

// Application-specific error messages
export const getErrorMessage = (errorCode, language = 'en') => {
  const messages = {
    en: {
      'EPERM': 'Permission denied. Try restarting the application with administrator privileges.',
      'EACCES': 'Access denied. The application doesn\'t have necessary permissions.',
      'ENOENT': 'File or directory not found.',
      'DEFAULT': 'An unexpected error occurred. Please try again.'
    },
    vi: {
      'EPERM': 'Quyền truy cập bị từ chối. Hãy thử khởi động lại ứng dụng với quyền quản trị.',
      'EACCES': 'Truy cập bị từ chối. Ứng dụng không có quyền cần thiết.',
      'ENOENT': 'Không tìm thấy tệp hoặc thư mục.',
      'DEFAULT': 'Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.'
    }
  };
  
  return messages[language][errorCode] || messages[language]['DEFAULT'];
};
