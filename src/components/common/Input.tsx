export const TextField = () => {
  return (
    <input
      type="text"
      className="rounded-corners w-full border-0 bg-base-300 p-3 outline-primary-600"
    />
  )
}

export const Textarea = () => {
  return (
    <textarea
      className="rounded-corners w-full border-0 bg-base-300 p-3 outline-primary-600"
      rows={7}
    ></textarea>
  )
}

export const Select = () => {
  return (
    <select className="rounded-corners w-full border-0 bg-base-300 p-3 outline-primary-600">
      <option value="">demo</option>
    </select>
  )
}

interface InputLabelProps {
  title: string
  subText?: string
}

export const InputLabel = (props: InputLabelProps) => {
  return (
    <label htmlFor="text" className="mb-4 flex flex-col text-sm">
      <span className="mb-1 font-semibold">{props.title}</span>
      <span className="text-secondary-700">{props.subText}</span>
    </label>
  )
}
