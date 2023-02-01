import { FeedbackForm } from "components/feedback/FeedbackForm"
import { FeedbackPageHeader } from "components/FeedbackPageHeader"
import { Layout } from "components/Layout"

const NewFeedback = () => {
  return (
    <Layout pageTitle="Create new">
      <div className="mx-auto flex flex-col gap-y-5 px-3 pt-6 pb-12 md:max-w-xl">
        <FeedbackPageHeader />
        <FeedbackForm editing={false} />
      </div>
    </Layout>
  )
}

export default NewFeedback
