import Icon from "./icon"

// Arrays with icon data, each array is for one column
const icons1Col = [
    {
        id: 0,
        name: "React",
        file: "react-light",
    },
    {
        id: 1,
        name: "Svelte",
        file: "svelte-dark",
    },
]

const icons2Col = [
    {
        id: 0,
        name: "Next.js",
        file: "nextjs",
    },
    {
        id: 1,
        name: "React",
        file: "react-dark",
    }
]

const icons3Col = [
    {
        id: 0,
        name: "Vue.js",
        file: "vuejs",
    }
]

const icons4Col = [
    {
        id: 0,
        name: "Next.js",
        file: "nextjs",
    },
    {
        id: 1,
        name: "React",
        file: "react-light",
    },
    {
        id: 2,
        name: "Svelte",
        file: "svelte-dark",
    },
]

// Falling Icons component, it creates the flex row with the arrays
export default function FallingIcons() {
    return (
        <div className="flex flex-row justify-around">
            <div className="flex flex-col mt-32 md:gap-10 lg:gap-24">
                {icons1Col.map(icon => <Icon key={icon.id} name={icon.name} file={icon.file} />)}
            </div>
            <div className="flex flex-col mt-36 gap-3 md:gap-32 lg:mt-56 lg:gap-48">
                {icons2Col.map(icon => <Icon key={icon.id} name={icon.name} file={icon.file} />)}
            </div>
            <div className="flex flex-col mt-52 md:mt-80 md:pt-10 lg:mt-96 lg:pt-20">
                {icons3Col.map(icon => <Icon key={icon.id} name={icon.name} file={icon.file} />)}
            </div>
            <div className="flex flex-col mt-12 gap-3 md:-mt-12 md:gap-20 lg:-mt-24 lg:gap-32">
                {icons4Col.map(icon => <Icon key={icon.id} name={icon.name} file={icon.file} />)}
            </div>
        </div>
    )
}