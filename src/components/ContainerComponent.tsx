import { Input } from "./Input";
import { Button } from './Button'

export const ContainerComponent = () => {
    return (
        <div>
            <Button
                className={''} name={'x'}
                callback={() => { removeTask(el.taskId, todolistId) }}
            />
            <Checkbox
                isDone={el.isDone}
                callback={(e) => changeTaskStatus(el.taskId, e, todolistId)}
            />
        </div>
    )
}