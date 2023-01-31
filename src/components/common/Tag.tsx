import clsx from "clsx"

interface TagProps {
  text: string
  clickable: boolean
}

const sharedClasses =
  "rounded-corners inline-block bg-base-300 py-1 px-4 text-sm font-medium capitalize text-primary-600"

export const Tag = (props: TagProps) => {
  if (!props.clickable) {
    return <div className={sharedClasses}>{props.text}</div>
  }

  return (
    <button
      className={clsx(sharedClasses, "transition-colors hover:bg-primary-200")}
    >
      {props.text}
    </button>
  )
}
