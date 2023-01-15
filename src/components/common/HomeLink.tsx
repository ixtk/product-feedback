import Link from "next/link"
import ArrowIcon from "assets/icons/arrow.svg"
import React from "react"

export const HomeLink = () => {
  return (
    <Link href="/" className="flex items-center gap-x-2">
      <ArrowIcon className="rotate-90" />
      <span className="text-sm font-semibold">Home</span>
    </Link>
  )
}
