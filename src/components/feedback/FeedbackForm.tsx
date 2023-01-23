import { Select, Textarea, TextField, withLabel } from "components/common/Input"
import { FeedbackFormFooter } from "components/feedback/FeedbackFormFooter"
import { FeedbackFormHeader } from "components/feedback/FeedbackFormHeader"

export const FeedbackForm = ({ editing }: { editing: boolean }) => {
  const TitleField = withLabel(TextField)
  const CategoryField = withLabel(Select)
  const StatusField = withLabel(Select)
  const DetailsField = withLabel(Textarea)

  return (
    <form className="rounded-corners relative my-5 inline-block flex flex-col gap-y-5 bg-base-100 p-5">
      <FeedbackFormHeader editing={editing} />
      <TitleField labelText="feedback title">
        <span className="text-secondary-700">
          Add a short, descriptive headline
        </span>
      </TitleField>
      <CategoryField labelText="category" />
      {editing && <StatusField labelText="Status" />}
      <DetailsField labelText="feedback details">
        <span className="text-secondary-700">
          Include any specific comments on what should be improved, added, etc.
        </span>
      </DetailsField>
      <FeedbackFormFooter editing={editing} />
    </form>
  )
}
