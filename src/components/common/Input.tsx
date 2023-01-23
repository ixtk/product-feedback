import clsx from "clsx"

export const TextField = () => {
  return (
    <input
      type="text"
      className="rounded-corners mt-2 w-full border-0 bg-base-300 p-3 outline-primary-600"
    />
  )
}

export const Textarea = () => {
  return (
    <textarea
      className="rounded-corners mt-2 w-full border-0 bg-base-300 p-3 outline-primary-600"
      rows={7}
    />
  )
}

export const Select = () => {
  return (
    <select className="rounded-corners mt-2 w-full border-0 bg-base-300 p-3 outline-primary-600">
      <option value="">demo</option>
    </select>
  )
}

interface WrappedComponentProps {
  // eslint-disable-next-line no-undef
  children?: React.ReactNode
  labelText: string
  value?: string
  textLg?: boolean
}

// eslint-disable-next-line no-undef
export const withLabel = (Component: React.FunctionComponent) => {
  return function WrappedComponent(props: WrappedComponentProps) {
    return (
      <label
        className={clsx("flex flex-col", props.textLg ? "text-lg" : "text-sm")}
      >
        <span className="mb-1 font-semibold capitalize">{props.labelText}</span>
        {props.children}
        <Component />
      </label>
    )
  }
}
