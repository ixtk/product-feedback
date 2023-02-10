import { FeedbackCard } from "components/feedback/FeedbackCard"
import { Button } from "components/common/Button"
import { CommentChain } from "components/comment/CommentChain"
import { FeedbackPageHeader } from "components/FeedbackPageHeader"
import { useRouter } from "next/router"
import { getComments, getFeedback } from "utils/data"
import { Layout } from "components/Layout"
import { FormEvent, useEffect, useState } from "react"
import { Comment as CommentType } from "shared/types"

const FeedbackPage = () => {
  const router = useRouter()
  const { id: feedbackId } = router.query
  const feedbackData = getFeedback(Number(feedbackId))
  const [comments, setComments] = useState<CommentType[]>([])
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    if (router.isReady) {
      setComments(getComments(Number(feedbackId)))
    }
  }, [router.isReady, feedbackId])

  const submitComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: change user info based on current user
    setComments([
      ...comments,
      {
        id: 2,
        content: newComment,
        user: {
          image: "user-images/image-thomas.jpg",
          name: "Demo User",
          username: "demouser"
        }
      }
    ])
    setNewComment("")
  }

  return (
    <Layout pageTitle={feedbackData?.title ?? "Suggestion"}>
      <div className="mx-auto flex flex-col gap-y-5 px-3 pt-6 pb-12 md:max-w-3xl">
        <FeedbackPageHeader feedbackEditable={true} />
        <FeedbackCard {...feedbackData} renderLink={false} />
        <CommentChain feedbackId={Number(feedbackId)} comments={comments} />
        <form
          className="rounded-corners flex flex-col gap-y-5 bg-base-100 p-5 shadow-sm"
          onSubmit={submitComment}
        >
          <label>
            <span className="mb-2 inline-block text-lg font-semibold capitalize">
              add comment
            </span>
            <textarea
              rows={7}
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
            />
          </label>
          <div className="ml-auto">
            <Button text="Post Comment" variant="accent" />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default FeedbackPage
