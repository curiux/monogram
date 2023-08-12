import Image from "next/image"

import greenRectangle from "../public/green-rectangle.webp"
import scores from "../public/scores.webp"

export default function Scores() {
    return (
        <div className="absolute w-full top-0 -translate-y-3 md:-translate-y-8 lg:w-4/5">
            {/* Green Rectangle */}
            <Image src={greenRectangle} alt="Green rectangle background" className="mx-auto px-5" />

            {/* Content Section */}
            <div className="absolute top-5 flex flex-col justify-center w-full md:top-32 lg:top-32">
                <h2 className="text-center text-green-100 text-3xl font-extrabold md:text-5xl lg:text-6xl">top audit scores</h2>
                <div className="mx-auto w-3/4 md:w-full">
                    <Image src={scores} alt="Score icons image" className="mx-auto" />
                </div>
                <Paragraph>
                    Search engines, business stakeholders, and end-users gauge a website&quot;s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.
                </Paragraph>
                <Paragraph>
                    Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.
                </Paragraph>
                <Paragraph>
                    A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.
                </Paragraph>
            </div>
            {/* Content Section */}
        </div >
    )
}

function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <p className="mb-1 mx-auto font-extralight px-10 text-green-100 text-[2.5vw] max-w-sm md:text-base md:max-w-xl md:mb-5 lg:text-lg lg:max-w-2xl lg:mb-10">
            {children}
        </p>
    )
}