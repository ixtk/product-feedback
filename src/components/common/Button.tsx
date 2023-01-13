import clsx from "clsx"
import Link from "next/link"

const sharedClasses = (variant: string) => {
  return clsx(
    "rounded-corners px-4 py-3 text-sm font-bold text-base-100",
    variant === "accent" && "bg-accentPrimary",
    variant === "primary" && "bg-primary-600",
    variant === "neutral" && "bg-secondary-900",
    variant === "danger" && "bg-danger"
  )
}

type ButtonVariants = "accent" | "primary" | "neutral" | "danger"
export const Button = ({
  text,
  variant
}: {
  text: string
  variant: ButtonVariants
}) => {
  return <button className={sharedClasses(variant)}>{text}</button>
}

export const LinkButton = ({
  text,
  variant,
  href
}: {
  text: string
  variant: ButtonVariants
  href: string
}) => {
  return (
    <Link className={sharedClasses(variant)} href={href}>
      {text}
    </Link>
  )
}
