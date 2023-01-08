import { BaseContainer } from "./BaseContainer"
import { Tag } from "components/Tag"
import { UpvoteButton } from "components/UpvoteButton"
import { CommentCount } from "components/CommentCount"

export const FeedbackCard = () => {
  return (
    <BaseContainer classExtension="grid grid-cols-2 gap-5 items-center max-w-md mx-auto md:max-w-none md:mx-auto md:grid-cols-[auto_1fr_auto] md:w-full">
      <div className="col-start-1 col-end-3 md:col-end-3 md:row-start-1 md:col-start-2">
        <h3 className="font-bold text-secondary-800 md:text-lg">
          More comprehensive reports
        </h3>
        <p className="text-secondary-700 text-sm my-3 md:text-base">
          it would be great to see more detailed breakdown of solutions
        </p>
        <Tag text="Feature" clickable={false} />
      </div>
      <UpvoteButton upvoteCount={123} />
      <CommentCount commentCount={3} />
    </BaseContainer>
  )
}
