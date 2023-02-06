import { Dispatch, SetStateAction } from "react"

interface TagButtonProps {
  text: string
  setFeedbackCategory: Dispatch<SetStateAction<string>>
}

export const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-corners inline-block bg-base-300 py-1 px-3 text-sm font-medium capitalize text-primary-600">
      {text}
    </div>
  )
}

export const TagButton = (props: TagButtonProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setFeedbackCategory(e.target.value)
  }

  return (
    <>
      <label
        htmlFor={props.text}
        className="rounded-corners flex cursor-pointer items-center justify-center gap-x-2 border border-primary-200 bg-base-300 px-2 py-1 text-sm font-medium capitalize text-primary-600"
      >
        {props.text}
        <input
          type="checkbox"
          id={props.text}
          className="h-3.5 w-3.5 cursor-pointer rounded-sm border-base-500 text-primary-500"
          value={props.text}
          name="category"
          onChange={handleChange}
        />
      </label>
    </>
  )
}
