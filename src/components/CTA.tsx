const ctaInfo = [
    {
        heading: "branding",
        subheading:
            "We identify and reveal the potential of your brand to create a singular identity that distinguishes and positions it forcefully in its ecosystem. Every aspect is thought to reflect your culture, touch your audience and tell your story.",
        points: [
            "Brand Strategy",
            "Tone of Voice",
            "Brand Book",
            "Iconography",
            "Illustration",
            "Packaging",
            "Signage",
        ],
        image: "/branding.jpg",
    },
    {
        heading: "Digital",
        subheading:
            "We place the user at the heart of our digital design approach. From idea to graphic design, we combine UX and UI to create interfaces that meet current uses.",
        points: [
            "UI/UX",
            "Research & Testing",
            "Webdesign",
            "Development",
            "Motion Design",
            "Marketing Strategy",
            "Social Media",
        ],
        image: "/digital.jpg",
    },
    {
        heading: "Advertisement",
        subheading:
            "Creating good advertising relies on storytelling, emotion and inspiration. Each campaign is an opportunity to make an impression.",
        points: [
            "360 Campaign",
            "Digital",
            "Print",
            "Viral Movies and TV",
            "Social Media",
            "Excluding Media",
        ],
        image: "/ads.jpg",
    },
    {
        heading: "Edition",
        subheading:
            "Editorial materials are necessary to increase the reach of your brand and reach your target audience. We offer creative editorial solutions, tailored to your needs.",
        points: [
            "Brochure",
            "Leaflet",
            "Catalog & Brochure",
            "Annual Report",
            "Content Writing",
            "Beautiful Books",
            "Newspapers and Magazines",
            "POS",
            "Stand Dressing",
        ],
        image: "/edition.jpg",
    },
    {
        heading: "Production",
        subheading:
            "We bring your content to life by mastering each stage of its production thanks to integrated production solutions or in collaboration with experienced and passionate multidisciplinary creation and production studios.",
        points: [
            "Photo Shoot",
            "Video Production and Editing",
            "Aerial Drone Videos",
            "2D/3D Motion Design",
        ],
        image: "/production.jpg",
    },
];
function CTA() {
    return (
        <div className="bg-white">
            {ctaInfo.map((item, index) => (
                <CTACard
                    key={index}
                    heading={item.heading}
                    subheading={item.subheading}
                    points={item.points}
                    image={item.image}
                />
            ))}
        </div>
    );
}

export default CTA;

function CTACard({
    heading,
    subheading,
    points,
    image,
}: {
    heading: string;
    subheading: string;
    points: string[];
    image: string;
}) {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center px-20 py-10 sticky w-full top-16 left-0 bg-white border-b border-gray-300">
                <div className="flex flex-col gap-10 max-w-xl">
                    <div className="text-5xl uppercase font-semibold">
                        {heading}
                    </div>
                    <div className="text-xl font-thin">{subheading}</div>
                    <div className="grid grid-cols-2 gap-2">
                        {points.map((point, index) => (
                            <div key={index} className="font-medium">{point}</div>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={image} />
                </div>
            </div>
        </>
    );
}
