import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>N CV Builder | Professional CV Templates</title>
        <meta name="description" content="Create professional CVs with N CV Builder by Nguyễn Thanh Nhân" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'
      }`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className={`w-10 h-10 ${
              scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            } rounded-lg flex items-center justify-center mr-3 shadow-md transition-all duration-300`}>
              <span className="text-2xl font-bold">N</span>
            </div>
            <span className="text-xl font-bold">CV Builder</span>
          </Link>
          <nav className="flex items-center space-x-2">
            <Link href="/" className={`px-4 py-2 rounded hover:${
              scrolled ? 'bg-gray-100' : 'bg-blue-600 bg-opacity-30'
            } transition-colors`}>
              {t('home')}
            </Link>
            <button 
              onClick={toggleLanguage} 
              className={`px-4 py-2 ${
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              } rounded font-medium transition-colors`}
            >
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
          </nav>
        </div>
      </header>

      <div className="pt-16"> {/* Add padding to account for fixed header */}
        {children}
      </div>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white text-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                  <span className="text-2xl font-bold">N</span>
                </div>
                <span className="text-xl font-bold">CV Builder</span>
              </div>
              <p className="mt-2 text-gray-300 max-w-md"> Create professional CVs in minutes with our easy-to-use editor and beautiful templates.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:gap-16">
              <div>
                <h3 className="font-semibold mb-3">Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li><Link href="#templates" className="hover:text-white">Templates</Link></li>
                  <li><Link href="#" className="hover:text-white">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="mailto:npthanhnhan2003@gmail.com" className="hover:text-white">Email</a></li>
                  <li><a href="https://github.com/uit-ntn" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/nguyen-nhan-732a66247/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} CV Builder. {t('allRightsReserved') || 'All rights reserved.'}</p>
            <p className="mt-2">Made with ❤️ by Nguyễn Thanh Nhân</p>
          </div>
        </div>
      </footer>
    </>
  )
}
