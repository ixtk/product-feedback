import { FeedbackCard } from "components/feedback/FeedbackCard"
import { Button } from "components/common/Button"
import { CommentChain } from "components/comment/CommentChain"
import { FeedbackPageHeader } from "components/FeedbackPageHeader"
import { useRouter } from "next/router"
import { getFeedback } from "utils/data"
import { Textarea, withLabel } from "components/input/Input"

const FeedbackPage = () => {
  const router = useRouter()
  const { id } = router.query
  const feedbackData = getFeedback(Number(id))
  const CommentField = withLabel(Textarea)

  return (
    <div className="mx-auto flex flex-col gap-y-5 px-3 pt-6 pb-12 md:max-w-3xl">
      <FeedbackPageHeader feedbackEditable={true} />
      <FeedbackCard {...feedbackData} renderLink={false} />
      <CommentChain feedbackId={Number(id)} />
      <div className="rounded-corners flex flex-col gap-y-5 bg-base-100 p-5 shadow-sm">
        <CommentField labelText="add comment" />
        <div className="flex justify-end">
          <Button text="Post Comment" variant="accent" />
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage
