import { FeedbackPageContainer } from "components/FeedbackPageContainer"
import { FeedbackCard } from "components/FeedbackCard"
import { Button } from "components/Button"
import { CommentChain } from "components/CommentChain"

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
          className="rounded-corners bg-base-300"
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
