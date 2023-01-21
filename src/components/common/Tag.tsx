interface TagProps {
  text: string
  clickable: boolean
}

export const Tag = (props: TagProps) => {
  if (!props.clickable) {
    return (
      <div className="rounded-corners inline-block bg-base-300 py-1 px-4 text-sm font-semibold capitalize text-primary-600">
        {props.text}
      </div>
    )
  }

  return (
    <button className="rounded-corners bg-base-300 py-1 px-4 text-sm font-semibold capitalize text-primary-600">
      {props.text}
    </button>
  )
}
