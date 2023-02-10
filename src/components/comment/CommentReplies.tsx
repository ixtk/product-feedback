import { Comment } from "components/comment/Comment"
import { Comment as CommentType } from "shared/types"

interface CommentRepliesProps {
  replies: CommentType[]
}

export const CommentReplies = (props: CommentRepliesProps) => {
  return (
    <div className="flex flex-col gap-y-6 border-l border-l-base-400 pl-3 sm:ml-2 sm:pl-6">
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
