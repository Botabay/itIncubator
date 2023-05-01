import { KeyboardEvent, ChangeEvent } from "react";
type PropsType = {
    setInpSt: React.Dispatch<React.SetStateAction<string>>
    value: string
    callback: () => void
}
export const Input = ({
                        setInpSt,
                        value,
                        callback
                     }: PropsType) => {
    const onChangeHandler = 
        (e: ChangeEvent<HTMLInputElement>) => setInpSt(e.currentTarget.value)
    const onKeyDownHandler = 
        (e: KeyboardEvent<HTMLInputElement>) => (e.key === "Enter") && callback()
    return (
        <input type="text"
            onChange={onChangeHandler}
            value={value}
            onKeyDown={onKeyDownHandler}
        />
    )
}