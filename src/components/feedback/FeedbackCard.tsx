import { Tag } from "components/common/Tag"
import { UpvoteButton } from "components/feedback/UpvoteButton"
import { CommentCount } from "components/comment/CommentCount"
import Link from "next/link"
import { Feedback } from "shared/types"
import clsx from "clsx"
import { getCommentCount } from "utils/data"
import { useContext } from "react"
import { FeedbackContext } from "context/FeedbackList"

interface FeedbackCardProps extends Feedback {
  renderLink?: boolean
  roadmapCard?: boolean
  showCommentCount?: boolean
}

export const FeedbackCard = ({
  renderLink = true,
  roadmapCard = false,
  showCommentCount = true,
  ...props
}: FeedbackCardProps) => {
  const { feedbacks } = useContext(FeedbackContext)
  const commentCount = getCommentCount(feedbacks, props.id)

  return (
    <article
      className={clsx(
        "rounded-corners grid grid-cols-2 items-center gap-y-5 bg-base-100 p-5 shadow-sm",
        !roadmapCard && "gap-x-5 md:flex"
      )}
    >
      <UpvoteButton upvoteCount={props.upvotes} onRoadmapCard={roadmapCard} />
      <div className="col-start-1 col-end-3 flex-1">
        {renderLink ? (
          <h3 className="inline-block text-lg font-bold text-secondary-800 md:text-lg">
            <Link
              href={`/feedback/${props.id}`}
              className="inline-block duration-75 hover:text-primary-600 hover:decoration-primary-600"
            >
              {props.title}
            </Link>
          </h3>
        ) : (
          <h3 className="inline-block text-lg font-bold text-secondary-800 underline decoration-base-100 md:text-lg">
            {props.title}
          </h3>
        )}
        <p className="text my-3 text-secondary-700 md:text-base">
          {props.description}
        </p>
        <Tag text={props.category} />
      </div>
      {showCommentCount && <CommentCount commentCount={commentCount} />}
    </article>
  )
}
