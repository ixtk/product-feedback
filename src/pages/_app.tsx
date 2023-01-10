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
    <main className={clsx(jost.variable, "bg-base-300 font-sans min-h-full")}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
