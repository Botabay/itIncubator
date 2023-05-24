import { KeyboardEvent, ChangeEvent } from "react";

type PropsType = {
    value: string
    className: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}
export const Input = ({
    value,
    className,
    onChange,
    onKeyDown
}: PropsType) => {

    return (
        <input type="text"
            onChange={onChange}
            value={value}
            className={className}
            onKeyDown={onKeyDown}
        />
    )
}