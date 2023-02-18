import { Button, LinkButton } from "components/common/Button"

export const FeedbackFormFooter = ({ editing }: { editing: boolean }) => {
  return (
    <footer className="flex flex-col justify-end gap-y-2 gap-x-2 text-center min-[340px]:flex-row">
      {editing ? (
        <>
          <Button text="Delete" variant="danger" type="submit" />
          <Button text="Save changes" type="submit" variant="accent" />
        </>
      ) : (
        <Button text="Add Feedback" type="submit" variant="accent" />
      )}
      <LinkButton text="Cancel" variant="neutral" href="/" />
    </footer>
  )
}
