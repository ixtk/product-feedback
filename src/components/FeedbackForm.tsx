import { Button } from "components/Button"
import EditIcon from "assets/icons/edit-feedback.svg"
import NewIcon from "assets/icons/new-feedback.svg"

export const FeedbackForm = ({ editing }: { editing: boolean }) => {
  return (
    <form className="relative inline-block flex flex-col gap-y-5 rounded-xl bg-base-100 p-5">
      <div className="absolute top-0 -translate-y-1/2">
        {editing ? <EditIcon /> : <NewIcon />}
      </div>
      <h1 className="mt-5 text-xl font-bold text-secondary-800">
        {editing ? "Editing <feedback name>" : "Create new feedback"}
      </h1>
      <div>
        <label htmlFor="text" className="mb-4 flex flex-col text-sm">
          <span className="mb-1 font-semibold">Feedback title</span>
          <span className="text-secondary-700">
            Add a short, descriptive headline
          </span>
        </label>
        <input
          type="text"
          id="text"
          className="w-full rounded-xl bg-base-300 p-3 outline-primary-600"
        />
      </div>
      <div>
        <label htmlFor="category" className="mb-4 block text-sm font-semibold">
          Category
        </label>
        <select
          id="category"
          className="w-full rounded-xl bg-base-300 p-3 outline-primary-600"
        >
          <option value="">demo</option>
        </select>
      </div>
      {editing && (
        <div>
          <label htmlFor="status" className="mb-4 block text-sm font-semibold">
            Status
          </label>
          <select
            id="status"
            className="w-full rounded-xl bg-base-300 p-3 outline-primary-600"
          >
            <option value="">demo status</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="details" className="mb-4 flex flex-col text-sm">
          <span className="mb-1 font-semibold">Feedback details</span>
          <span className="text-secondary-700">
            Include any specific comments on what should be improved, added,
            etc.
          </span>
        </label>
        <textarea
          cols={30}
          rows={7}
          id="details"
          className="w-full rounded-xl bg-base-300 p-3 outline-primary-600"
        ></textarea>
      </div>
      <div className="flex flex-col justify-end gap-y-2 gap-x-2 min-[340px]:flex-row">
        {editing ? (
          <>
            <Button text="Delete" variant="danger" />
            <Button text="Save changes" variant="accent" />
          </>
        ) : (
          <Button text="Add Feedback" variant="accent" />
        )}
        <Button text="Cancel" variant="neutral" />
      </div>
    </form>
  )
}
