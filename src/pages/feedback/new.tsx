import { FeedbackForm } from "components/feedback/FeedbackForm"
import { FeedbackPageHeader } from "components/FeedbackPageHeader"

const NewFeedback = () => {
  return (
    <div className="mx-auto flex flex-col gap-y-5 px-3 pt-6 pb-12 md:max-w-xl">
      <FeedbackPageHeader />
      <FeedbackForm editing={false} />
    </div>
  )
}

export default NewFeedback
