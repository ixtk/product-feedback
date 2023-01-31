import { Listbox, Transition } from "@headlessui/react"
import ArrowIcon from "assets/icons/arrow.svg"

interface SelectInputProps {
  listData: string[]
  labelText: string
}

export const SelectList = (props: SelectInputProps) => {
  return (
    <div className="grow">
      <label className="flex flex-col text-sm md:text-base">
        <span className="mb-1 font-medium capitalize">{props.labelText}</span>
      </label>
      <div className="rounded-corners relative mt-2 border-0 bg-base-300">
        <Listbox value="demo">
          <Listbox.Button className="rounded-corners flex w-full items-center justify-between border border-base-400 px-3 py-2 text-left capitalize focus:border-primary-600 focus:border-primary-600 focus:outline-0 focus:ring-1 focus:ring-primary-600">
            <span>{props.listData.at(0)}</span>
            <ArrowIcon className="transition-transform ui-open:rotate-180" />
          </Listbox.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="relative z-50"
          >
            <Listbox.Options className="rounded-corners absolute left-0 top-[calc(100%+5px)] right-0 divide-y divide-base-400 overflow-hidden border border-base-400 bg-base-100 shadow-lg">
              {props.listData.map(data => {
                return (
                  <Listbox.Option key={data} value={data}>
                    <button className="w-full px-3 py-2 text-left capitalize text-secondary-900 ui-active:bg-base-300">
                      {data}
                    </button>
                  </Listbox.Option>
                )
              })}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  )
}
