import { Banner } from "components/Banner"
import { Sidebar } from "components/Sidebar"
import { FeedbackCard } from "components/feedback/FeedbackCard"
import { MainHeader } from "components/MainHeader"
import { productRequests } from "shared/data"
import { NoFeedbackSection } from "components/NoFeedbackSection"

const Home = () => {
  const feedbackCards = productRequests.map(request => {
    // what to use for keys
    return (
      <FeedbackCard
        key={request.title}
        id={request.id}
        title={request.title}
        category={request.category}
        upvotes={request.upvotes}
        status={request.status}
        description={request.description}
      />
    )
  })

  return (
    <div className="md:mx-auto md:max-w-3xl md:py-10 md:px-3 xl:flex xl:max-w-5xl xl:items-start xl:gap-x-6">
      <div className="relative gap-x-3 gap-y-5 md:mb-5 md:flex xl:sticky xl:top-5 xl:w-60 xl:flex-col">
        <Banner isSidebarOpen={true} />
        <Sidebar />
      </div>
      <div className="xl:grow">
        {feedbackCards.length > 0 ? (
          <>
            <MainHeader />
            <div className="flex flex-col gap-y-4 px-4 py-6 md:px-0">
              {feedbackCards}
            </div>
          </>
        ) : (
          <NoFeedbackSection />
        )}
      </div>
    </div>
  )
}
export default Home
