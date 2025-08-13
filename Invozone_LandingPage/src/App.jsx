import Navbar from "./components/Navbar.jsx";
import PartnersSection from './components/PartnersSection.jsx';
import Services from './components/Services.jsx';
import Detailed from './components/Detailed.jsx';
import IAMCard from "./components/IAMCard.jsx";
import BlueSlide from "./components/BlueSlide.jsx";
import FeedbackPage from './components/Feedback/FeedbackPage.jsx';
import TabletPage from './components/TabletData/TabletPage.jsx';
import CardSlider from "./components/Cards/CardSlider.jsx";

function App() {
  const cardData = [
    { title: "Card 1", image: "https://picsum.photos/id/1015/600/400" },
    { title: "Card 2", image: "https://picsum.photos/id/1016/600/400" },
    { title: "Card 3", image: "https://picsum.photos/id/1018/600/400" },
    { title: "Card 4", image: "https://picsum.photos/id/1020/600/400" },
  ];
  return (
    <>
      <Navbar />
      <PartnersSection />
      <Services />
      <Detailed />
      <div className="bg-gray-100 py-20">
        <div className="flex justify-center px-auto ">
          <div className="flex justify-center px-4">
            <div className="w-full max-w-4xl flex flex-col items-center text-center p-4 sm:p-6">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-[35px] mb-5">
                Baking Your Up At <span className="text-blue-500">Every Stage of Your Progress</span>
              </h1>

              <p className="text-gray-500 text-base sm:text-[17px] max-w-2xl">
                From launching startups to expanding enterprises, or recovering from setbacks, we help businesses overcome every challenge on their journey.
              </p>
            </div>
          </div>

        </div>

        {/* cards */}
        <div className="flex flex-wrap justify-center gap-6 my-20 px-4">
          <IAMCard
            colorName="blue-300"
            buttonDesc="Get Started"
            first="I'm A"
            second="Startup"
            third="Remarkable ideas often stall without the right team to bring them to life"
          />
          <IAMCard
            colorName="blue-200"
            buttonDesc="Explore More"
            first="I'm An"
            second="Enterprise"
            third="Scaling without the right infrastructure and expertise can lead to costly bottlenecks"
          />
          <IAMCard
            colorName="blue-300"
            buttonDesc="Need a Fix"
            first="I Need A"
            second="Rescue"
            third="A messy codebase and tech debt are suffocating your progress"
          />
        </div>

        <BlueSlide />
        <FeedbackPage />
        <div className="flex justify-center px-auto bg-white pt-15">
          <div className="flex justify-center px-4">
            <div className="w-full max-w-4xl flex flex-col items-center text-center p-4 sm:p-6">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-[35px] mb-5">
                Engagement <span className="text-blue-500">Models</span>
              </h1>

              <p className="text-gray-500 text-base sm:text-[17px] max-w-2xl">
                Choose from flexible engagement models tailored to your needs, ensuring seamless collaboration with time & material or dedicated teams.
              </p>
            </div>
          </div>

        </div>
        <TabletPage />
        <div className="container mx-auto">
          <CardSlider cards={cardData} />
        </div>

      </div>
    </>
  )
}

export default App
