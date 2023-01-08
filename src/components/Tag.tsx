export const Tag = ({ text }: { text: string }) => {
  return (
    <button className="rounded-lg bg-base-300 text-primary-600 text-sm py-1 px-4 font-semibold">
      {text}
    </button>
  )
}
