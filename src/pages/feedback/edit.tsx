import { FeedbackForm } from "components/FeedbackForm"
import { FormContainer } from "components/FormContainer"

const EditFeedback = () => {
  return (
    <FormContainer>
      <FeedbackForm editing={true} />
    </FormContainer>
  )
}

export default EditFeedback
