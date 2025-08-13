import React from "react";
import FeedbackSection from "./Feedback.jsx";
import Oliver from "../../assets/Oliver-Wolff.png";
import Chris from "../../assets/Chris_Dominguez.webp";

const feedbackData = [
  {
    id: 1,
    img: Oliver,
    company: "Kinde",
    name: "Oliver Wolff",
    title: "Kindle Product Manager",
    feedback:
      "We partnered with InvoZone to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates, even with minor estimate shifts, allowed us to adapt efficiently. Their proactive approach kept us informed, and the code quality exceeded our expectations.",
    caseStudyLink: "#",
  },
  {
    id: 2,
    img: Chris,
    company: "storage",
    name: "Chris Dominguez",
    title: "CEO StorageChain",
    feedback:
      "Every member of the Invozone Team has been diligent and focused, fostering a genuine partnership on the technology front.",
    caseStudyLink: "#",
  },
];

export default function FeedbackPage() {
  return (
    <div>
      <FeedbackSection
        title="Partner’s"
        highlight="Success"
        feedbacks={feedbackData}
      />
    </div>
  );
}
