import { User } from "shared/types"
import Image from "next/image"

interface CommentHeaderProps {
  user: User
  replyFormVisible: boolean
  showReplyForm: () => void
}

export const CommentHeader = (props: CommentHeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-x-2 md:gap-x-4">
      <Image
        src={`https://res.cloudinary.com/dc2c49xov/image/upload/users/${props.user.image}`}
        alt={props.user.name}
        width={80}
        height={80}
        className="col-start-1 h-10 w-10 rounded-full bg-base-400"
      />
      <address className="flex-1 not-italic">
        <h3 className="font-medium">{props.user.name}</h3>
        <span className="text-secondary-700">@{props.user.username}</span>
      </address>
      {!props.replyFormVisible && (
        <button
          className="self-start pb-2 pl-2 font-medium text-primary-600 hover:underline"
          onClick={props.showReplyForm}
        >
          Reply
        </button>
      )}
    </header>
  )
}
