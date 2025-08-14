import React from "react";

const FooterColumn = ({ title, links }) => (
    <>
        <div className="space-y-2">
            <h3 className="text-white font-semibold mb-3">{title}</h3>
            <ul className="space-y-2">
                {links.map((link, idx) => (
                    <li key={idx} className="relative group">
                        <a
                            href={link.href}
                            className="relative text-gray-300 text-sm block w-fit py-1 transition-colors duration-300 group-hover:text-white"
                        >
                            {link.label}
                            <span className="absolute bottom-0 left-0 h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left w-full"></span>
                        </a>

                    </li>
                ))}
            </ul>
        </div>

    </>
);

const ContactCard = () => (
    <div className="bg-[#0D1326] rounded-2xl p-8 space-y-6">
        {/* Call */}
        <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-full">
                📞
            </div>
            <div>
                <p className="text-gray-400 text-xs">Direct Call</p>
                <p className="text-white font-semibold">+1 786 753 7752</p>
            </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-full">
                📧
            </div>
            <div>
                <p className="text-gray-400 text-xs">Email Us</p>
                <p className="text-white font-semibold">sales@invozone.com</p>
            </div>
        </div>
        <div className="bg-gray-400 w-full h-[1px]"></div>
        {/* 5 Star Reviews */}
        <div>
            <p className="text-white text-base font-semibold mb-2">★ 5 Star Reviews</p>
            <div className="flex gap-5">
                {[
                    "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000005708_c162021cee.svg",
                    "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000005711_d7a4bce3b5.svg",
                    "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000005710_930415671c.svg",
                    "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000005709_6f4a5abefb.svg",
                ].map((imgSrc, i) => (
                    <div
                        key={i}
                        className="bg-[#1A2238] rounded-full p-2 flex items-center justify-center w-12 h-12"
                    >
                        <img
                            src={imgSrc}
                            alt={`Review ${i + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-gray-400 w-full h-[1px]"></div>
        {/* Socials */}
        <div>
            <p className="text-white text-base font-semibold mb-2">Our Socials</p>
            <div className="flex gap-6">
                {[
                    "https://invozone-backend.s3.us-east-1.amazonaws.com/linked_in_1e48b7cbdb.svg",
                    "https://invozone-backend.s3.us-east-1.amazonaws.com/twitter_d51ffbc4e5.svg",
                    "https://invozone-backend.s3.us-east-1.amazonaws.com/instagram_459d2e6756.svg",
                    "https://invozone-backend.s3.us-east-1.amazonaws.com/youtube_660c923e48.svg",
                ].map((imgSrc, i) => (
                    <div
                        key={i}
                        className="bg-[#1A2238] rounded-full p-2 flex items-center justify-center w-11 h-11 hover:bg-blue-500 cursor-pointer"
                    >
                        <img
                            src={imgSrc}
                            alt={`Review ${i + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function Footer() {
    const footerLinks = [
        {
            title: "Services",
            links: [
                { label: "Web App Development", href: "#" },
                { label: "Mobile App Development", href: "#" },
                { label: "Enterprise App Development", href: "#" },
                { label: "AI Development Services", href: "#" },
                { label: "DevOps Services", href: "#" },
                { label: "Software Quality Assurance", href: "#" },
                { label: "UI UX Design Services", href: "#" },
                { label: "Product Development Services", href: "#" },
            ],
        },
        {
            title: "Hire Developers",
            links: [
                { label: "Elixir Developer", href: "#" },
                { label: "MERN Stack Developer", href: "#" },
                { label: "Node Js Developer", href: "#" },
                { label: "Python Developer", href: "#" },
                { label: "ROR Developer", href: "#" },
                { label: "Flutter Developer", href: "#" },
                { label: "React Js Developer", href: "#" },
                { label: "SaaS Developer", href: "#" },
            ],
        },
        {
            title: "Industry",
            links: [
                { label: "Fintech", href: "#" },
                { label: "Ecommerce", href: "#" },
                { label: "On-Demand", href: "#" },
                { label: "Real Estate", href: "#" },
                { label: "Healthcare", href: "#" },
                { label: "Food & Grocery", href: "#" },
                { label: "Education", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "#" },
                { label: "Portfolio", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "Events", href: "#" },
            ],
        },
    ];

    return (
        <>
            <footer className="bg-[#0A0F1F] text-gray-300 pt-15">
                <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-7">
                    {/* Contact (span 2 cols) */}
                    <div className="lg:col-span-2">
                        <ContactCard />
                    </div>

                    {/* Footer columns (span 5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {/* Top link columns */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {footerLinks.map((col, idx) => (
                                <FooterColumn key={idx} title={col.title} links={col.links} />
                            ))}
                        </div>

                        {/* Country Addresses (below columns) */}
                        <div className="bg-gray-500 w-full h-[1px]"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                {
                                    flag: "https://invozone-backend.s3.us-east-1.amazonaws.com/USA_a4cd0947fc.svg",
                                    // country: "United States",
                                    address: "130 NW 77th Ave Pembroke Pines, Florida 33024",
                                },
                                {
                                    flag: "https://invozone-backend.s3.us-east-1.amazonaws.com/canada_861bcce43c.svg",
                                    // country: "Pakistan",
                                    address: "220 Duncan Mill Road, Toronto, Ontario M3B 3J5",
                                },
                                {
                                    flag: "https://invozone-backend.s3.us-east-1.amazonaws.com/malasiya_f922b0b1ac.svg",
                                    // country: "Canada",
                                    address: "Unit 10, Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur",
                                },
                            ].map((location, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    <img
                                        src={location.flag}
                                        alt={location.country}
                                        className="w-12 h-12 object-cover rounded shadow"
                                    />
                                    <div>
                                        {/* <p className="font-semibold">{location.country}</p> */}
                                        <p className="text-[12px] mt-2 font-semibold">{location.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-15 flex justify-center mb-0">
                    <div className="bg-blue-600 w-[90%] rounded-t-2xl px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-white">
                        <p>© 2025 InvoZone. All Rights Reserved.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:underline">Sitemap</a>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms & Conditions</a>
                        </div>
                    </div>
                </div>

            </footer>


        </>
    );
}
