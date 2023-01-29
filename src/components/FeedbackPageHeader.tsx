import { LinkButton } from "components/common/Button"
import { HomeLink } from "components/common/HomeLink"

interface FeedbackPageHeaderProps {
  feedbackEditable?: boolean
}

export const FeedbackPageHeader = (props: FeedbackPageHeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <div className="text-secondary-900">
        <HomeLink />
      </div>
      {props.feedbackEditable ? (
        <LinkButton
          href="/feedback/1/edit"
          text="Edit feedback"
          variant="primary"
        />
      ) : (
        <span></span>
      )}
    </header>
  )
}
