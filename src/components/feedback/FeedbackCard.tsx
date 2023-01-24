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

  const PrimaryCardContents = () => {
    return (
      <div className="mb-3">
        <h3 className="mb-3 font-bold text-secondary-800 underline decoration-base-100 transition duration-150 group-hover:text-primary-600 group-hover:decoration-primary-600 md:text-lg">
          {props.title}
        </h3>
        <p className="text-sm text-secondary-700 md:text-base">
          {props.description}
        </p>
      </div>
    )
  }

  return (
    <article className="rounded-corners grid grid-cols-2 items-center gap-5 bg-base-100 p-5 md:mx-auto md:w-full md:max-w-none md:grid-cols-[auto_1fr_auto]">
      <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1">
        {renderLink ? (
          <Link href={`/feedback/${props.id}`} className="group block">
            {<PrimaryCardContents />}
          </Link>
        ) : (
          <PrimaryCardContents />
        )}
        <Tag text={props.category} clickable={false} />
      </div>
      <UpvoteButton upvoteCount={props.upvotes} />
      <CommentCount commentCount={commentCount} />
    </article>
  )
}
