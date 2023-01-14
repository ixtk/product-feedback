import { BackButton, LinkButton } from "./common/Button"
import React from "react"

export const FeedbackFormHeader = ({
  feedbackEditable = false
}: {
  feedbackEditable?: boolean
}) => {
  return (
    <header className="flex items-center justify-between">
      <BackButton />
      {feedbackEditable ? (
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
