type PropsType={
    name:string
    callback:()=>void
}
export const Button=({name,callback}:PropsType)=>{
    const onClickHandler=()=>callback()  
    return(
        <button onClick={onClickHandler}>{name}</button>
    )
}