type PropsType = {
    name: string
    callback: () => void
    className: string
}
export const Button = ({ name, callback, className }: PropsType) => {
    const onClickHandler = () => callback()
    return (
        <button className={className} onClick={onClickHandler}>{name}</button>
    )
}