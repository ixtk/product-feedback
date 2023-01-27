import { FeedbackPageContainer } from "components/FeedbackPageContainer"
import { FeedbackCard } from "components/feedback/FeedbackCard"
import { Button } from "components/common/Button"
import { CommentChain } from "components/comment/CommentChain"
import { FeedbackFormHeader } from "components/FeedbackFormHeader"
import { useRouter } from "next/router"
import { getFeedback } from "utils/data"
import { Textarea, withLabel } from "components/common/Input"

const FeedbackPage = () => {
  const router = useRouter()
  const { id } = router.query
  const feedbackData = getFeedback(Number(id))
  const CommentField = withLabel(Textarea)

  return (
    <FeedbackPageContainer classExtension="flex flex-col gap-y-5">
      <FeedbackFormHeader feedbackEditable={true} />
      <FeedbackCard {...feedbackData} renderLink={false} />
      <div className="rounded-corners flex flex-col gap-y-5 bg-base-100 p-5">
        <CommentField labelText="add comment" />
        <div className="flex justify-end">
          <Button text="Post Comment" variant="accent" />
        </div>
      </div>
      <CommentChain feedbackId={Number(id)} />
    </FeedbackPageContainer>
  )
}
export default FeedbackPage
