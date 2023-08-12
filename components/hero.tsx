import Image from "next/image"

import heroGraphic from "../public/hero-graphic.webp"

export default function Hero() {
  return (
    <div className="overflow-x-hidden mt-10 flex flex-wrap flex-col lg:flex-row xl:mt-20">
      <div className="pt-2 pl-5 flex flex-col lg:gap-5 lg:[&>*]:ml-auto lg:w-1/2">
        {/* Text Section */}
        <h1 className="mb-5 text-5xl font-extrabold md:text-6xl lg:text-7xl">
          jamstack <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-500">101</span>
        </h1>
        <p className="font-light text-gray-600 max-w-md text-xs md:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit. </p>
        {/* Text Section */}

        {/* Mouse scroll line for bigger screens */}
        <div className="hidden ml-auto pr-52 lg:flex">
          <MouseScroll />
        </div>
      </div>
      <div className="flex flex-row pt-5 md:pt-0 lg:w-1/2">
        {/* Mouse scroll line for smaller screens */}
        <div className="flex justify-center w-1/2 pt-5 md:pt-0 lg:hidden">
          <MouseScroll />
        </div>

        {/* Hero Graphic */}
        <div className="w-full md:w-1/2 lg:w-2/3 lg:pl-10 animate-heroEnter">
          <Image src={heroGraphic} alt="Hero Graphic image" />
        </div>
      </div>
    </div>
  )
}

// Mouse scroll line
function MouseScroll() {
  return (
    <img src="/mouse-line.svg" alt="Mouse line scroll" className="w-12 lg:w-3/5 xl:w-4/6" fetchPriority="low" loading="lazy" decoding="async" />
  )
}