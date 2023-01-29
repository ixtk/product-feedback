import { Comment } from "components/comment/Comment"
import { BaseComment } from "shared/types"

interface CommentRepliesProps {
  replies: BaseComment[]
}

export const CommentReplies = ({ replies }: CommentRepliesProps) => {
  return (
    <div className="flex flex-col gap-y-8 border-l border-l-base-400 pl-3 sm:ml-2 sm:pl-6">
      {replies.map(commentReply => {
        // this key is not unique
        return (
          <Comment
            key={commentReply.user.username}
            content={commentReply.content}
            user={commentReply.user}
          />
        )
      })}
    </div>
  )
}
