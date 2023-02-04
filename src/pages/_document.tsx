import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html className="h-full !pr-0" lang="en">
      <Head />
      <body className="h-full overflow-y-scroll">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
