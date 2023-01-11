import { BaseContainer } from "components/BaseContainer"
import { Comment } from "components/Comment"

export const CommentChain = () => {
  return (
    <BaseContainer classExtension="flex flex-col gap-y-8">
      <h2 className="text-xl font-bold text-secondary-900">2 Comments</h2>
      <Comment />
      <Comment hasReplies={true} />
      <div className="ml-2 flex flex-col gap-y-6 border-l border-l-base-400 pl-6">
        <Comment nested={true} hasReplies={true} />
        <Comment nested={true} hasReplies={false} />
      </div>
    </BaseContainer>
  )
}
