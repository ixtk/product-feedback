import { Banner } from "components/Banner"
import { Button } from "components/Button"
import DropdownArrowIcon from "assets/icons/arrow.svg"

const Home = () => {
  return (
    <>
      <Banner />
      <div className="px-4 py-2 bg-secondary-900 text-base-100">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="text-sm">
            <span className="mr-2">Sort by:</span>
            <button className="font-bold py-3">
              <span>Most Upvotes</span>
              <DropdownArrowIcon className="inline-block ml-2" />
            </button>
          </div>
          <Button text="+ Add feedback" accent={true} />
        </div>
      </div>
    </>
  )
}
export default Home
