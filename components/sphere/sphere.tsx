"use client"

import dynamic from "next/dynamic"

export default function Sphere() {
    // Import it dynamically to improve performance
    const Canvas = dynamic(() => import("./canvas"))
    return (
        <Canvas />
    )
}