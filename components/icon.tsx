"use client"

import { RefObject, useRef } from "react";
import { useInViewport } from "react-in-viewport";

interface Icon {
    name: string
    file: string
}

export default function Icon(props: Icon) {
    const { name, file } = props

    // div reference to know when the icon is in viewport, using react-in-viewport
    const iconRef = useRef() as RefObject<HTMLDivElement>;
    const { inViewport, enterCount } = useInViewport(iconRef)

    return (
        <div ref={iconRef}>
            <img src={`/icons/${file}.svg`} alt={`${name} icon`} className={`${inViewport && enterCount === 1 ? "animate-fadeIn" : ""} w-18`} fetchPriority="low" loading="lazy" decoding="async" />
        </div>
    )
}