import { FeedbackForm } from "components/FeedbackForm"
import { FormContainer } from "components/FormContainer"

const NewFeedback = () => {
  return (
    <FormContainer>
      <FeedbackForm editing={false} />
    </FormContainer>
  )
}
export default NewFeedback
