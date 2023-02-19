import EditIcon from "assets/icons/edit-feedback.svg"
import NewIcon from "assets/icons/new-feedback.svg"

export const FeedbackFormHeader = ({
  feedbackTitle
}: {
  feedbackTitle?: string
}) => {
  return (
    <header>
      <div className="absolute top-0 right-5 -translate-y-1/2">
        {feedbackTitle ? <EditIcon /> : <NewIcon />}
      </div>
      <h1 className="mt-5 text-xl font-bold text-secondary-800">
        {feedbackTitle ? `Editing '${feedbackTitle}'` : "Create new feedback"}
      </h1>
    </header>
  )
}
