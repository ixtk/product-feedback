export const FormError = (props: { error: string }) => {
  return (
    <span className="col-span-full text-sm text-danger-800">{props.error}</span>
  )
}
