import { FeedbackCard } from "components/feedback/FeedbackCard"
import { CommentChain } from "components/comment/CommentChain"
import { FeedbackPageHeader } from "components/FeedbackPageHeader"
import { useRouter } from "next/router"
import { getComments, getFeedback, getRandomId } from "utils/data"
import { Layout } from "components/Layout"
import { useEffect, useState } from "react"
import { Comment as CommentType } from "shared/types"
import { CommentForm } from "components/comment/CommentForm"
import { Button } from "components/common/Button"
import { BaseContainer } from "../../components/common/BaseContainer"

const FeedbackPage = () => {
  const router = useRouter()
  const { id } = router.query
  const feedbackId = id as string
  const feedbackData = getFeedback(feedbackId)
  const [comments, setComments] = useState<CommentType[]>([])

  useEffect(() => {
    if (router.isReady) {
      setComments(getComments(feedbackId))
    }
  }, [router.isReady, feedbackId])

  const submitComment = data => {
    // TODO: change user info based on current user
    setComments([
      {
        id: getRandomId(),
        content: data.comment,
        user: {
          image: "user-images/image-thomas.jpg",
          name: "Demo User",
          username: "demouser"
        }
      },
      ...comments
    ])
  }

  return (
    <Layout pageTitle={feedbackData?.title ?? "Suggestion"}>
      <div className="mx-auto flex flex-col gap-y-5 px-3 pt-6 pb-12 md:max-w-3xl">
        <FeedbackPageHeader feedbackEditable={true} />
        <FeedbackCard {...feedbackData} renderLink={false} />
        <CommentForm submitCallback={submitComment} formLabel="add comment">
          <div className="ml-auto">
            <Button type="submit" text="Post Comment" variant="accent" />
          </div>
        </CommentForm>
        <CommentChain feedbackId={feedbackId} comments={comments} />
      </div>
    </Layout>
  )
}

export default FeedbackPage
