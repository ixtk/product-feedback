import { Dispatch, SetStateAction } from "react"

interface TagButtonProps {
  text: string
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
}

export const CategoryCheckbox = (props: TagButtonProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSelectedCategories(prevState => {
      if (prevState.includes(e.target.value)) {
        return prevState.filter(category => category !== e.target.value)
      }
      return [...prevState, e.target.value]
    })
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
