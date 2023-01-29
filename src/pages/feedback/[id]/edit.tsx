import { FeedbackForm } from "components/feedback/FeedbackForm"
import { FeedbackFormHeader } from "components/FeedbackFormHeader"

const EditFeedback = () => {
  return (
    <div className="mx-auto flex flex-col gap-y-5 px-3 pt-6 pb-12 md:max-w-xl">
      <FeedbackFormHeader />
      <FeedbackForm editing={true} />
    </div>
  )
}

export default EditFeedback
