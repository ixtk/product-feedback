import { CommentHeader } from "components/comment/CommentHeader"
import { BaseComment, CommentReply } from "shared/types"
import { ReplyForm } from "components/comment/ReplyForm"
import { useState } from "react"
import { CommentReplies } from "components/comment/CommentReplies"

interface CommentProps extends BaseComment {
  replies: CommentReply[]
  classExtension?: string
}

export const Comment = (props: CommentProps) => {
  const [replyFormVisible, setReplyFormVisible] = useState(false)
  const [replies, setReplies] = useState(props.replies)

  const showReplyForm = () => {
    if (replyFormVisible) return
    setReplyFormVisible(true)
  }

  const closeReplyForm = () => {
    setReplyFormVisible(false)
  }

  return (
    <>
      <article>
        <CommentHeader user={props.user} showReplyForm={showReplyForm} />
        <p className="mt-3 text-secondary-700">{props.content}</p>
        {replyFormVisible && (
          <ReplyForm
            replyingTo={props.user.username}
            closeReplyForm={closeReplyForm}
            setReplies={setReplies}
            setReplyFormVisible={setReplyFormVisible}
          />
        )}
      </article>

      {replies.length > 0 && <CommentReplies replies={replies} />}
    </>
  )
}
