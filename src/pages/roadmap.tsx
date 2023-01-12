import Link from "next/link"
import { Button } from "../components/Button"
import { FeedbackCard } from "../components/FeedbackCard"
import ArrowIcon from "../assets/icons/arrow.svg";
import React from "react";

const Roadmap = () => {
  return (
    <div>
      <div className="bg-secondary-900 px-3 py-5 font-bold text-base-100">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="flex items-center gap-x-3 mb-3">
              <ArrowIcon className="rotate-90" />
              <span className="text-sm">Go back</span>
            </Link>
            <h1 className="text-xl">Roadmap</h1>
          </div>
          <Button text="+ Add feedback" variant="accent" />
        </div>
      </div>
      <ul className="flex border-b border-b-base-400 text-center">
        <li className="flex-1 border-b-4 border-b-accentPrimary">
          <button className="py-4 w-full text-sm text-secondary-900 font-bold">Planned (12)</button>
        </li>
        <li className="flex-1 border-b-4 border-opacity-0">
          <button className="py-4 w-full text-sm text-secondary-900 font-bold">In progress (3)</button>
        </li>
        <li className="flex-1 border-b-4 border-opacity-0">
          <button className="py-4 w-full text-sm text-secondary-900 font-bold">Live (4)</button>
        </li>
      </ul>
      <div className="flex flex-col gap-y-4 p-3">
        <h2 className="my-3 text-lg font-semibold text-secondary-800">
          Ideas prioritized for research
        </h2>
        <div className="rounded-xl border-t-4 border-t-accentSecondary">
          <FeedbackCard />
        </div>
        <div className="rounded-xl border-t-4 border-t-accentSecondary">
          <FeedbackCard />
        </div>
        <div className="rounded-xl border-t-4 border-t-accentSecondary">
          <FeedbackCard />
        </div>
      </div>
    </div>
  )
}

export default Roadmap
