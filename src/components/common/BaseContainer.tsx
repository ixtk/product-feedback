import clsx from "clsx"

interface BaseContainerProps {
  children: React.ReactNode
  classExtension?: string
}

export const BaseContainer = (props: BaseContainerProps) => {
  return (
    <div
      className={clsx(props.classExtension, "rounded-corners bg-base-100 p-5")}
    >
      {props.children}
    </div>
  )
}
