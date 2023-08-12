import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from "three"

function Scene() {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.y += delta / 2))

    // Load sphere texture
    const colorMap = useLoader(TextureLoader, 'sphere-texture.png')
    return (
        <mesh ref={ref} scale={[2, 2, 2]} rotation-z={0.2}>
            <sphereGeometry />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}

export default function SphereCanvas() {
    return (
        <div className="mx-auto w-full h-[30vh] md:h-96 lg:h-[45vw]">
            <Canvas performance={{ min: 0.1 }} gl={{ antialias: false }} className="w-full h-full">
                <ambientLight intensity={0.7} />
                <Scene />
            </Canvas>
        </div>
    )
}