import NoFeedbackImage from "assets/images/no-feedback.svg"
import { LinkButton } from "components/common/Button"

export const NoFeedbackSection = ({ category }: { category: string }) => {
  return (
    <div className="rounded-corners mx-4 mt-6 grid place-content-center gap-y-2 bg-base-100 shadow-sm md:mx-0">
      <section className="max-w-md px-4 py-10 text-center">
        <NoFeedbackImage className="mx-auto mb-6" />
        <h2 className="my-3 text-xl font-bold">
          No feedback in the {category} category
        </h2>
        <p className="mb-6 text-secondary-700">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <LinkButton
          href="/feedback/new"
          text="+ Add feedback"
          variant="accent"
        />
      </section>
    </div>
  )
}
