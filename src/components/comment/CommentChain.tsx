import { BaseContainer } from "components/common/BaseContainer"
import { Comment } from "components/comment/Comment"
import { Comment as CommentType } from "shared/types"
import { Dispatch, SetStateAction } from "react"
import clsx from "clsx"

interface CommentChainProps {
  feedbackId: string
  comments: CommentType[]
  commentCount: number
  setCommentCount: Dispatch<SetStateAction<number>>
}

export const CommentChain = (props: CommentChainProps) => {
  const commentElements = props.comments.map(comment => {
    return (
      <Comment
        key={comment.id}
        content={comment.content}
        user={comment.user}
        replies={comment?.replies ?? []}
        setCommentCount={props.setCommentCount}
      />
    )
  })

  return (
    <BaseContainer>
      <h2
        className={clsx(
          props.comments.length > 0 && "mb-5",
          "text-lg font-bold text-secondary-900"
        )}
      >
        {props.comments.length === 0 ? (
          <span>No comments</span>
        ) : (
          <span>{props.commentCount} Comment(s)</span>
        )}
      </h2>
      <div className="flex flex-col gap-y-6">{commentElements}</div>
    </BaseContainer>
  )
}
