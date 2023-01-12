import Link from "next/link"
import { Button } from "components/Button"
import ArrowIcon from "assets/icons/arrow.svg"
import React from "react"
import { FeedbackStack } from "components/FeedbackStack"

const Roadmap = () => {
  return (
    <div className="md:mx-auto md:max-w-7xl md:py-10 md:px-3">
      <div className="bg-secondary-900 px-3 py-5 font-bold text-base-100 md:rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="mb-3 flex items-center gap-x-3">
              <ArrowIcon className="rotate-90" />
              <span className="text-sm">Go back</span>
            </Link>
            <h1 className="text-xl">Roadmap</h1>
          </div>
          <Button text="+ Add feedback" variant="accent" />
        </div>
      </div>
      <ul className="flex border-b border-b-base-400 text-center lg:hidden">
        <li className="flex-1 border-b-4 border-b-accentPrimary">
          <button className="w-full py-4 text-sm font-bold text-secondary-900">
            Planned (12)
          </button>
        </li>
        <li className="flex-1 border-b-4 border-opacity-0">
          <button className="w-full py-4 text-sm font-bold text-secondary-900">
            In progress (3)
          </button>
        </li>
        <li className="flex-1 border-b-4 border-opacity-0">
          <button className="w-full py-4 text-sm font-bold text-secondary-900">
            Live (4)
          </button>
        </li>
      </ul>
      <div className="lg:hidden">
        <FeedbackStack feedbackStatus="Planned" />
      </div>
      <div className="hidden grid-flow-col grid-cols-[40%_40%_40%] overflow-x-scroll pb-5 lg:grid xl:grid-cols-3 xl:overflow-x-visible">
        <FeedbackStack feedbackStatus="Planned" />
        <FeedbackStack feedbackStatus="In-progress" />
        <FeedbackStack feedbackStatus="Live" />
      </div>
    </div>
  )
}

export default Roadmap
