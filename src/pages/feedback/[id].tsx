import { FeedbackCard } from "components/feedback/FeedbackCard"
import { Button } from "components/common/Button"
import { CommentChain } from "components/comment/CommentChain"
import { FeedbackPageHeader } from "components/FeedbackPageHeader"
import { useRouter } from "next/router"
import { getComments, getFeedback, getRandomId } from "utils/data"
import { Layout } from "components/Layout"
import { useEffect, useState } from "react"
import { Comment as CommentType } from "shared/types"
import { useForm } from "react-hook-form"
import { FormError } from "components/common/FormError"

const FeedbackPage = () => {
  const router = useRouter()
  const { id } = router.query
  const feedbackId = id as string
  const feedbackData = getFeedback(feedbackId)
  const [comments, setComments] = useState<CommentType[]>([])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

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
        <form
          className="rounded-corners flex flex-col bg-base-100 p-5 shadow-sm"
          onSubmit={handleSubmit(submitComment)}
        >
          <label htmlFor="comment" className="col-span-full">
            <span className="mb-1 inline-block text-lg font-semibold capitalize">
              add comment
            </span>
          </label>
          {errors.comment && <FormError error={errors.comment.message} />}
          <textarea
            className="my-3"
            rows={5}
            {...register("comment", {
              required: "This field is required",
              minLength: {
                value: 10,
                message: "Minimum of 10 characters"
              },
              maxLength: { value: 400, message: "Maximum of 400 characters" }
            })}
          />
          <div className="ml-auto">
            <Button type="submit" text="Post Comment" variant="accent" />
          </div>
        </form>
        <CommentChain feedbackId={feedbackId} comments={comments} />
      </div>
    </Layout>
  )
}

export default FeedbackPage
