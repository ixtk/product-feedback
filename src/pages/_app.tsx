import "styles/globals.css"
import type { AppProps } from "next/app"
import { Jost } from "@next/font/google"
import clsx from "clsx"

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"]
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={clsx(jost.variable, "font-sans bg-base-300")}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
