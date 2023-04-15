type PropsType={
    name:string
    callback:()=>void
}
export const Button=(props:PropsType)=>{
    const onClickHandler=()=>{
        console.log('button');
    }
    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}