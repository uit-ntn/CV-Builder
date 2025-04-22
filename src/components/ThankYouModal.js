import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ThankYouModal = ({ isOpen, onClose, fileType }) => {
  const { t } = useLanguage();
  const [animate, setAnimate] = useState(false);

  // Animation effect on mount
  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger animation
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div 
        className={`bg-white rounded-lg shadow-2xl max-w-md w-full transform transition-all duration-300 ${
          animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg p-6 text-white text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-green-500">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold">{t('exportSuccess') || 'Export Successful!'}</h2>
          <p className="mt-2">{t('fileReady', { type: fileType }) || `Your ${fileType} file is ready.`}</p>
        </div>
        
        <div className="p-6">
          <div className="mb-6 text-center">
            <div className="text-lg">
              <p className="mb-3">{t('thankYouMessage') || 'Thank you for using N CV Builder!'}</p>
              <p className="text-gray-600">{t('helpMessage') || 'If this tool helped you, please consider sharing it with others who might benefit.'}</p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <button
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
            >
              {t('continueEditing') || 'Continue Editing'}
            </button>
            
            <div className="text-center">
              <p className="text-sm text-gray-500">{t('createdBy') || 'Created with ❤️ by Nguyễn Thanh Nhân'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
