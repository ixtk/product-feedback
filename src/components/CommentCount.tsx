import CommentIcon from "assets/icons/comment.svg"

export const CommentCount = ({ commentCount }: { commentCount: number }) => {
  return (
    <div className="row-start-2 flex items-center gap-x-2 justify-self-end rounded-lg py-2 text-sm font-semibold text-secondary-900 md:col-start-3 md:row-start-1 md:row-end-3">
      <CommentIcon />
      <span className="text-secondary-800">{commentCount}</span>
    </div>
  )
}
