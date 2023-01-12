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
    <div className={clsx(classExtension, "rounded-corners bg-base-100 p-5")}>
      {children}
    </div>
  )
}
