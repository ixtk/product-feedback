import { User } from "shared/types"

interface CommentHeaderProps {
  user: User
}

export const CommentHeader = ({ user }: CommentHeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-x-2 md:gap-x-4">
      {/* temporary placeholder for image */}
      <div className="col-start-1 h-10 w-10 rounded-full bg-secondary-700"></div>
      <address className="flex-1 not-italic">
        <h3 className="font-semibold">{user.name}</h3>
        <span className="text-secondary-700">@{user.username}</span>
      </address>
      <button className="self-start pb-2 pl-2 font-semibold text-primary-600">
        Reply
      </button>
    </header>
  )
}
