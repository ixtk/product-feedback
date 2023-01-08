import CommentIcon from "assets/icons/comment.svg"

export const CommentCount = ({ commentCount }: { commentCount: number }) => {
  return (
    <div className="justify-self-end row-start-2 md:col-start-3 md:row-start-1 md:row-end-3 rounded-lg text-secondary-900 text-sm py-2 font-semibold flex items-center gap-x-2">
      <CommentIcon />
      <span className="text-secondary-800">{commentCount}</span>
    </div>
  )
}
