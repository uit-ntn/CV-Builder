import '../styles/globals.css'
import Layout from '../components/Layout'
import { LanguageProvider } from '../context/LanguageContext'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  )
}

export default MyApp
