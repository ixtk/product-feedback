import "styles/tailwind.css"
import type { AppProps } from "next/app"
import { useState } from "react"
import { productRequests } from "shared/data"
import { Feedback } from "shared/types"
import { FeedbackContext } from "context/FeedbackList"

const App = ({ Component, pageProps }: AppProps) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(productRequests)

  return (
    <FeedbackContext.Provider value={{ feedbacks, setFeedbacks }}>
      <Component {...pageProps} />
    </FeedbackContext.Provider>
  )
}

export default App
