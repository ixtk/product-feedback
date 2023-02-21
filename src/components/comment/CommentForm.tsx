import { FormError } from "components/common/FormError"
import { useForm } from "react-hook-form"
import clsx from "clsx"
import { useEffect } from "react"
import { getValidators } from "utils/validators"

interface CommentFormProps {
  submitCallback: any
  formLabel: string
  children: React.ReactNode
  fieldName: string
}

export const CommentForm = ({ fieldName, ...props }: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm()

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ [fieldName]: "" })
    }
  }, [isSubmitSuccessful, reset, fieldName])

  return (
    <form
      className={clsx(
        "rounded-corners flex flex-col bg-base-100",
        fieldName === "reply" || "p-5 shadow-sm"
      )}
      onSubmit={handleSubmit(props.submitCallback)}
    >
      <label
        htmlFor={fieldName}
        className={clsx(fieldName === "reply" && "mt-5", "text-secondary-900")}
      >
        <span
          className={clsx(
            fieldName === "reply"
              ? "text-base font-medium"
              : "text-lg font-bold",
            "mb-1 inline-block capitalize"
          )}
        >
          {props.formLabel}
        </span>
      </label>
      {errors[fieldName] && (
        <FormError error={(errors[fieldName]?.message as string) ?? ""} />
      )}
      <textarea
        id={fieldName}
        className="my-3"
        rows={fieldName === "reply" ? 4 : 5}
        autoFocus={fieldName === "reply"}
        {...register(fieldName, getValidators(fieldName))}
      />
      {props.children}
    </form>
  )
}
