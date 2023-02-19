import { Button, LinkButton } from "components/common/Button"

interface FeedbackFormFooterProps {
  editing: boolean
  addFeedback: any
  deleteFeedback: any
  editFeedback: any
}

export const FeedbackFormFooter = (props: FeedbackFormFooterProps) => {
  return (
    <footer className="flex flex-col justify-end gap-y-2 gap-x-2 text-center min-[340px]:flex-row">
      {props.editing ? (
        <>
          <Button
            text="Delete"
            variant="danger"
            onClick={props.deleteFeedback}
          />
          <Button
            text="Save changes"
            variant="accent"
            onClick={props.editFeedback}
          />
        </>
      ) : (
        <Button
          text="Add Feedback"
          variant="accent"
          onClick={props.addFeedback}
        />
      )}
      <LinkButton text="Cancel" variant="neutral" href="/" />
    </footer>
  )
}
