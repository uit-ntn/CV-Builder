import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function Layout({ children }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <>
      <Head>
        <title>CV Template Editor</title>
        <meta name="description" content="Edit and export CV templates as Word or PDF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CV Builder
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              {t('home')}
            </Link>
            <button 
              onClick={toggleLanguage} 
              className="px-4 py-2 bg-white text-blue-600 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} CV Builder. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ by Nguyễn Thanh Nhân</p>
        </div>
      </footer>
    </>
  )
}
