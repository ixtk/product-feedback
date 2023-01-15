import {
  InputLabel,
  Select,
  Textarea,
  TextField
} from "components/common/Input"
import { FeedbackFormFooter } from "components/feedback/FeedbackFormFooter"
import { FeedbackFormHeader } from "components/feedback/FeedbackFormHeader"

export const FeedbackForm = ({ editing }: { editing: boolean }) => {
  return (
    <form className="rounded-corners relative my-5 inline-block flex flex-col gap-y-5 bg-base-100 p-5">
      <FeedbackFormHeader editing={editing} />
      <div>
        <InputLabel
          title="Feedback title"
          subText="Add a short, descriptive headline"
        />
        <TextField />
      </div>
      <div>
        <InputLabel title="Category" />
        <Select />
      </div>
      {editing && (
        <div>
          <InputLabel title="Status" />
          <Select />
        </div>
      )}
      <div>
        <InputLabel
          title="Feedback details"
          subText="Include any specific comments on what should be improved, added,
            etc."
        />
        <Textarea />
      </div>
      <FeedbackFormFooter editing={editing} />
    </form>
  )
}
