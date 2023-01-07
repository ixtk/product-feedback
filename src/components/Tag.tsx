export const Tag = ({ text }: { text: string }) => {
  return (
    <button className="rounded-xl bg-base-300 text-primary-600 text-sm py-2 px-4 font-bold">
      {text}
    </button>
  )
}
