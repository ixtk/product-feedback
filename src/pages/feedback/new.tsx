import { FeedbackForm } from "components/feedback/FeedbackForm"
import { FeedbackPageContainer } from "components/FeedbackPageContainer"

const NewFeedback = () => {
  return (
    <FeedbackPageContainer>
      <FeedbackForm editing={false} />
    </FeedbackPageContainer>
  )
}
export default NewFeedback
