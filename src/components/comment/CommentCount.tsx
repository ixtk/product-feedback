import CommentIcon from "assets/icons/comment.svg"

interface CommentCountProps {
  commentCount: number
}

export const CommentCount = (props: CommentCountProps) => {
  return (
    <div className="row-start-2 flex items-center gap-x-2 justify-self-end py-2 text-sm font-medium text-secondary-900">
      <CommentIcon />
      <span className="text-secondary-800">{props.commentCount}</span>
    </div>
  )
}
