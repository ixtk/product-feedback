import { BaseContainer } from "components/common/BaseContainer"
import { Comment } from "components/comment/Comment"
import { ReplyForm } from "components/comment/ReplyForm"

export const CommentChain = () => {
  return (
    <BaseContainer classExtension="flex flex-col gap-y-8">
      <h2 className="text-xl font-bold text-secondary-900">2 Comments</h2>
      <Comment />
      <Comment hasReplies={true} />
      <div className="flex flex-col gap-y-6 border-l border-l-base-400 pl-3 sm:ml-2 sm:pl-6">
        <Comment nested={true} hasReplies={true} />
        <ReplyForm replyingTo="@alen_the_marlin" />
        <Comment nested={true} hasReplies={false} />
      </div>
      <ReplyForm replyingTo="@alen_the_marlin" />
    </BaseContainer>
  )
}
