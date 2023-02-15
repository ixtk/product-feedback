import { Button } from "components/common/Button"
import { Dispatch, SetStateAction } from "react"
import { CommentReply } from "shared/types"
import { getRandomId } from "utils/data"
import { CommentForm } from "components/comment/CommentForm"
import { SubmitHandler } from "react-hook-form"

interface ReplyFormProps {
  setReplies: Dispatch<SetStateAction<CommentReply[]>>
  replyingTo: string
  closeReplyForm: () => void
  setReplyFormVisible: any
  setCommentCount: Dispatch<SetStateAction<number>>
}

interface Inputs {
  reply: string
}

export const ReplyForm = (props: ReplyFormProps) => {
  const submitReply: SubmitHandler<Inputs> = data => {
    props.setReplies((prevReplies: CommentReply[]) => {
      return [
        ...prevReplies,
        {
          id: getRandomId(),
          content: data.reply,
          replyingTo: props.replyingTo,
          user: {
            image: "user-images/image-anne.jpg",
            name: "Demo User",
            username: "demouser"
          }
        }
      ]
    })
    props.setReplyFormVisible(false)
    props.setCommentCount(prevCount => prevCount + 1)
  }

  return (
    <CommentForm
      submitCallback={submitReply}
      formLabel={`replying to @${props.replyingTo}`}
      fieldName="reply"
    >
      <div className="flex justify-end gap-3">
        <Button text="Cancel" variant="danger" onClick={props.closeReplyForm} />
        <Button type="submit" text="Post Reply" variant="accent" />
      </div>
    </CommentForm>
  )
}
