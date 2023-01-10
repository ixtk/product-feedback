import { FeedbackPageContainer } from "components/FeedbackPageContainer"
import { FeedbackCard } from "components/FeedbackCard"
import { Button } from "components/Button"

const FeedbackPage = () => {
  return (
    <FeedbackPageContainer classExtension="flex flex-col gap-y-5">
      <FeedbackCard />
      <div className="flex flex-col gap-y-5 rounded-xl bg-base-100 p-5">
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
          className="rounded-xl bg-base-300"
        ></textarea>
        <div className="flex justify-end">
          <Button text="Post Comment" variant="accent" />
        </div>
      </div>
    </FeedbackPageContainer>
  )
}
export default FeedbackPage
