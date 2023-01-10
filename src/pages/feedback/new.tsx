import Link from "next/link"
import ArrowIcon from "assets/icons/arrow.svg"
import { FeedbackForm } from "components/FeedbackForm"

const NewFeedback = () => {
  return (
    <div className="mx-auto rounded-xl px-3 pt-6 pb-12 sm:max-w-xl">
      <div className="ml-auto mb-5 w-24 py-2 pl-2 font-bold text-secondary-700">
        <Link href="/" className="flex items-center justify-end gap-x-3">
          <ArrowIcon className="rotate-90" />
          <span className="text-sm">Go back</span>
        </Link>
      </div>
      <FeedbackForm editing={false} />
    </div>
  )
}
export default NewFeedback
