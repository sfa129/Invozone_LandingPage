import Navbar from "./components/Navbar.jsx";
import PartnersSection from './components/PartnersSection.jsx';
import Services from './components/Services.jsx';
import Detailed from './components/Detailed.jsx';
import IAMCard from "./components/IAMCard.jsx";

function App() {

  return (
    <>
      <Navbar />
      <PartnersSection />
      <Services />
      <Detailed />
      <div className="bg-gray-100 py-20">
      <div className="flex justify-center px-auto ">
        <div className="flex justify-center flex-wrap w-[65%]  ">
          <h1 className="font-bold text-2xl mb-5 sm:text-3xl lg:text-[35px]">
            Baking Your Up At <span className="text-blue-500">Every Stage of Your Progress</span>
          </h1>
          <p className="text-gray-500 text-base sm:text-[17px] ">
            From launching startups to expanding enterprises, or recovering from setbacks, we help businesses </p>
            <p className="text-gray-500 text-base sm:text-[17px]">overcome every challenge on their journey.</p>
        </div>
      </div>

      {/* cards */}
      <div className="flex justify-center my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">  
        <IAMCard colorName="blue-300" buttonDesc="Get Started" first="I'm A" second="Startup" third="Remarkable ideas often stall without the right team to bring them to life"/>
        <IAMCard colorName="blue-200" buttonDesc="Explore More" first="I'm An" second="Enterprise" third="Scaling without the right infrastructure and expertise can lead to costly bottlenecks"/>
        <IAMCard colorName="blue-300" buttonDesc="Need a Fix" first="I Need A" second="Rescue" third="A messy codebase and tech debt are suffocating your progress"/>
      </div>
      </div>
    </>
  )
}

export default App
