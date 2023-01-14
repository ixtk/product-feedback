import { Button } from "components/common/Button"

export const ReplyForm = ({ replyingTo }: { replyingTo: string }) => {
  return (
    <div className="mb-5 flex flex-col gap-y-3">
      <textarea
        className="rounded-corners w-full border-0 bg-base-300 p-3"
        rows={4}
        placeholder={`Reply to ${replyingTo}...`}
      ></textarea>
      <div className="flex justify-end gap-3">
        <Button text="Cancel" variant="danger" />
        <Button text="Post Reply" variant="accent" />
      </div>
    </div>
  )
}