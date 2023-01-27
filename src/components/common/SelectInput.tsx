import { Listbox, Transition } from "@headlessui/react"
import ArrowIcon from "assets/icons/arrow.svg"

interface SelectInputProps {
  listData: string[]
  labelText: string
}

export const SelectInput = (props: SelectInputProps) => {
  return (
    <div className="grow">
      <label className="flex flex-col text-sm md:text-base">
        <span className="mb-1 font-semibold capitalize">{props.labelText}</span>
      </label>
      <div className="rounded-corners relative mt-2 border-0 bg-base-300">
        <Listbox value="demo">
          <Listbox.Button className="rounded-corners flex w-full items-center justify-between p-3 text-left outline-1 outline-primary-600 focus-visible:outline">
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
          >
            <Listbox.Options className="rounded-corners absolute left-0 top-[calc(100%+5px)] right-0 z-50 divide-y divide-base-400 overflow-hidden border-[1px] border-base-400 bg-base-100 shadow-lg">
              {props.listData.map(data => {
                return (
                  <Listbox.Option key={data} value={data}>
                    <button className="w-full p-3 text-left text-secondary-900 transition-colors duration-75 ui-active:bg-base-300">
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
