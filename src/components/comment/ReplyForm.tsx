import { Button } from "components/common/Button"

interface ReplyFormProps {
  replyingTo: string
  closeReplyForm: () => void
}

export const ReplyForm = (props: ReplyFormProps) => {
  return (
    <div className="mt-5 flex flex-col gap-y-3">
      <textarea
        className="rounded-corners w-full border-0 bg-base-300 p-3"
        rows={4}
        placeholder={`Reply to @${props.replyingTo}...`}
      ></textarea>
      <div className="flex justify-end gap-3">
        <Button text="Cancel" variant="danger" onClick={props.closeReplyForm} />
        <Button text="Post Reply" variant="accent" />
      </div>
    </div>
  )
}
