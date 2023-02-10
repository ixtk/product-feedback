import { BaseContainer } from "components/common/BaseContainer"
import { Comment } from "components/comment/Comment"
import { getCommentCount } from "utils/data"
import { Comment as CommentType } from "shared/types"

interface CommentChainProps {
  feedbackId: number
  comments: CommentType[]
}

export const CommentChain = (props: CommentChainProps) => {
  const commentCount = getCommentCount(props.feedbackId)

  const commentElements = props.comments.map(comment => {
    return (
      <Comment
        key={comment.id}
        content={comment.content}
        user={comment.user}
        replies={comment?.replies ?? []}
      />
    )
  })

  return (
    <BaseContainer>
      <h2 className="mb-5 text-lg font-bold text-secondary-900">
        {commentCount} Comment(s)
      </h2>
      <div className="flex flex-col gap-y-6">{commentElements}</div>
    </BaseContainer>
  )
}
