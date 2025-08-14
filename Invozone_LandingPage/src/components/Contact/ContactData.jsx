import React from "react";
import ContactSection from "./ContactSection.jsx";

const statsData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
    value: "300+",
    label: "Successful Projects",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
    value: "97%",
    label: "Success Rate",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
    value: "500+",
    label: "Developers & Engineers",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    value: "10+",
    label: "Years of Experience",
  },
];

const logosData = [
  "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Stripe_Logo%2C_revised_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon_2019.svg",
];

export default function App() {
  return (
    <ContactSection stats={statsData} logos={logosData} />
  );
}
