type PropsType={
  students: string[]
}

export const NewComponent = (props:PropsType) => {
  const students=props.students.map((el,i)=>{
    return (<p key={i}>{el}</p>)
  })
  return (
    <div>
        {students}
    </div>
  )
};