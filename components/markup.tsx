import Image from "next/image";

import toppledBlocks from "../public/toppled-blocks.webp"
import blockGraphic from "../public/block-graphic.webp"
import wallOfBlocks from "../public/wall-of-blocks.webp"

export default function Markup() {
    return (
        <div className="mt-12 flex flex-col gap-2">
            <div className="flex flex-row md:ml-20">
                <div className="w-2/3 px-5 md:w-1/2">
                    {/* Text Section */}
                    <h2 className="mb-5 text-3xl font-extrabold md:text-6xl lg:text-7xl lg:mb-10">markup</h2>
                    <p className="mb-5 font-extralight text-xs max-w-sm md:font-normal md:text-sm md:max-w-lg lg:text-base lg:max-w-xl">When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel&quot;dots Edge Network.</p>
                    {/* Text Section */}

                    {/* Toppled blocks */}
                    <div className="w-2/3">
                        <Image src={toppledBlocks} alt="Toppled Blocks" />
                    </div>
                </div>
                {/* Block graphic */}
                <div className="w-1/3 mt-auto md:w-1/2">
                    <Image src={blockGraphic} alt="Block Graphic" className="md:w-2/3" />
                </div>
            </div>
            <div>
                {/* Wall of blocks */}
                <Image src={wallOfBlocks} alt="Wall of Blocks" />
            </div>
        </div>
    )
}