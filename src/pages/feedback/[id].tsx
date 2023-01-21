import { FeedbackPageContainer } from "components/FeedbackPageContainer"
import { FeedbackCard } from "components/feedback/FeedbackCard"
import { Button } from "components/common/Button"
import { CommentChain } from "components/comment/CommentChain"
import { FeedbackFormHeader } from "components/FeedbackFormHeader"
import { useRouter } from "next/router"
import { getFeedback } from "utils/data"

const FeedbackPage = () => {
  const router = useRouter()
  const { id } = router.query
  const feedbackData = getFeedback(Number(id))

  return (
    <FeedbackPageContainer classExtension="flex flex-col gap-y-5">
      <FeedbackFormHeader feedbackEditable={true} />
      <FeedbackCard {...feedbackData} />
      <div className="rounded-corners flex flex-col gap-y-5 bg-base-100 p-5">
        <label
          htmlFor="comment"
          className="text-lg font-bold text-secondary-800"
        >
          Add Comment
        </label>
        {/* TODO: consistent outline colors */}
        <textarea
          id="comment"
          cols={30}
          rows={5}
          className="rounded-corners border-0 bg-base-300"
        ></textarea>
        <div className="flex justify-end">
          <Button text="Post Comment" variant="accent" />
        </div>
      </div>
      <CommentChain feedbackId={Number(id)} />
    </FeedbackPageContainer>
  )
}
export default FeedbackPage
