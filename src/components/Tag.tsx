export const Tag = ({
  text,
  clickable
}: {
  text: string
  clickable: boolean
}) => {
  if (!clickable) {
    return (
      <div className="rounded-lg inline-block bg-base-300 text-primary-600 text-sm py-1 px-4 font-semibold">
        {text}
      </div>
    )
  }
  return (
    <button className="rounded-lg bg-base-300 text-primary-600 text-sm py-1 px-4 font-semibold">
      {text}
    </button>
  )
}
