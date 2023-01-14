import { FeedbackForm } from "components/feedback/FeedbackForm"
import { FeedbackPageContainer } from "components/FeedbackPageContainer"
import { FeedbackFormHeader } from "components/FeedbackFormHeader"

const EditFeedback = () => {
  return (
    <FeedbackPageContainer>
      <FeedbackFormHeader />
      <FeedbackForm editing={true} />
    </FeedbackPageContainer>
  )
}

export default EditFeedback
