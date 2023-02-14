import { Button } from "components/common/Button"
import { Dispatch, SetStateAction } from "react"
import { CommentReply } from "shared/types"
import { getRandomId } from "utils/data"
import { useForm } from "react-hook-form"
import { FormError } from "components/common/FormError"

interface ReplyFormProps {
  setReplies: Dispatch<SetStateAction<CommentReply[]>>
  replyingTo: string
  closeReplyForm: () => void
  setReplyFormVisible: any
}

export const ReplyForm = (props: ReplyFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submitReply = data => {
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
  }

  return (
    <form className="mt-5 flex flex-col" onSubmit={handleSubmit(submitReply)}>
      <label className="mb-1 font-medium text-secondary-900">
        Replying to @{props.replyingTo}
      </label>
      {errors.reply && <FormError error={errors.reply.message} />}
      <textarea
        className="my-3"
        rows={4}
        autoFocus={true}
        {...register("reply", {
          required: "This field is required",
          minLength: {
            value: 5,
            message: "Minimum of 5 characters"
          },
          maxLength: {
            value: 400,
            message: "Maximum of 400 characters"
          }
        })}
      />
      <div className="flex justify-end gap-3">
        <Button text="Cancel" variant="danger" onClick={props.closeReplyForm} />
        <Button type="submit" text="Post Reply" variant="accent" />
      </div>
    </form>
  )
}
