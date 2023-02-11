import { Button } from "components/common/Button"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { CommentReply } from "shared/types"
import { getRandomId } from "utils/data"

interface ReplyFormProps {
  setReplies: Dispatch<SetStateAction<CommentReply[]>>
  replyingTo: string
  closeReplyForm: () => void
  setReplyFormVisible: any
}

export const ReplyForm = (props: ReplyFormProps) => {
  const [newReply, setNewReply] = useState("")

  const submitReply = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.setReplies((prevReplies: CommentReply[]) => {
      return [
        ...prevReplies,
        {
          id: getRandomId(),
          content: newReply,
          replyingTo: props.replyingTo,
          user: {
            image: "user-images/image-anne.jpg",
            name: "Demo User",
            username: "demouser"
          }
        }
      ]
    })
    setNewReply("")
    props.setReplyFormVisible(false)
  }

  return (
    <form className="mt-5 flex flex-col gap-y-3" onSubmit={submitReply}>
      <textarea
        rows={4}
        value={newReply}
        onChange={e => setNewReply(e.target.value)}
        placeholder={`Reply to @${props.replyingTo}...`}
        autoFocus={true}
      />
      <div className="flex justify-end gap-3">
        <Button text="Cancel" variant="danger" onClick={props.closeReplyForm} />
        <Button type="submit" text="Post Reply" variant="accent" />
      </div>
    </form>
  )
}
