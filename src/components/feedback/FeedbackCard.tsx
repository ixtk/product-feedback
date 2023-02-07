import { Tag } from "components/common/Tag"
import { UpvoteButton } from "components/feedback/UpvoteButton"
import { CommentCount } from "components/comment/CommentCount"
import Link from "next/link"
import { Feedback } from "shared/types"
import { getCommentCount } from "utils/data"
import clsx from "clsx"

interface FeedbackCardProps extends Feedback {
  renderLink?: boolean
  roadmapCard?: boolean
}

export const FeedbackCard = ({
  renderLink = true,
  roadmapCard = false,
  ...props
}: FeedbackCardProps) => {
  const commentCount = getCommentCount(props.id)

  const CardTitle = () => {
    return (
      <h3 className="mb-3 inline-block text-lg font-bold text-secondary-800 underline decoration-base-100 transition duration-150 group-hover:text-primary-600 group-hover:decoration-primary-600 md:text-lg">
        {props.title}
      </h3>
    )
  }

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
          <Link href={`/feedback/${props.id}`} className="group inline-block">
            <CardTitle />
          </Link>
        ) : (
          <CardTitle />
        )}
        <p className="text mb-3 text-secondary-700 md:text-base">
          {props.description}
        </p>
        <Tag text={props.category} />
      </div>
      <CommentCount commentCount={commentCount} />
    </article>
  )
}
