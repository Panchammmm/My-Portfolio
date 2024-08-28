import React from "react";
import { useTranslation } from "react-i18next";
import RevealBtn from "../Recent-work/Button/RevealBtn";

const Blog = () => {
    const { t } = useTranslation();

    const cards = [
        {
            href: "https://medium.com/@sardarpancham510510/mastering-react-hooks-a-beginners-guide-to-state-and-beyond-148c9d36b6a7",
            label: t("GUIDE"),
            date: t("Aug 25, 2024"),
            title: t("Mastering React Hooks"),
            imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*vLVeqzC-pljpyjgP",
        },
        {
            href: "https://medium.com/@sardarpancham510510/introduction-to-responsive-design-with-tailwind-css-1277359b8901",
            label: t("TUTORIAL"),
            date: t("Aug 18, 2024"),
            title: t("Responsive Design with Tailwind"),
            imageUrl: "https://miro.medium.com/v2/resize:fit:750/format:webp/0*lmuzEvA7IvjvjukA",
        },
        {
            href: "https://medium.com/@sardarpancham510510/mastering-css-filter-properties-elevate-your-image-design-c654a0a0c7e5",
            label: t("TIPS"),
            date: t("Aug 8, 2024"),
            title: t("Mastering CSS Filter Properties"),
            imageUrl: "https://miro.medium.com/v2/resize:fit:750/format:webp/0*vlrTojKN8pdQFgae",
        }
    ];

    return (
        <section id="Blog" className="mx-auto pt-[120px] pb-[140px] max-w-7xl">
            <h1 className="my-skill lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">
                {t("Recent Blogs")}
            </h1>
            <p className="sm:px-[12vw] px-[8vw] tracking-[0.5px] text-center text-des mt-[15px]">
                {t("Explore my latest articles on advanced web design and development techniques, showcasing expertise in both frontend and backend technologies.")}
            </p>
            <div className="pt-10 px-6">
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

            <RevealBtn btnName={t("More Blogs")} onClick={() => window.open("https://medium.com/@sardarpancham510510", "_blank")} />
        </section>
    );
};

// Card Component defined inside the same file
const Card = ({ href, label, date, title, imageUrl }) => {
    return (
        <div className="w-[380px] rounded-xl overflow-hidden shadow-2xl border border-servBorder cursor-pointer" onClick={() => window.open(href, "_blank")}>
            <div className="h-48 overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover hover:scale-110 duration-1000" />
            </div>

            <div className="p-4">
                <div className="text-[#747779] mt-2 text-sm flex justify-between">
                    <span>
                        {date}
                    </span>

                    <span className="inline-block align-middle px-2 py-1 text-xs font-semibold text-white bg-[#6b1fae] rounded-full">
                        {label}
                    </span>
                </div>
                <h2 className="text-des text-lg font-semibold mt-1 mb-2 tracking-wide">{title}</h2>
            </div>
        </div>
    );
};

export default Blog;