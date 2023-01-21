import { CommentHeader } from "components/comment/CommentHeader"
import { BaseComment } from "shared/types"
import { ReplyForm } from "components/comment/ReplyForm"
import { useState } from "react"

interface CommentProps extends BaseComment {
  classExtension?: string
}

export const Comment = (props: CommentProps) => {
  const [replyFormVisible, setReplyFormVisible] = useState(false)

  const showReplyForm = () => {
    if (replyFormVisible) return
    setReplyFormVisible(true)
  }

  const closeReplyForm = () => {
    setReplyFormVisible(false)
  }

  return (
    <article className={props.classExtension}>
      <CommentHeader user={props.user} showReplyForm={showReplyForm} />
      <p className="mt-3 text-secondary-700 md:ml-12 md:ml-14">
        {props.content}
      </p>
      {replyFormVisible && (
        <ReplyForm
          replyingTo={props.user.username}
          closeReplyForm={closeReplyForm}
        />
      )}
    </article>
  )
}
