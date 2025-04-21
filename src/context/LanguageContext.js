import React, { createContext, useState, useContext, useEffect } from 'react';

// Define translations
const translations = {
  vi: {
    // Navigation
    home: 'Trang chủ',
    
    // Home page
    chooseTemplate: 'Chọn mẫu CV bạn muốn sử dụng',
    useThisTemplate: 'Sử dụng mẫu này',
    
    // Editor page
    editCV: 'Chỉnh sửa CV',
    preview: 'Xem trước',
    personal: 'Cá nhân',
    experience: 'Kinh nghiệm',
    education: 'Học vấn',
    skills: 'Kỹ năng',
    certifications: 'Chứng chỉ',
    exportPDF: 'Xuất PDF',
    exportWord: 'Xuất Word',
    
    // Personal form
    name: 'Họ và tên',
    jobTitle: 'Vị trí công việc',
    email: 'Email',
    phone: 'Số điện thoại',
    address: 'Địa chỉ',
    about: 'Giới thiệu ngắn về bản thân',
    github: 'GitHub (nếu có)',
    portfolio: 'Portfolio (nếu có)',
    linkedin: 'LinkedIn (nếu có)',
    
    // Experience form
    position: 'Vị trí',
    company: 'Công ty',
    location: 'Địa điểm',
    from: 'Từ',
    to: 'Đến',
    present: 'Hiện tại',
    description: 'Mô tả công việc',
    addExperience: 'Thêm kinh nghiệm',
    
    // Education form
    degree: 'Bằng cấp',
    school: 'Trường',
    eduDescription: 'Mô tả về quá trình học tập',
    addEducation: 'Thêm học vấn',
    
    // Skills form
    skillName: 'Tên kỹ năng',
    skillDescription: 'Mô tả kỹ năng',
    addSkill: 'Thêm kỹ năng',
    
    // Certification form
    certName: 'Tên chứng chỉ',
    issuer: 'Tổ chức phát hành',
    date: 'Ngày cấp',
    addCertificate: 'Thêm chứng chỉ',
    
    // Template names
    simpleCV: 'CV Đơn giản',
    professionalCV: 'CV Chuyên nghiệp',
    modernCV: 'CV Hiện đại',
    webDevCV: 'CV Lập trình viên Web',
    cloudCV: 'CV Kỹ sư Cloud',
    
    // Template descriptions
    simpleDesc: 'Một mẫu CV sạch sẽ, tối giản',
    professionalDesc: 'CV phong cách doanh nghiệp cho các vị trí công sở',
    modernDesc: 'CV sáng tạo cho nhà thiết kế và nghệ sĩ',
    webDevDesc: 'Mẫu tối ưu cho lập trình viên web',
    cloudDesc: 'Thiết kế dành cho chuyên gia cloud và DevOps',
    
    // Alerts
    pdfError: 'Không thể tạo PDF. Vui lòng thử lại.',
    generalError: 'Có lỗi khi tạo file. Vui lòng thử lại sau.',
    
    // Avatar
    avatar: 'Ảnh đại diện',
    uploadAvatar: 'Tải lên ảnh đại diện',
    removeAvatar: 'Xóa ảnh',
    dragDropAvatar: 'Kéo thả ảnh vào đây hoặc nhấn để chọn file',
    maxFileSize: 'Kích thước tối đa: 2MB',
    supportedFormats: 'Định dạng hỗ trợ: JPG, PNG',
    
    // Specialized sections
    projects: 'Dự án cá nhân',
    technicalExpertise: 'Chuyên môn kỹ thuật',
    
    // Project section
    projectTitle: 'Tên dự án',
    projectDescription: 'Mô tả dự án',
    projectTechnologies: 'Công nghệ sử dụng',
    projectLink: 'Liên kết đến dự án',
    projectImage: 'Hình ảnh dự án',
    addProject: 'Thêm dự án',
    
    // Technical expertise section
    technicalCategory: 'Danh mục kỹ thuật',
    technicalCategory2: 'Công nghệ container',
    technicalSkills: 'AWS, Azure, GCP',
    technicalSkills2: 'Docker, Kubernetes',
    addTechnical: 'Thêm chuyên môn kỹ thuật',
    
    // Image Cropper
    adjustAvatar: 'Điều chỉnh ảnh đại diện',
    zoom: 'Thu phóng',
    apply: 'Áp dụng',
    cancel: 'Hủy bỏ',
    dragToAdjust: 'Kéo để di chuyển, cuộn để thu phóng',
    
    // Multi-column layout
    leftColumn: 'Cột trái',
    rightColumn: 'Cột phải',
    oneColumn: 'Một cột',
    twoColumns: 'Hai cột',
    threeColumns: 'Ba cột',
    columnLayout: 'Bố cục cột'
  },
  en: {
    // Navigation
    home: 'Home',
    
    // Home page
    chooseTemplate: 'Choose a CV template to use',
    useThisTemplate: 'Use this template',
    
    // Editor page
    editCV: 'Edit CV',
    preview: 'Preview',
    personal: 'Personal',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    certifications: 'Certifications',
    exportPDF: 'Export PDF',
    exportWord: 'Export Word',
    
    // Personal form
    name: 'Full Name',
    jobTitle: 'Job Title',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    about: 'About Me',
    github: 'GitHub (optional)',
    portfolio: 'Portfolio (optional)',
    linkedin: 'LinkedIn (optional)',
    
    // Experience form
    position: 'Position',
    company: 'Company',
    location: 'Location',
    from: 'From',
    to: 'To',
    present: 'Present',
    description: 'Job Description',
    addExperience: 'Add Experience',
    
    // Education form
    degree: 'Degree',
    school: 'School',
    eduDescription: 'Education Description',
    addEducation: 'Add Education',
    
    // Skills form
    skillName: 'Skill Name',
    skillDescription: 'Skill Description',
    addSkill: 'Add Skill',
    
    // Certification form
    certName: 'Certificate Name',
    issuer: 'Issuer',
    date: 'Date',
    addCertificate: 'Add Certificate',
    
    // Template names
    simpleCV: 'Simple CV',
    professionalCV: 'Professional CV',
    modernCV: 'Modern CV',
    webDevCV: 'Web Developer CV',
    cloudCV: 'Cloud Engineer CV',
    
    // Template descriptions
    simpleDesc: 'A clean, minimalist CV template',
    professionalDesc: 'A business-style CV for corporate roles',
    modernDesc: 'A creative CV for designers and artists',
    webDevDesc: 'Optimized template for web developers',
    cloudDesc: 'Tailored for cloud and DevOps professionals',
    
    // Alerts
    pdfError: 'Could not create PDF. Please try again.',
    generalError: 'Error generating file. Please try again later.',
    
    // Avatar
    avatar: 'Profile Photo',
    uploadAvatar: 'Upload profile photo',
    removeAvatar: 'Remove photo',
    dragDropAvatar: 'Drag and drop image here or click to browse',
    maxFileSize: 'Maximum size: 2MB',
    supportedFormats: 'Supported formats: JPG, PNG',
    
    // Specialized sections
    projects: 'Personal Projects',
    technicalExpertise: 'Technical Expertise',
    
    // Project section
    projectTitle: 'Project Name',
    projectDescription: 'Project Description',
    projectTechnologies: 'Technologies Used',
    projectLink: 'Project Link',
    projectImage: 'Project Image',
    addProject: 'Add Project',
    
    // Technical expertise section
    technicalCategory: 'Technical Category',
    technicalCategory2: 'Containerization',
    technicalSkills: 'AWS, Azure, GCP',
    technicalSkills2: 'Docker, Kubernetes',
    addTechnical: 'Add Technical Expertise',
    
    // Image Cropper
    adjustAvatar: 'Adjust Profile Photo',
    zoom: 'Zoom',
    apply: 'Apply',
    cancel: 'Cancel',
    dragToAdjust: 'Drag to move, scroll to zoom',
    
    // Multi-column layout
    leftColumn: 'Left Column',
    rightColumn: 'Right Column',
    oneColumn: 'One Column',
    twoColumns: 'Two Columns',
    threeColumns: 'Three Columns',
    columnLayout: 'Column Layout'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Get saved language preference or default to Vietnamese
  const [language, setLanguage] = useState('vi');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('cv-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cv-language', language);
  }, [language]);

  // Get text based on current language
  const t = (key) => {
    const langData = translations[language];
    return langData[key] || key; // Return key if translation not found
  };

  // Toggle between VI and EN
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
