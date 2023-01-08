import UpvoteArrowIcon from "assets/icons/arrow.svg"

export const UpvoteButton = ({ upvoteCount }: { upvoteCount: number }) => {
  return (
    <button className="rounded-lg row-start-2 md:row-start-1 md:flex-col col-start-1 justify-self-start bg-base-300 text-secondary-900 text-sm py-2 px-4 md:px-2 font-semibold flex items-center gap-2 md:self-start">
      <UpvoteArrowIcon className="rotate-180" />
      <span className="text-secondary-800">{upvoteCount}</span>
    </button>
  )
}
