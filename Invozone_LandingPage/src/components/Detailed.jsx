import { useState } from "react";

const categories = [
  {
    id: "product",
    title: "Product Engineering",
    description: "Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more",
    
    icons: ["🔧", "⚙️"],
  },
  {
    id: "ai",
    title: "Data & Artificial Intelligence",
    description: "We deliver AI-driven solutions and analytics.",
    icons: ["🤖", "📊"],
  },
  {
    id: "hire",
    title: "Hire Dev",
    description:
      "Invozone helps you hire, acquire and retain top development talent.",
    icons: ["👨‍💻", "💼"],
  },
  {
    id: "devops",
    title: "DevOps & CloudOps",
    description: "Streamline development & deployment with automation.",
    icons: ["☁️", "🚀"],
  },
];

export default function ServiceSelector() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 w-[80%] mx-auto">
      {/* LEFT SIDE - CATEGORIES */}
      <div className="grid grid-cols-2 gap-4 ">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`p-6 rounded-xl border cursor-pointer text-center transition w-60 h-50 ${
              activeCategory === cat.id
                ? "bg-blue-500 text-white"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="text-3xl mb-2">{cat.icons[0]}</div>
            <h4 className="font-semibold">{cat.title}</h4>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div className="bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">{activeData.title}</h2>
        <p className="text-gray-600 mb-4">{activeData.description}</p>
        <div className="flex gap-4">
          {activeData.icons.map((icon, i) => (
            <div
              key={i}
              className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-xl"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
