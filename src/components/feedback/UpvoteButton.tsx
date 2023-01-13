import UpvoteArrowIcon from "assets/icons/arrow.svg"

export const UpvoteButton = ({ upvoteCount }: { upvoteCount: number }) => {
  return (
    <button className="rounded-corners col-start-1 row-start-2 flex items-center gap-2 justify-self-start bg-base-300 py-2 px-4 text-sm font-semibold text-secondary-900 md:row-start-1 md:flex-col md:self-start md:px-2">
      <UpvoteArrowIcon className="rotate-180 text-primary-600" />
      <span className="font-bold text-secondary-800">{upvoteCount}</span>
    </button>
  )
}
