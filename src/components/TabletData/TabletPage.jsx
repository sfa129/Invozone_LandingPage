import React from "react";
import TabSection from "./Tablet.jsx";

export default function TabletPage() {
  const tabData = [
    {
      title: "Product Development",
      heading: "Product Development",
      description:
        "Transforming your ideas into ready-to-launch products.",
      points: [
        "Early Growth Stage or Stealth Startup",
        "Product Development Roadmap",
        "MVP Development",
        "Prototypes / POC"
      ],
      ctaText: "View Details",
      ctaLink: "#",
      videoUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Infographic_02_a11ca74172.webm" 
    },
    {
      title: "Managed IT Systems",
      heading: "Managed IT Systems",
      description:
        "Streamlined IT management for smooth operations.",
      points: [
        "Scale and ongoing or live produts",
        "Refining Product Roadmaps for scalability",
        "Completing Backlogs or Features",
        "Defined Technology Stacks"
      ],
      ctaText: "View Details",
      ctaLink: "#",
      videoUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Infograpgic_03_2_4a215787c0.webm"
    },
    {
      title: "Team Augmentation",
      heading: "Team Augmentation",
      description:
        "Upgrade your team with specialized skills & expertise.",
      points: [
        "Operational team efficiency is high and nimble",
        "Quick Turn-around times",
        "Access to the global talent pool",
        "Collaborate with in-house & Outsourced Teams"
      ],
      ctaText: "View Details",
      ctaLink: "#",
      videoUrl: "https://invozone-backend.s3.us-east-1.amazonaws.com/Infographic_1_adaa63c04a.webm"
    }
  ];

  return <TabSection tabs={tabData} />;
}
