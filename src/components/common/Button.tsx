import clsx from "clsx"
import Link from "next/link"
import ArrowIcon from "assets/icons/arrow.svg"
import React from "react"
import { useRouter } from "next/router"

interface ButtonProps {
  text: string
  variant: "accent" | "primary" | "neutral" | "danger"
}

interface LinkButtonProps extends ButtonProps {
  href: string
}

const sharedClasses = (variant: string) => {
  return clsx(
    "rounded-corners px-4 py-2 text-sm font-bold text-base-100",
    variant === "accent" && "bg-accentPrimary",
    variant === "primary" && "bg-primary-600",
    variant === "neutral" && "bg-secondary-900",
    variant === "danger" && "bg-danger"
  )
}

export const Button = (props: ButtonProps) => {
  return <button className={sharedClasses(props.variant)}>{props.text}</button>
}

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link className={sharedClasses(props.variant)} href={props.href}>
      {props.text}
    </Link>
  )
}

export const BackButton = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <button onClick={goBack} className="flex items-center gap-x-3 font-bold">
      <ArrowIcon className="rotate-90" />
      <span className="text-sm">Go back</span>
    </button>
  )
}
