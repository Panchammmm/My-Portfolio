import React from "react";
import RevealBtn from "../Recent-work/Button/RevealBtn";

const Blog = () => {
    const cards = [
        {
            href: "https://medium.com/@sardarpancham510510/mastering-react-hooks-a-beginners-guide-to-state-and-beyond-148c9d36b6a7",
            label: "GUIDE",
            date: "Aug 25, 2024",
            title: "Mastering React Hooks",
            imageUrl: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            href: "https://medium.com/@sardarpancham510510/introduction-to-responsive-design-with-tailwind-css-1277359b8901",
            label: "TUTORIAL",
            date: "Aug 18, 2024",
            title: "Responsive Design with Tailwind",
            imageUrl: "https://images.pexels.com/photos/4048774/pexels-photo-4048774.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
            href: "https://medium.com/@sardarpancham510510/mastering-css-filter-properties-elevate-your-image-design-c654a0a0c7e5",
            label: "TIPS",
            date: "Aug 8, 2024",
            title: "Mastering CSS Filter Properties",
            imageUrl: "https://images.pexels.com/photos/4134784/pexels-photo-4134784.jpeg?auto=compress&cs=tinysrgb&w=600",
        }
    ];

    return (
        <section id="Blog" className="mx-auto pt-[120px] pb-[140px] max-w-7xl">
            <h1 className="my-skill lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">Recent Blogs</h1>
            <p className="sm:px-[12vw] px-[8vw] tracking-[0.5px] text-center text-des mt-[15px]">
                Showcasing premier web design and development projects, excelling in both frontend and backend expertise.
            </p>
            <div className="flex items-center justify-center pt-10">
                <div className="flex flex-wrap justify-center gap-6">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            href={card.href}
                            label={card.label}
                            date={card.date}
                            title={card.title}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>
            </div>

            <RevealBtn btnName="More Blogs" onClick={() => window.open("https://medium.com/@sardarpancham510510", "_blank")} />
        </section>
    );
};

// Card Component defined inside the same file
const Card = ({ href, label, date, title, imageUrl }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-2xl border border-[#34153d] cursor-pointer transform transition-transform hover:scale-105" onClick={() => window.open(href, "_blank")}>
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover hover:scale-110 duration-1000" />
            </div>

            <div className="p-4">
                <div className="text-gray-400 mt-2 text-sm flex justify-between">
                    <span>
                        {date}
                    </span>

                    <span className="inline-block align-middle px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
                        {label}
                    </span>
                </div>
                <h2 className="text-white text-lg font-semibold mt-1 mb-2">{title}</h2>
            </div>
        </div>
    );
};

export default Blog;