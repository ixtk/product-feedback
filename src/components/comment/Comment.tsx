import { CommentHeader } from "components/comment/CommentHeader"
import { BaseComment, Comment as CommentType } from "shared/types"
import { ReplyForm } from "components/comment/ReplyForm"
import { useState } from "react"
import { CommentReplies } from "components/comment/CommentReplies"
import clsx from "clsx"

interface CommentProps extends BaseComment {
  replies: CommentType[]
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
      <article
        className={clsx(
          replies.length > 0
            ? "border-b-0 pb-6"
            : "border-b border-b-base-400 pb-6 group-last-of-type:border-0 group-last-of-type:pb-0"
        )}
      >
        <CommentHeader user={props.user} showReplyForm={showReplyForm} />
        <p className="mt-3 text-secondary-700 md:ml-12 md:ml-14">
          {props.content}
        </p>
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
