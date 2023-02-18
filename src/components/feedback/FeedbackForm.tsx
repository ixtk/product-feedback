import { SelectList } from "components/input/SelectList"
import { FeedbackFormFooter } from "components/feedback/FeedbackFormFooter"
import { FeedbackFormHeader } from "components/feedback/FeedbackFormHeader"
import { categories, statusList } from "shared/data"
import { SubmitHandler, useForm } from "react-hook-form"
import { getValidators } from "utils/validators"
import { FormError } from "components/common/FormError"

interface Inputs {
  title: string
  details: string
}

export const FeedbackForm = ({ editing }: { editing: boolean }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const submitFeedback: SubmitHandler<Inputs> = data => {
    data.title = data.title.trim()
    data.details = data.details.trim()
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(submitFeedback)}
      className="rounded-corners relative inline-block flex flex-col gap-y-5 border border-base-400 bg-base-100 p-5 shadow-sm"
    >
      <FeedbackFormHeader editing={editing} />
      <div>
        <label className="text-sm font-medium capitalize md:text-base">
          Feedback title
        </label>
        <p className="mt-1 text-secondary-700">
          Add a short, descriptive headline
        </p>
        {errors.title && (
          <FormError error={(errors.title.message as string) ?? ""} />
        )}
        <input
          type="text"
          className="mt-1"
          {...register("title", getValidators("title"))}
        />
      </div>
      <div className="flex flex-col gap-x-4 gap-y-4 sm:flex-row sm:gap-y-0">
        {errors.category && (
          <FormError error={(errors.category.message as string) ?? ""} />
        )}
        <SelectList
          control={control}
          defaultValue={categories[0]}
          name="category"
          listData={categories}
          labelText="category"
        />
        {editing && (
          <SelectList
            control={control}
            defaultValue={statusList[0]}
            name="status"
            listData={statusList}
            labelText="status"
          />
        )}
      </div>
      <div>
        <label className="text-sm font-medium capitalize md:text-base">
          Feedback details
        </label>
        <p className="mt-1 text-secondary-700">
          Include any specific comments on what should be improved, added, etc
        </p>
        {errors.details && (
          <FormError error={(errors.details.message as string) ?? ""} />
        )}
        <textarea
          className="mt-1"
          rows={6}
          {...register("details", getValidators("details"))}
        />
      </div>
      <FeedbackFormFooter editing={editing} />
    </form>
  )
}
