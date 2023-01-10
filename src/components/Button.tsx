import clsx from "clsx"

export const Button = ({
  text,
  variant
}: {
  text: string
  variant: "accent" | "primary" | "neutral" | "danger"
}) => {
  return (
    <button
      className={clsx(
        "rounded-xl px-4 py-3 text-sm font-bold text-base-100",
        variant === "accent" && "bg-accentPrimary",
        variant === "primary" && "bg-primary-600",
        variant === "neutral" && "bg-secondary-900",
        variant === "danger" && "bg-danger"
      )}
    >
      {text}
    </button>
  )
}
