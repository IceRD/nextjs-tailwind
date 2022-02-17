import "../styles/globals.css"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import { appWithTranslation } from "next-i18next"
import Layout from "~~/Layouts/Default"

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)
