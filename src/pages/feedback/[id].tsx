import { FeedbackCard } from "components/feedback/FeedbackCard"
import { CommentChain } from "components/comment/CommentChain"
import { FeedbackPageHeader } from "components/FeedbackPageHeader"
import { useRouter } from "next/router"
import {
  getCommentCount,
  getComments,
  getFeedback,
  getRandomId
} from "utils/data"
import { Layout } from "components/Layout"
import { useContext, useEffect, useState } from "react"
import { Comment as CommentType } from "shared/types"
import { CommentForm } from "components/comment/CommentForm"
import { Button } from "components/common/Button"
import { SubmitHandler } from "react-hook-form"
import { currentUser } from "shared/data"
import { FeedbackContext } from "context/FeedbackList"

interface Inputs {
  comment: string
}

const FeedbackPage = () => {
  const router = useRouter()
  const { id } = router.query
  const feedbackId = id as string
  const { feedbacks } = useContext(FeedbackContext)
  const feedbackData = getFeedback(feedbacks, feedbackId)
  const [comments, setComments] = useState<CommentType[]>([])
  const [commentCount, setCommentCount] = useState(0)

  useEffect(() => {
    if (router.isReady) {
      setComments(getComments(feedbacks, feedbackId))
      setCommentCount(getCommentCount(feedbacks, feedbackId))
    }
  }, [router.isReady, feedbackId, feedbacks])

  const submitComment: SubmitHandler<Inputs> = data => {
    setComments([
      {
        id: getRandomId(),
        content: data.comment,
        user: currentUser
      },
      ...comments
    ])
    setCommentCount(prevCount => prevCount + 1)
  }

  return (
    <Layout pageTitle={feedbackData?.title ?? "Suggestion"}>
      <div className="mx-auto flex flex-col gap-y-5 px-3 pt-6 pb-12 md:max-w-3xl">
        <FeedbackPageHeader feedbackEditable={true} feedbackId={feedbackId} />
        <FeedbackCard
          {...feedbackData}
          renderLink={false}
          showCommentCount={false}
        />
        <CommentForm
          submitCallback={submitComment}
          formLabel="add comment"
          fieldName="comment"
        >
          <div className="ml-auto">
            <Button type="submit" text="Post Comment" variant="accent" />
          </div>
        </CommentForm>
        <CommentChain
          setCommentCount={setCommentCount}
          commentCount={commentCount}
          feedbackId={feedbackId}
          comments={comments}
        />
      </div>
    </Layout>
  )
}

export default FeedbackPage
