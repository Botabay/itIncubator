type PropsType = {
    name: string
    onClick: () => void
    className: string
}
export const Button = ({ name, onClick, className }: PropsType) => {
    return (
        <button className={className} onClick={onClick}>{name}</button>
    )
}