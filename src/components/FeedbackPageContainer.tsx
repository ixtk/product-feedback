import Link from "next/link"
import ArrowIcon from "assets/icons/arrow.svg"
import clsx from "clsx"
import React from "react"

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
      <div className="ml-auto mb-5 w-24 py-2 pl-2 font-bold text-secondary-700">
        <Link href="/" className="flex items-center justify-end gap-x-3">
          <ArrowIcon className="rotate-90" />
          <span className="text-sm">Go back</span>
        </Link>
      </div>
      {children}
    </div>
  )
}
