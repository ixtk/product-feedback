import { BaseContainer } from "components/common/BaseContainer"
import { Comment } from "components/comment/Comment"
import clsx from "clsx"
import { CommentReplies } from "components/comment/CommentReplies"
import { demoCommentData } from "shared/data.js"

export const CommentChain = () => {
  return (
    <BaseContainer classExtension="flex flex-col gap-y-8">
      <h2 className="text-xl font-bold text-secondary-900">2 Comments</h2>
      <Comment
        content={demoCommentData.content}
        user={demoCommentData.user}
        classExtension={clsx(
          demoCommentData.replies.length > 0
            ? "border-b-0"
            : "border-b border-b-base-400 pb-5 last-of-type:border-0 last-of-type:pb-0"
        )}
      />
      <CommentReplies replies={demoCommentData.replies} />
    </BaseContainer>
  )
}
