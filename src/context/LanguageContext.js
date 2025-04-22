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
    analystCV: 'CV Business Analyst',
    dataEngCV: 'CV Data Engineer',
    devOpsCV: 'CV DevOps Engineer',
    marketingCV: 'CV Marketing',
    
    // Template descriptions
    simpleDesc: 'Một mẫu CV sạch sẽ, tối giản và dễ đọc cho mọi ngành nghề',
    professionalDesc: 'CV phong cách doanh nghiệp cao cấp cho các vị trí công sở và quản lý',
    modernDesc: 'CV sáng tạo với bố cục hiện đại cho nhà thiết kế và nghệ sĩ',
    webDevDesc: 'Mẫu tối ưu cho lập trình viên web với phần trình bày code và dự án',
    cloudDesc: 'Thiết kế dành riêng cho các chuyên gia Cloud',
    analystDesc: 'Mẫu dành riêng cho Business Analyst và Data Analyst',
    dataEngDesc: 'CV chuyên nghiệp cho Data Engineer, nhấn mạnh kỹ năng dữ liệu và công nghệ',
    devOpsDesc: 'Mẫu dành cho DevOps Engineer với trọng tâm vào CI/CD và tự động hóa',
    marketingDesc: 'Mẫu CV chuyên nghiệp cho chuyên viên Marketing và người làm trong lĩnh vực quảng cáo',
    
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
    
    // Business Analyst specific fields
    businessSkills: 'Kỹ năng nghiệp vụ',
    toolsUsed: 'Công cụ sử dụng',
    methodologies: 'Phương pháp luận',
    addMethodology: 'Thêm phương pháp luận',
    domain: 'Lĩnh vực',
    achievements: 'Thành tựu',
    addAchievement: 'Thêm thành tựu',
    
    // Web Developer additional fields
    frontendSkills: 'Kỹ năng Frontend',
    backendSkills: 'Kỹ năng Backend',
    devOpsSkills: 'Kỹ năng DevOps',
    addCodeExample: 'Thêm mã nguồn',
    codeSnippet: 'Đoạn mã',
    codeDescription: 'Mô tả mã nguồn',
    
    // Cloud Engineer additional fields
    infrastructureSkills: 'Kỹ năng hạ tầng',
    securitySkills: 'Kỹ năng bảo mật',
    cloudPlatforms: 'Nền tảng Cloud',
    devOpsTools: 'Công cụ DevOps',
    
    // Data Engineer specific fields
    dataTools: 'Công cụ xử lý dữ liệu',
    dataLanguages: 'Ngôn ngữ lập trình',
    databases: 'Cơ sở dữ liệu',
    bigDataTech: 'Công nghệ Big Data',
    dataPipelines: 'Data Pipelines',
    addDataProject: 'Thêm dự án dữ liệu',
    
    // DevOps specific fields
    cicdPipelines: 'CI/CD Pipelines',
    containerization: 'Công nghệ Container',
    infrastructureTools: 'Công cụ hạ tầng',
    monitoringTools: 'Công cụ giám sát',
    automationScripts: 'Tự động hóa',
    addDevOpsProject: 'Thêm dự án DevOps',
    
    // Marketing specific fields
    socialPlatforms: 'Nền tảng mạng xã hội',
    marketingTools: 'Công cụ Marketing',
    campaigns: 'Chiến dịch Marketing',
    addCampaign: 'Thêm chiến dịch',
    campaignTitle: 'Tên chiến dịch',
    campaignClient: 'Khách hàng',
    campaignDate: 'Thời gian',
    campaignDescription: 'Mô tả chiến dịch',
    campaignResult: 'Kết quả',
    
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
    columnLayout: 'Bố cục cột',
    
    // New home page translations
    heroTitle: 'Tạo CV chuyên nghiệp chỉ trong vài phút',
    heroSubtitle: 'Chọn từ các mẫu được thiết kế chuyên nghiệp, tùy chỉnh theo nhu cầu của bạn và xuất trong vài giây.',
    getStarted: 'Bắt đầu ngay',
    getStartedNow: 'Bắt đầu ngay bây giờ',
    ourFeatures: 'Tại sao chọn N CV Builder?',
    feature1Title: 'Thiết kế chuyên nghiệp',
    feature1Desc: 'Các mẫu được thiết kế bởi chuyên gia giúp bạn nổi bật',
    feature2Title: 'Dễ dàng tùy chỉnh',
    feature2Desc: 'Trình soạn thảo đơn giản để hoàn thiện CV của bạn trong vài phút',
    feature3Title: 'Xuất tức thì',
    feature3Desc: 'Tải xuống dưới dạng PDF hoặc Word chỉ bằng một cú nhấp chuột',
    templateSubtitle: 'Lựa chọn từ các mẫu được thiết kế chuyên nghiệp dành cho các ngành và vai trò khác nhau',
    aboutTitle: 'Về tác giả',
    aboutDesc: 'Xin chào, tôi là Nguyễn Thanh Nhân, người sáng lập N CV Builder. Với nhiều năm kinh nghiệm trong lĩnh vực tạo CV chuyên nghiệp, tôi đã thiết kế công cụ này để giúp bạn tạo CV ấn tượng nổi bật với nhà tuyển dụng.',
    testimonials: 'Người dùng nói gì',
    readyToStart: 'Sẵn sàng tạo CV chuyên nghiệp của bạn?',
    ctaDescription: 'Chọn từ các mẫu của chúng tôi và tạo CV nổi bật trong vài phút',
    
    // Thank you modal translations
    exportSuccess: 'Xuất file thành công!',
    fileReady: 'File {{type}} của bạn đã sẵn sàng.',
    thankYouMessage: 'Cảm ơn bạn đã sử dụng N CV Builder!',
    helpMessage: 'Nếu công cụ này giúp ích cho bạn, hãy chia sẻ cho những người khác có thể cần đến nó.',
    continueEditing: 'Tiếp tục chỉnh sửa',
    createdBy: 'Được tạo bởi ❤️ Nguyễn Thanh Nhân'
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
    analystCV: 'Business Analyst CV',
    dataEngCV: 'Data Engineer CV',
    devOpsCV: 'DevOps Engineer CV',
    marketingCV: 'Marketing CV',
    
    // Template descriptions
    simpleDesc: 'A clean, minimalist and highly readable CV template suitable for all professions',
    professionalDesc: 'A premium business-style CV for corporate roles and management positions',
    modernDesc: 'A creative CV with modern layout for designers and creative professionals',
    webDevDesc: 'Optimized template for web developers with code display and project showcase',
    cloudDesc: 'Tailored for cloud and DevOps professionals',
    analystDesc: 'Tailored for Business and Data Analysts',
    dataEngDesc: 'Professional CV for Data Engineers, emphasizing data skills and technologies',
    devOpsDesc: 'Template for DevOps Engineers focusing on CI/CD and automation',
    marketingDesc: 'Professional template for Marketing Specialists and professionals in advertising',
    
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
    
    // Business Analyst specific fields
    businessSkills: 'Business Skills',
    toolsUsed: 'Tools Used',
    methodologies: 'Methodologies',
    addMethodology: 'Add Methodology',
    domain: 'Domain',
    achievements: 'Achievements',
    addAchievement: 'Add Achievement',
    
    // Web Developer additional fields
    frontendSkills: 'Frontend Skills',
    backendSkills: 'Backend Skills',
    devOpsSkills: 'DevOps Skills',
    addCodeExample: 'Add Code Example',
    codeSnippet: 'Code Snippet',
    codeDescription: 'Code Description',
    
    // Cloud Engineer additional fields
    infrastructureSkills: 'Infrastructure Skills',
    securitySkills: 'Security Skills',
    cloudPlatforms: 'Cloud Platforms',
    devOpsTools: 'DevOps Tools',
    
    // Data Engineer specific fields
    dataTools: 'Data Processing Tools',
    dataLanguages: 'Programming Languages',
    databases: 'Databases',
    bigDataTech: 'Big Data Technologies',
    dataPipelines: 'Data Pipelines',
    addDataProject: 'Add Data Project',
    
    // DevOps specific fields
    cicdPipelines: 'CI/CD Pipelines',
    containerization: 'Containerization',
    infrastructureTools: 'Infrastructure Tools',
    monitoringTools: 'Monitoring Tools',
    automationScripts: 'Automation',
    addDevOpsProject: 'Add DevOps Project',
    
    // Marketing specific fields
    socialPlatforms: 'Social Media Platforms',
    marketingTools: 'Marketing Tools',
    campaigns: 'Marketing Campaigns',
    addCampaign: 'Add Campaign',
    campaignTitle: 'Campaign Name',
    campaignClient: 'Client',
    campaignDate: 'Date',
    campaignDescription: 'Campaign Description',
    campaignResult: 'Results',
    
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
    columnLayout: 'Column Layout',
    
    // New home page translations
    heroTitle: 'Create Professional CVs in Minutes',
    heroSubtitle: 'Choose from our professionally designed templates, customize to fit your needs, and export in seconds.',
    getStarted: 'Get Started',
    getStartedNow: 'Get Started Now',
    ourFeatures: 'Why Choose N CV Builder?',
    feature1Title: 'Professionally Designed',
    feature1Desc: 'Templates designed by professionals to help you stand out',
    feature2Title: 'Easy to Customize',
    feature2Desc: 'Simple editor to perfect your CV in minutes',
    feature3Title: 'Instant Export',
    feature3Desc: 'Download as PDF or Word with a single click',
    templateSubtitle: 'Select from our professionally designed templates tailored for different industries and roles',
    aboutTitle: 'About the Creator',
    aboutDesc: 'Hi, I\'m Nguyễn Thanh Nhân, the founder of N CV Builder. With years of experience in professional resume creation, I designed this tool to help you create impressive CVs that stand out to employers.',
    testimonials: 'What Our Users Say',
    readyToStart: 'Ready to Create Your Professional CV?',
    ctaDescription: 'Choose from our templates and create a standout CV in minutes',
    
    // Thank you modal translations
    exportSuccess: 'Export Successful!',
    fileReady: 'Your {{type}} file is ready.',
    thankYouMessage: 'Thank you for using N CV Builder!',
    helpMessage: 'If this tool helped you, please consider sharing it with others who might benefit.',
    continueEditing: 'Continue Editing',
    createdBy: 'Created with ❤️ by Nguyễn Thanh Nhân'
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
