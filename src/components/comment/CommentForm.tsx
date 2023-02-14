import { FormError } from "components/common/FormError"
import { useForm } from "react-hook-form"
import clsx from "clsx"

interface CommentFormProps {
  submitCallback: (data) => void
  formLabel: string
  children: React.ReactNode
  baseLabelStyle?: boolean
  nestedForm?: boolean
}

const commentFormValidators = {
  required: "This field is required",
  minLength: {
    value: 10,
    message: "Minimum of 10 characters"
  },
  maxLength: { value: 400, message: "Maximum of 400 characters" }
}

export const CommentForm = (props: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <form
      className={clsx(
        "rounded-corners flex flex-col bg-base-100",
        !props.nestedForm && "p-5"
      )}
      onSubmit={handleSubmit(props.submitCallback)}
    >
      <label htmlFor="comment" className={clsx(props.nestedForm && "mt-5")}>
        <span
          className={clsx(
            props.baseLabelStyle
              ? "text-base font-medium"
              : "text-lg font-bold",
            "mb-1 inline-block capitalize"
          )}
        >
          {props.formLabel}
        </span>
      </label>
      {errors.comment && <FormError error={errors.comment.message} />}
      <textarea
        className="my-3"
        rows={props.nestedForm ? 4 : 5}
        autoFocus={props.nestedForm}
        {...register("comment", commentFormValidators)}
      />
      {props.children}
    </form>
  )
}
