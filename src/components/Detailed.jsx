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
    logo: ["https://invozone-backend.s3.us-east-1.amazonaws.com/Product_Engineering_2_ce9958d7fb.svg"],
    icons: [
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_34_2881741607.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_40_8931b24ca8.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_41_7b3f5b7723.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_38_ad6be92aff.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_33_1026564ab7.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_32_25f5737661.svg",
    ],
  },
  {
    id: "ai",
    title: "Data & Artificial Intelligence",
    description:
      "We drive your business forward by crafting tomorrow's AI solutions today, ensuring they are futuristic enough to align with your unique goals and challenges.",
    points: ["Machine Learning", "Natural Language Processing", "Data Analytics"],
    logo: ["https://invozone-backend.s3.us-east-1.amazonaws.com/Group_d7ddbab7d6.svg"],
    icons: [
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_30_aea04f17f7.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_73_36e0f4bcaa.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_61_3ebe3547d0.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_45_60d1c401d0.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_49_90bab0403f.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_40_2c92b87f03.svg",
    ],
  },
  {
    id: "hire",
    title: "Hire Dev",
    description:
      "Invozone helps you hire, acquire and retain top development talent.",
    points: ["Staff Augmentation", "Hire By Role", "Dedicated Teams"],
    logo: ["https://invozone-backend.s3.us-east-1.amazonaws.com/chat_3_1_3472292811.svg"],
    icons: [
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_36_8d6147d209.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_53_db4fda4061.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_43_d197a270c7.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_48_35bb95e47f.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_54_831082be1a.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_65_1b0daa77b7.svg",
    ],
  },
  {
    id: "devops",
    title: "DevOps & CloudOps",
    description:
      "We optimize operations with advanced DevOps and CloudOps strategies while boosting agility & scalability in technology deployments.",
    points: ["CI/CD Automation", "Cloud Migration", "Monitoring & Optimization"],
    logo: ["https://invozone-backend.s3.us-east-1.amazonaws.com/cloud_computing_5_1_b0cc059ea8.svg"],
    icons: [
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_62_e1cbc23a10.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_28_1fe21129b6.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_19_401e00bde5.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_47_379d9f3909.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_15_aefb1c427f.svg",
      "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_10_6d36418948.svg",
    ],
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
            className={`p-4 sm:p-6 rounded-3xl border border-gray-300 cursor-pointer text-center transition min-w-[150px] sm:min-w-[180px] lg:min-w-0 
        ${activeCategory === cat.id
                ? "bg-blue-500 text-white"
                : "bg-gray-50 hover:bg-gray-100"
              }`}
          >
            <div className="flex justify-center mb-2">
              <div
                className={`p-2 rounded-full transition ${activeCategory === cat.id ? "bg-blue-500" : "bg-transparent"
                  }`}
              >
                <img
                  src={cat.logo}
                  alt={cat.title}
                  className={`w-10 h-10 object-contain ${activeCategory === cat.id ? "brightness-0" : ""
                    }`}
                />
              </div>
            </div>
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
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full"
            >
              <img src={icon} alt={`icon-${i}`} className="w-8 h-8 object-contain" />
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
