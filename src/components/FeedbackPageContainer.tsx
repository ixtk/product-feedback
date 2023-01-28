import clsx from "clsx"

interface FeedbackPageContProps {
  children: React.ReactNode
  classExtension?: string
}

export const FeedbackPageContainer = (props: FeedbackPageContProps) => {
  return (
    <div
      className={clsx(
        "mx-auto px-3 pt-6 pb-12 sm:max-w-xl",
        props.classExtension
      )}
    >
      {props.children}
    </div>
  )
}
