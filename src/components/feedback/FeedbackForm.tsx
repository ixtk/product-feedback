import { Textarea, TextField, withLabel } from "components/input/Input"
import { SelectList } from "components/input/SelectList"
import { FeedbackFormFooter } from "components/feedback/FeedbackFormFooter"
import { FeedbackFormHeader } from "components/feedback/FeedbackFormHeader"
import { categories, statusList } from "shared/data"

export const FeedbackForm = ({ editing }: { editing: boolean }) => {
  const TitleField = withLabel(TextField)
  const DetailsField = withLabel(Textarea)

  return (
    <form className="rounded-corners relative inline-block flex flex-col gap-y-5 border border-base-400 bg-base-100 p-5 shadow-sm">
      <FeedbackFormHeader editing={editing} />
      <TitleField labelText="feedback title">
        <span className="mb-3 text-secondary-700">
          Add a short, descriptive headline
        </span>
      </TitleField>
      <div className="flex flex-col gap-x-4 gap-y-4 sm:flex-row sm:gap-y-0">
        <SelectList listData={categories} labelText="category" />
        {editing && <SelectList listData={statusList} labelText="status" />}
      </div>
      <DetailsField labelText="feedback details">
        <span className="mb-3 text-secondary-700">
          Include any specific comments on what should be improved, added, etc.
        </span>
      </DetailsField>
      <FeedbackFormFooter editing={editing} />
    </form>
  )
}
