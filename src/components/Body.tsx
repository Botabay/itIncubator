import { Todolist } from './Todolist';
import { Tasks } from './Tasks'

/* notRequiredMicroAdds #2
Hi guys! 
1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
Clicking the button removes all tasks
2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work*/

export const Body = () => {

  return (
    <div>
      <div>
        <Todolist title={'What to learn'} body={'this is body'}/>
      </div>
      <div>
        {/* <Tasks /> */}
      </div>
    </div >
  )
};
