import { FeedbackPageContainer } from "components/FeedbackPageContainer"
import { FeedbackCard } from "components/feedback/FeedbackCard"
import { Button } from "components/common/Button"
import { CommentChain } from "components/comment/CommentChain"

const FeedbackPage = () => {
  return (
    <FeedbackPageContainer classExtension="flex flex-col gap-y-5">
      <FeedbackCard />
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
      <CommentChain />
    </FeedbackPageContainer>
  )
}
export default FeedbackPage
