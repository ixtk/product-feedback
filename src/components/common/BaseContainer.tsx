import clsx from "clsx"
import React from "react"

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
