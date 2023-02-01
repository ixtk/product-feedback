import Head from "next/head"
import clsx from "clsx"
import { Jost } from "@next/font/google"

interface LayoutProps {
  pageTitle: string
  children: React.ReactNode
}

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"]
})

export const Layout = (props: LayoutProps) => {
  const pageTitle = `${props.pageTitle} | Feedback Board`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className={clsx(jost.variable, "min-h-full bg-base-300 font-sans")}>
        {props.children}
      </main>
    </>
  )
}
