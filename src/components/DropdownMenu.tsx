import { Menu } from "@headlessui/react"
import DropdownArrowIcon from "assets/icons/arrow.svg"
import clsx from "clsx"

const sortOptions = [
  "mostUpvotes",
  "leastUpvotes",
  "mostComments",
  "leastComments"
]

const optionsTextMap: Record<string, string> = {
  mostUpvotes: "Most upvotes",
  leastUpvotes: "Least upvotes",
  mostComments: "Most comments",
  leastComments: "Least comments"
}

export const DropdownMenu = () => {
  const menuItems = sortOptions.map(option => {
    return (
      <Menu.Item key={option}>
        {({ active }) => (
          <button
            className={clsx(
              "w-full border-b-2 border-b-base-300 px-4 py-3 text-left",
              active && "text-accentPrimary"
            )}
          >
            {optionsTextMap[option]}
          </button>
        )}
      </Menu.Item>
    )
  })

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="px-4 font-semibold">
          <span>Most upvotes</span>
          <DropdownArrowIcon className="ml-2 inline-block" />
        </Menu.Button>
        <Menu.Items className="rounded-corners absolute top-8 w-40 bg-base-100 text-secondary-700 shadow-lg">
          {menuItems}
        </Menu.Items>
      </Menu>
    </div>
  )
}
