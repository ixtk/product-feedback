import { Menu, Transition } from "@headlessui/react"
import DropdownArrowIcon from "assets/icons/arrow.svg"

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

export const SortByMenu = () => {
  const menuItems = sortOptions.map(option => {
    return (
      <Menu.Item key={option}>
        <button className="w-full px-3 py-2 text-left text-secondary-900 ui-active:bg-base-300">
          {optionsTextMap[option]}
        </button>
      </Menu.Item>
    )
  })

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center pr-4 font-medium font-medium min-[380px]:px-4 min-[380px]:py-1">
          <span>Most upvotes</span>
          <DropdownArrowIcon className="ml-2 inline-block transition-transform ui-open:rotate-180" />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="rounded-corners absolute top-[calc(100%+10px)] w-40 divide-y divide-base-300 border border-base-400 bg-base-100 text-secondary-700 shadow-lg">
            {menuItems}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
