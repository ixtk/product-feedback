import { BackButton, LinkButton } from "./common/Button"
import React from "react"

interface FeedbackFormHeaderProps {
  feedbackEditable?: boolean
}

export const FeedbackFormHeader = (props: FeedbackFormHeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <BackButton />
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
