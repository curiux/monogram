import Image from "next/image";

import retroComputer from "../public/retro-computer.webp"

export default function Javascript() {
    return (
        <div className="absolute w-full flex lg:top-10">
            {/* Squiggly arrow */}
            <div className="z-20 absolute md:flex left-3/4 top-32 md:right-0 md:top-36 lg:top-44 xl:top-44 xl:left-3/4">
                <img src="/squiggly-arrow.webp" alt="Squiggly arrow" className="w-1/2 lg:w-2/3 xl:w-1/2" fetchPriority="low" loading="lazy" decoding="async" />
            </div>
            
            <div className="m-auto text-center px-5 [&>*]:mt-5 lg:[&>*]:mt-14 xl:mt-20">
                {/* Text Section */}
                <h2 className="mb-5 text-white text-5xl font-extrabold md:text-6xl lg:text-8xl">javascript</h2>
                <p className="font-extralight mx-auto text-xs max-w-lg text-white md:text-sm">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
                {/* Text Section */}
                
                <Image src={retroComputer} alt="Retro computer" className="mx-auto w-2/3 md:w-4/5 lg:w-full" />
            </div>
        </div>

    )
}