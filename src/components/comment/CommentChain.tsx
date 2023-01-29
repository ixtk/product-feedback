import { BaseContainer } from "components/common/BaseContainer"
import { Comment } from "components/comment/Comment"
import clsx from "clsx"
import { CommentReplies } from "components/comment/CommentReplies"
import { getCommentCount, getComments } from "utils/data"

interface CommentChainProps {
  feedbackId: number
}

export const CommentChain = (props: CommentChainProps) => {
  const comments = getComments(props.feedbackId)
  const commentCount = getCommentCount(props.feedbackId)

  const commentElements = comments.map(comment => {
    return (
      <div key={comment.id} className="group">
        <Comment
          content={comment.content}
          user={comment.user}
          classExtension={clsx(
            comment.replies
              ? "border-b-0 pb-8"
              : "border-b border-b-base-400 pb-6 group-last-of-type:border-0 group-last-of-type:pb-0"
          )}
        />
        {comment.replies && <CommentReplies replies={comment.replies} />}
      </div>
    )
  })

  return (
    <BaseContainer classExtension="flex flex-col gap-y-6">
      <h2 className="text-xl font-bold text-secondary-900">
        {commentCount} Comment(s)
      </h2>
      {commentElements}
    </BaseContainer>
  )
}
