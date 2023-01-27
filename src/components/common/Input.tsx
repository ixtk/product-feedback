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

interface WrappedComponentProps {
  // eslint-disable-next-line no-undef
  children?: React.ReactNode
  labelText: string
  value?: string
}

// eslint-disable-next-line no-undef
export const withLabel = (Component: React.FunctionComponent) => {
  return function WrappedComponent(props: WrappedComponentProps) {
    return (
      <label className="flex flex-col text-sm md:text-base">
        <span className="mb-1 font-semibold capitalize">{props.labelText}</span>
        {props.children}
        <Component />
      </label>
    )
  }
}
