import { CommentHeader } from "components/comment/CommentHeader"
import { BaseComment, CommentReply } from "shared/types"
import { ReplyForm } from "components/comment/ReplyForm"
import { Dispatch, SetStateAction, useState } from "react"
import clsx from "clsx"

interface CommentProps extends BaseComment {
  replies: CommentReply[]
  classExtension?: string
  setCommentCount: Dispatch<SetStateAction<number>>
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
        <CommentHeader
          user={props.user}
          replyFormVisible={replyFormVisible}
          showReplyForm={showReplyForm}
        />
        <p className="mt-3 text-secondary-700">{props.content}</p>
        {replyFormVisible && (
          <ReplyForm
            replyingTo={props.user.username}
            closeReplyForm={closeReplyForm}
            setReplies={setReplies}
            setReplyFormVisible={setReplyFormVisible}
            setCommentCount={props.setCommentCount}
          />
        )}
      </article>

      {replies.length > 0 && (
        <div
          className={clsx(
            "flex flex-col gap-y-6 border-l border-l-base-400 pl-3 sm:pl-4 md:pl-5"
          )}
        >
          {replies.map(commentReply => {
            return (
              <Comment
                key={commentReply.id}
                replies={commentReply.replies ?? []}
                content={commentReply.content}
                user={commentReply.user}
                setCommentCount={props.setCommentCount}
              />
            )
          })}
        </div>
      )}
    </>
  )
}
