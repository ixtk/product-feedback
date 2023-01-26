import { Dialog } from "@headlessui/react"
import { Jost } from "@next/font/google"
import { Sidebar } from "components/Sidebar"
import clsx from "clsx"
import { MobileMenuProps } from "shared/types"

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"]
})

export const MobileMenu = (props: MobileMenuProps) => {
  return (
    <Dialog
      open={props.menuOpen}
      onClose={() => props.setMenuOpen(false)}
      className={clsx(
        jost.variable,
        "fixed right-0 left-0 top-0 bg-secondary-900 font-sans text-base-100 md:hidden"
      )}
    >
      <Dialog.Panel className="absolute top-[4.5rem] right-0 z-50 flex h-screen w-64 flex-col gap-y-5 bg-base-300 p-5">
        <Sidebar />
      </Dialog.Panel>
      <div
        className={clsx(
          props.menuOpen ? "block" : "hidden",
          "fixed top-[4.5rem] bottom-0 left-0 right-0 bg-secondary-900/70"
        )}
        aria-hidden="true"
      />
    </Dialog>
  )
}
