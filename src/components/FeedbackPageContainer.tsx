import clsx from "clsx"
import React from "react"
import { BackButton, Button } from "./common/Button"

export const FeedbackPageContainer = ({
  children,
  classExtension
}: {
  children: React.ReactNode
  classExtension?: string
}) => {
  return (
    <div
      className={clsx("mx-auto px-3 pt-6 pb-12 sm:max-w-xl", classExtension)}
    >
      {children}
    </div>
  )
}
