import UpvoteArrowIcon from "assets/icons/arrow.svg"
import clsx from "clsx"
import { useEffect, useState } from "react"

interface UpvoteButtonProps {
  upvoteCount: number
  onRoadmapCard: boolean
}

export const UpvoteButton = ({
  onRoadmapCard = false,
  ...props
}: UpvoteButtonProps) => {
  const [upvoteCount, setUpvoteCount] = useState(props.upvoteCount)
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    setUpvoteCount(props.upvoteCount)
  }, [props.upvoteCount])

  const toggleUpvote = () => {
    if (selected) {
      setUpvoteCount(prevCount => prevCount - 1)
    } else {
      setUpvoteCount(prevCount => prevCount + 1)
    }
    setSelected(prevUpvoted => !prevUpvoted)
  }

  return (
    <button
      aria-pressed={selected}
      onClick={toggleUpvote}
      className={clsx(
        "rounded-corners col-start-1 row-start-2 flex items-center gap-2 justify-self-start border border-primary-200 py-2 px-4 text-sm font-medium transition-colors duration-100",
        !onRoadmapCard && "md:w-11 md:flex-col md:self-start md:px-2",
        selected
          ? "bg-primary-600 text-base-100 hover:bg-primary-500"
          : "bg-base-300 text-secondary-900 hover:bg-primary-200"
      )}
    >
      <UpvoteArrowIcon
        className={clsx("rotate-180", !selected && "text-primary-600")}
      />
      <span className="font-bold">{upvoteCount}</span>
    </button>
  )
}
