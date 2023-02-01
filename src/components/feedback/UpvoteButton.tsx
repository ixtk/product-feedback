import UpvoteArrowIcon from "assets/icons/arrow.svg"
import clsx from "clsx"

interface UpvoteButtonProps {
  upvoteCount: number
  onRoadmapCard: boolean
}

export const UpvoteButton = ({
  onRoadmapCard = false,
  ...props
}: UpvoteButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-corners col-start-1 row-start-2 flex items-center gap-2 justify-self-start border border-primary-200 bg-base-300 py-2 px-4 text-sm font-medium text-secondary-900 transition-colors duration-100 hover:bg-primary-200",
        !onRoadmapCard && "md:w-11 md:flex-col md:self-start md:px-2"
      )}
    >
      <UpvoteArrowIcon className="rotate-180 text-primary-600" />
      <span className="font-bold text-secondary-800">{props.upvoteCount}</span>
    </button>
  )
}
