import clsx from "clsx"

export const Button = ({ text, accent }: { text: string; accent: boolean }) => {
  return (
    <button
      className={clsx(
        "rounded-xl px-4 py-3 text-sm font-bold",
        accent ? "bg-accentPrimary" : "bg-primary-600"
      )}
    >
      {text}
    </button>
  )
}
