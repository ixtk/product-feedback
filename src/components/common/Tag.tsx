import clsx from "clsx"

interface TagButtonProps {
  text: string
}

const sharedClasses =
  "rounded-corners inline-block bg-base-300 py-1 px-4 text-sm font-medium capitalize text-primary-600"

export const Tag = ({ text }: { text: string }) => {
  return <div className={sharedClasses}>{text}</div>
}

export const TagButton = (props: TagButtonProps) => {
  return (
    <button
      className={clsx(
        sharedClasses,
        "border border-primary-200 transition-colors duration-100 hover:bg-primary-200"
      )}
    >
      {props.text}
    </button>
  )
}
