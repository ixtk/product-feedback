import { Textarea, TextField, withLabel } from "components/common/Input"
import { SelectInput } from "components/common/SelectInput"
import { FeedbackFormFooter } from "components/feedback/FeedbackFormFooter"
import { FeedbackFormHeader } from "components/feedback/FeedbackFormHeader"
import { categories, statusList } from "shared/data"

export const FeedbackForm = ({ editing }: { editing: boolean }) => {
  const TitleField = withLabel(TextField)
  const DetailsField = withLabel(Textarea)

  return (
    <form className="rounded-corners relative my-5 inline-block flex flex-col gap-y-5 bg-base-100 p-5">
      <FeedbackFormHeader editing={editing} />
      <TitleField labelText="feedback title">
        <span className="text-secondary-700">
          Add a short, descriptive headline
        </span>
      </TitleField>
      <div className="gap-x-4 sm:flex">
        <SelectInput listData={categories} labelText="categories" />
        {editing && <SelectInput listData={statusList} labelText="status" />}
      </div>
      <DetailsField labelText="feedback details">
        <span className="text-secondary-700">
          Include any specific comments on what should be improved, added, etc.
        </span>
      </DetailsField>
      <FeedbackFormFooter editing={editing} />
    </form>
  )
}
