import { Listbox } from "@headlessui/react"
import clsx from "clsx"

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
      <div className="rounded-corners relative mt-2 border-0 bg-base-300 outline-primary-600">
        <Listbox value="demo">
          <Listbox.Button className="w-full p-3 text-left">
            {props.listData.at(0)}
          </Listbox.Button>
          <Listbox.Options className="rounded-corners absolute left-0 top-[calc(100%+5px)] right-0 z-50 divide-y divide-base-400 overflow-hidden border-[1px] border-base-400 bg-base-100 shadow-lg">
            {props.listData.map(data => {
              return (
                <Listbox.Option key={data} value={data}>
                  {({ active }) => (
                    <button
                      className={clsx(
                        active && "bg-base-300",
                        "w-full p-3 text-left text-secondary-900"
                      )}
                    >
                      {data}
                    </button>
                  )}
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  )
}
