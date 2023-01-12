import { Tag } from "components/Tag"
import { UpvoteButton } from "components/UpvoteButton"
import { CommentCount } from "components/CommentCount"

export const FeedbackCard = () => {
  return (
    <article className="rounded-corners grid grid-cols-2 items-center gap-5 bg-base-100 p-5 md:mx-auto md:w-full md:max-w-none md:grid-cols-[auto_1fr_auto]">
      <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1">
        <h3 className="font-bold text-secondary-800 md:text-lg">
          More comprehensive reports
        </h3>
        <p className="my-3 text-sm text-secondary-700 md:text-base">
          it would be great to see more detailed breakdown of solutions
        </p>
        <Tag text="Feature" clickable={false} />
      </div>
      <UpvoteButton upvoteCount={123} />
      <CommentCount commentCount={3} />
    </article>
  )
}
