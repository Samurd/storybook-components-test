import "./MyLabel.css"

interface Props {

    /** Text to display */
    label: string


    /** Size of the label */
    size?: "normal" | "h1" | "h2" | "h3"


    allcaps?: boolean

    color?: "text-primary" | "text-secondary" | "text-tertiary"

    fontColor?: string
}

export function MyLabel({ label, size = "normal", allcaps = false, color = "text-primary", fontColor }: Props) {
    return (
        <span className={`label ${size} ${color}`} style={{ color: fontColor , textTransform: allcaps ? "uppercase" : "none"}}>{label}</span>
    )
}