import { FeedbackForm } from "components/feedback/FeedbackForm"
import { FeedbackPageHeader } from "components/FeedbackPageHeader"
import { Layout } from "components/Layout"

const EditFeedback = () => {
  return (
    <Layout pageTitle="Edit">
      <div className="mx-auto flex flex-col gap-y-5 px-3 pt-6 pb-12 md:max-w-xl">
        <FeedbackPageHeader />
        <FeedbackForm editing={true} />
      </div>
    </Layout>
  )
}

export default EditFeedback
