import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
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
          <nav>
            <Link href="/" className="px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Trang chủ
            </Link>
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
