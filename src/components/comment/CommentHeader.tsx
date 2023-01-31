import { User } from "shared/types"

interface CommentHeaderProps {
  user: User
  showReplyForm: () => void
}

export const CommentHeader = (props: CommentHeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-x-2 md:gap-x-4">
      {/* temporary placeholder for image */}
      <div className="col-start-1 h-10 w-10 rounded-full bg-secondary-700"></div>
      <address className="flex-1 not-italic">
        <h3 className="font-medium">{props.user.name}</h3>
        <span className="text-secondary-700">@{props.user.username}</span>
      </address>
      <button
        className="self-start pb-2 pl-2 font-medium text-primary-600 hover:underline"
        onClick={props.showReplyForm}
      >
        Reply
      </button>
    </header>
  )
}
