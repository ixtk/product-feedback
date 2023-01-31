import Link from "next/link"
import ArrowIcon from "assets/icons/arrow.svg"

export const HomeLink = () => {
  return (
    <Link href="/" className="flex items-center gap-x-2 hover:underline">
      <ArrowIcon className="rotate-90" />
      <span className="text-sm font-medium sm:text-base">Home</span>
    </Link>
  )
}
