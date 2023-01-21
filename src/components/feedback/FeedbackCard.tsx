import { Tag } from "components/common/Tag"
import { UpvoteButton } from "components/feedback/UpvoteButton"
import { CommentCount } from "components/comment/CommentCount"
import Link from "next/link"
import { FeedbackRequest } from "shared/types"
import { getCommentCount } from "utils/data"

export const FeedbackCard = (props: FeedbackRequest) => {
  const commentCount = getCommentCount(props.id)

  return (
    <article className="rounded-corners grid grid-cols-2 items-center gap-5 bg-base-100 p-5 md:mx-auto md:w-full md:max-w-none md:grid-cols-[auto_1fr_auto]">
      <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1">
        <Link href={`/feedback/${props.id}`} className="mb-3 block">
          <h3 className="mb-3 font-bold text-secondary-800 md:text-lg">
            {props.title}
          </h3>
          <p className="text-sm text-secondary-700 md:text-base">
            {props.description}
          </p>
        </Link>
        <Tag text={props.category} clickable={false} />
      </div>
      <UpvoteButton upvoteCount={props.upvotes} />
      <CommentCount commentCount={commentCount} />
    </article>
  )
}
