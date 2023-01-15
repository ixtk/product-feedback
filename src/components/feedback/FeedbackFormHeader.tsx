import EditIcon from "../../assets/icons/edit-feedback.svg"
import NewIcon from "assets/icons/new-feedback.svg"

export const FeedbackFormHeader = ({ editing }: { editing: boolean }) => {
  return (
    <>
      <div className="absolute top-0 right-5 -translate-y-1/2">
        {editing ? <EditIcon /> : <NewIcon />}
      </div>
      <h1 className="mt-5 text-xl font-bold text-secondary-800">
        {editing ? "Editing <feedback name>" : "Create new feedback"}
      </h1>
    </>
  )
}
