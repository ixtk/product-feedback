import { SelectList } from "components/input/SelectList"
import { FeedbackFormFooter } from "components/feedback/FeedbackFormFooter"
import { FeedbackFormHeader } from "components/feedback/FeedbackFormHeader"
import { categories, statusList } from "shared/data"
import { useForm } from "react-hook-form"
import { getValidators } from "utils/validators"
import { FormError } from "components/common/FormError"
import { useRouter } from "next/router"
import { getFeedback } from "utils/data"
import { useEffect } from "react"

export const FeedbackForm = ({ editing }: { editing: boolean }) => {
  const router = useRouter()
  const { id } = router.query
  const feedbackData = getFeedback(id as string)
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm()

  const submitFeedback = handleSubmit(data => {
    data.title = data.title.trim()
    data.description = data.description.trim()
    console.log(data)
  })

  useEffect(() => {
    if (!router.isReady) return
    if (!editing) return

    reset({
      title: editing ? feedbackData.title : "",
      category: editing ? feedbackData.category : categories[0],
      status: editing ? feedbackData.status : statusList[0],
      description: editing ? feedbackData.description : ""
    })
  }, [router, editing, feedbackData, reset])

  return (
    <form
      onSubmit={submitFeedback}
      className="rounded-corners relative inline-block flex flex-col gap-y-5 border border-base-400 bg-base-100 p-5 shadow-sm"
    >
      <FeedbackFormHeader
        feedbackTitle={editing ? feedbackData?.title ?? "" : ""}
      />
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
          defaultValue={editing ? feedbackData?.title ?? "" : ""}
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
        {errors.description && (
          <FormError error={(errors.description.message as string) ?? ""} />
        )}
        <textarea
          className="mt-1"
          rows={6}
          defaultValue={editing ? feedbackData?.description ?? "" : ""}
          {...register("description", getValidators("description"))}
        />
      </div>
      <FeedbackFormFooter editing={editing} />
    </form>
  )
}
