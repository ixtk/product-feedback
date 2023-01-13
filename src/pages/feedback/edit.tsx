import { FeedbackForm } from "components/feedback/FeedbackForm"
import { FeedbackPageContainer } from "components/FeedbackPageContainer"

const EditFeedback = () => {
  return (
    <FeedbackPageContainer>
      <FeedbackForm editing={true} />
    </FeedbackPageContainer>
  )
}

export default EditFeedback
