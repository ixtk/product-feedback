import CommentIcon from "assets/icons/comment.svg"
import Link from "next/link"

export const CommentCount = ({ commentCount }: { commentCount: number }) => {
  return (
    <Link
      href="/feedback/1"
      className="row-start-2 flex items-center gap-x-2 justify-self-end py-2 text-sm font-semibold text-secondary-900 md:col-start-3 md:row-start-1 md:row-end-3"
    >
      <CommentIcon />
      <span className="text-secondary-800">{commentCount}</span>
    </Link>
  )
}
