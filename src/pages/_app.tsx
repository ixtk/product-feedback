import "styles/globals.css"
import type { AppProps } from "next/app"
import { Jost } from "@next/font/google"

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"]
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${jost.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
