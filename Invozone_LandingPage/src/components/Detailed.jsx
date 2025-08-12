import { useState } from "react";

const categories = [
  {
    id: "product",
    title: "Product Engineering",
    description:
      "Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more",
    points: [
      "Product Management",
      "Design & Prototyping",
      "Full Stack Development",
    ],
    icons: ["🔧", "⚙️"],
  },
  {
    id: "ai",
    title: "Data & Artificial Intelligence",
    description:
      "We drive your business forward by crafting tomorrow's AI solutions today, ensuring they are futuristic enough to align with your unique goals and challenges.",
    points: ["Machine Learning", "Natural Language Processing", "Data Analytics"],
    icons: ["🤖", "📊"],
  },
  {
    id: "hire",
    title: "Hire Dev",
    description:
      "Invozone helps you hire, acquire and retain top development talent.",
    points: ["Staff Augmentation", "Hire By Role", "Dedicated Teams"],
    icons: ["👨‍💻", "💼"],
  },
  {
    id: "devops",
    title: "DevOps & CloudOps",
    description:
      "We optimize operations with advanced DevOps and CloudOps strategies while boosting agility & scalability in technology deployments.",
    points: ["CI/CD Automation", "Cloud Migration", "Monitoring & Optimization"],
    icons: ["☁️", "🚀"],
  },
];

export default function ServiceSelector() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const activeData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-45 w-full max-w-[1400px] mx-auto mb-30">
      {/* LEFT SIDE - CATEGORIES */}
      <div className="grid grid-cols-2 gap-4 overflow-x-auto lg:overflow-visible no-scrollbar lg:grid-cols-2 flex-shrink-0">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`p-4 sm:p-6 rounded-xl border cursor-pointer text-center transition min-w-[150px] sm:min-w-[180px] lg:min-w-0 ${
              activeCategory === cat.id
                ? "bg-blue-500 text-white"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="text-2xl sm:text-3xl mb-2">{cat.icons[0]}</div>
            <h4 className="font-semibold text-sm sm:text-base">{cat.title}</h4>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">{activeData.title}</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">{activeData.description}</p>

        {/* Bullet Points */}
        <ul className="space-y-2 mb-6">
          {activeData.points.map((point, index) => (
            <li key={index} className="flex items-center gap-2 text-sm sm:text-base">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="font-semibold">{point}</span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex gap-4 flex-wrap">
          {activeData.icons.map((icon, i) => (
            <div
              key={i}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 rounded-full text-lg sm:text-xl"
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="relative flex items-center gap-2 mt-5 px-4 sm:px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 text-black hover:text-blue-600 border border-gray-400">
          <p>View</p>
          <div className="px-3 py-2 -my-[5px] -mr-[18px] ml-3 rounded-full bg-blue-500">
            <span className="transition-transform group-hover:animate-shake">➜</span>
          </div>
        </button>
      </div>
    </div>
  );
}

/* Tailwind - hide scrollbar */
<style jsx>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
