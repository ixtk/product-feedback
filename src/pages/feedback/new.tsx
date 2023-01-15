import { FeedbackForm } from "components/feedback/FeedbackForm"
import { FeedbackPageContainer } from "components/FeedbackPageContainer"
import { FeedbackFormHeader } from "components/FeedbackFormHeader"

const NewFeedback = () => {
  return (
    <FeedbackPageContainer>
      <FeedbackFormHeader />
      <FeedbackForm editing={false} />
    </FeedbackPageContainer>
  )
}
export default NewFeedback
