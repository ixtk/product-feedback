import { createContext, Dispatch, SetStateAction } from "react"
import { productRequests } from "shared/data"
import { Feedback } from "shared/types"

interface IFeedbackContext {
  feedbacks: Feedback[]
  setFeedbacks: Dispatch<SetStateAction<Feedback[]>> | null
}

export const FeedbackContext = createContext<IFeedbackContext>({
  feedbacks: productRequests,
  setFeedbacks: null
})
