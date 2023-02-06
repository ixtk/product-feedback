export const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-corners inline-block bg-base-300 py-1 px-3 text-sm font-medium capitalize text-primary-600">
      {text}
    </div>
  )
}
