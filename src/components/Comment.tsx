import clsx from "clsx"

export const Comment = ({
  nested,
  hasReplies
}: {
  nested?: boolean
  hasReplies?: boolean
}) => {
  return (
    <article
      className={clsx(
        nested && "border-b-0",
        !hasReplies &&
          "border-b border-b-base-400 pb-5 last-of-type:border-0 last-of-type:pb-0",
        "grid grid-cols-[auto_1fr] items-center gap-x-6"
      )}
    >
      <div className="col-start-1 h-10 w-10 rounded-full bg-secondary-700"></div>
      <header className="flex items-center">
        <div>
          <h3 className="font-semibold">Victoria Mejia</h3>
          <span className="text-secondary-700">@arlen_the_marlin</span>
        </div>
        <button className="ml-auto self-start pb-2 pl-2 font-semibold text-primary-600">
          Reply
        </button>
      </header>
      <p className="col-start-1 col-end-3 mt-3 text-secondary-700 md:col-start-2">
        I&apos;d love to see this! It always makes me so happy to see little
        details like these on websites.
      </p>
    </article>
  )
}
