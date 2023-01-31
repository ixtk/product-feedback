export const TextField = () => {
  return <input type="text" />
}

export const Textarea = () => {
  return <textarea rows={7} />
}

interface WrappedComponentProps {
  children?: React.ReactNode
  labelText: string
  value?: string
}

export const withLabel = (Component: React.FunctionComponent) => {
  return function WrappedComponent(props: WrappedComponentProps) {
    return (
      <label className="flex flex-col text-sm md:text-base">
        <span className="mb-1 font-medium capitalize">{props.labelText}</span>
        {props.children}
        <Component />
      </label>
    )
  }
}
