import React from "react";

const Blog = () => {
    const cards = [
        {
            label: "TUTORIAL",
            date: "Oct 01, 2022",
            title: "Top 10 UI UX Designers",
            imageUrl: "https://themejunction.net/html/gerold/demo/assets/img/blog/1.jpg",
        },
        {
            label: "TIPS",
            date: "Nov 01, 2022",
            title: "App Development Guides",
            imageUrl: "https://themejunction.net/html/gerold/demo/assets/img/blog/1.jpg",
        },
        {
            label: "FREEBIES",
            date: "Dec 01, 2022",
            title: "Learn Graphic Design Free",
            imageUrl: "https://themejunction.net/html/gerold/demo/assets/img/blog/1.jpg",
        },
    ];

    return (
        <section id="Blog" className="mx-auto pt-[120px] pb-[140px]">
            <h1 className="my-skill lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">Recent Blogs</h1>
            <p className="sm:px-[8vw] px-[3vw] tracking-[0.5px] text-center text-des mt-[15px]">
                Showcasing premier web design and development projects, excelling in both frontend and backend expertise.
            </p>
            <div className="flex items-center justify-center pt-14">
                <div className="flex flex-wrap justify-center gap-6">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            label={card.label}
                            date={card.date}
                            title={card.title}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Card Component defined inside the same file
const Card = ({ label, date, title, imageUrl }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-2xl w-[400px] border border-[#34153d]">
            <div className="h-48 overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full object-cover hover:scale-110 duration-1000" />
            </div>

            <div className="p-4">
                <div className="text-gray-400 mt-2 text-sm flex justify-between my-auto">
                    <span>
                        {date}
                    </span>

                    <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
                        {label}
                    </span>
                </div>
                <h2 className="text-white text-lg font-semibold mt-1">{title}</h2>
            </div>
        </div>
    );
};

export default Blog;