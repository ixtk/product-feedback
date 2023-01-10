import Link from "next/link"
import ArrowIcon from "assets/icons/arrow.svg"
import { Button } from "../../components/Button"

const NewFeedback = () => {
  return (
    <div className="mx-auto rounded-xl px-3 py-6">
      <div className="ml-auto mb-5 w-24 py-2 pl-2 font-bold text-secondary-700">
        <Link href="/" className="flex items-center justify-end gap-x-3">
          <ArrowIcon className="rotate-90" />
          <span className="text-sm">Go back</span>
        </Link>
      </div>
      <form className="inline-block flex flex-col gap-y-5 rounded-xl bg-base-100 p-5">
        <h1 className="text-xl font-bold text-secondary-800">
          Create new feedback
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
          <label
            htmlFor="category"
            className="mb-4 block text-sm font-semibold"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full rounded-xl bg-base-300 p-3 outline-primary-600"
          >
            <option value="">demo</option>
          </select>
        </div>
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
        <Button text="Add Feedback" variant="accent" />
        <Button text="Cancel" variant="neutral" />
      </form>
    </div>
  )
}
export default NewFeedback
