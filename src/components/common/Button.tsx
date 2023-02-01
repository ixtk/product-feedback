import clsx from "clsx"
import Link from "next/link"

interface ButtonProps {
  text: string
  variant: "accent" | "primary" | "neutral" | "danger"
  onClick?: () => void
}

interface LinkButtonProps extends ButtonProps {
  href: string
}

const sharedClasses = (variant: string) => {
  return clsx(
    "rounded-corners px-4 transition-colors duration-100 py-2 text-sm md:text-base font-medium text-base-100 inline-block",
    variant === "accent" && "bg-accentPrimary-800 hover:bg-accentPrimary-900",
    variant === "primary" && "bg-primary-600 hover:bg-primary-700",
    variant === "neutral" && "bg-secondary-900 hover:bg-secondary-700",
    variant === "danger" && "bg-danger-800 hover:bg-danger-900"
  )
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={sharedClasses(props.variant)} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link className={sharedClasses(props.variant)} href={props.href}>
      {props.text}
    </Link>
  )
}
