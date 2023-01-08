export const Tag = ({
  text,
  clickable
}: {
  text: string
  clickable: boolean
}) => {
  if (!clickable) {
    return (
      <div className="inline-block rounded-lg bg-base-300 py-1 px-4 text-sm font-semibold text-primary-600">
        {text}
      </div>
    )
  }
  return (
    <button className="rounded-lg bg-base-300 py-1 px-4 text-sm font-semibold text-primary-600">
      {text}
    </button>
  )
}
