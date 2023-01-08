import React from "react"
import clsx from "clsx"

export const BaseContainer = ({
  children,
  classExtension
}: {
  children: React.ReactNode
  classExtension?: string
}) => {
  return (
    <div className={clsx(classExtension, "p-5 rounded-xl bg-base-100")}>
      {children}
    </div>
  )
}
