import { Tag } from "components/common/Tag"
import { UpvoteButton } from "components/feedback/UpvoteButton"
import { CommentCount } from "components/comment/CommentCount"
import Link from "next/link"
import { FeedbackRequest } from "shared/types"
import { getCommentCount } from "utils/data"

interface FeedbackCardProps extends FeedbackRequest {
  renderLink?: boolean
}

export const FeedbackCard = ({
  renderLink = true,
  ...props
}: FeedbackCardProps) => {
  const commentCount = getCommentCount(props.id)

  const CardTitle = () => {
    return (
      <h3 className="mb-3 inline-block font-bold text-secondary-800 underline decoration-base-100 transition duration-150 group-hover:text-primary-600 group-hover:decoration-primary-600 md:text-lg">
        {props.title}
      </h3>
    )
  }

  return (
    <article className="rounded-corners grid grid-cols-2 items-center gap-y-5 bg-base-100 p-5 shadow-sm md:mx-auto md:w-full md:max-w-none md:grid-cols-[auto_1fr_auto] md:gap-y-0 md:gap-x-5">
      <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1">
        {renderLink ? (
          <Link href={`/feedback/${props.id}`} className="group inline-block">
            <CardTitle />
          </Link>
        ) : (
          <CardTitle />
        )}
        <p className="mb-3 text-sm text-secondary-700 md:text-base">
          {props.description}
        </p>
        <Tag text={props.category} clickable={false} />
      </div>
      <UpvoteButton upvoteCount={props.upvotes} />
      <CommentCount commentCount={commentCount} />
    </article>
  )
}
