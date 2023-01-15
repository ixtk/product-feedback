import { CommentHeader } from "components/comment/CommentHeader"
import { BaseComment } from "shared/types"

interface CommentProps extends BaseComment {
  classExtension?: string
}

export const Comment = (props: CommentProps) => {
  return (
    <article className={props.classExtension}>
      <CommentHeader user={props.user} />
      <p className="mt-3 text-secondary-700 md:ml-12 md:ml-14">
        {props.content}
      </p>
    </article>
  )
}
