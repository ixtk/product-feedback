import { Button, LinkButton } from "components/common/Button"

export const FeedbackFormFooter = ({ editing }: { editing: boolean }) => {
  return (
    <footer className="flex flex-col justify-end gap-y-2 gap-x-2 text-center min-[340px]:flex-row">
      {editing ? (
        <>
          <Button text="Delete" variant="danger" />
          <Button text="Save changes" variant="accent" />
        </>
      ) : (
        <Button text="Add Feedback" variant="accent" />
      )}
      <LinkButton text="Cancel" variant="neutral" href="/" />
    </footer>
  )
}
