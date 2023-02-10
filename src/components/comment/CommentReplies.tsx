import { Comment } from "components/comment/Comment"
import { Comment as CommentType } from "shared/types"
import clsx from "clsx"

interface CommentRepliesProps {
  replies: CommentType[]
}

export const CommentReplies = (props: CommentRepliesProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-6 border-l border-l-base-400 pl-3 sm:pl-4 md:pl-5"
      )}
    >
      {props.replies.map(commentReply => {
        // this key is not unique
        return (
          <Comment
            key={commentReply.user.username}
            replies={commentReply.replies ?? []}
            content={commentReply.content}
            user={commentReply.user}
          />
        )
      })}
    </div>
  )
}
