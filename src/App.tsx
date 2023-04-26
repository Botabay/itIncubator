import './App.css';
import { Header } from './components/Header'
import { Body } from './components/Body';
import { Footer } from './components/Footer';

export const App = () => {
    
    return (
        <div className="App">
            <Header title={'the title of the header'} />
            ============================================
            <Body />            
            =============================================
            <Footer footerTitle={'the title for the footer'} />            
        </div>
    );
}

/**
 * export const App=()=> {
    //test
    const titleValue='asdfadfadfasdfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk';
    const tasks1= [
        {taskId: uuid(), title: "HTML&CSS1", isDone: true},
        {taskId: uuid(), title: "JS1", isDone: true},
        {taskId: uuid(), title: "TS", isDone: false}
    ];
    const tasks2= [
        {taskId: uuid(), title: "HTML&CSS2", isDone: true},
        {taskId: uuid(), title: "JS2", isDone: true},
        {taskId: uuid(), title: "TS2", isDone: false},
        {taskId: uuid(), title: "PHP", isDone: true}
    ]
    return (
        <div className="App">
            <Todolist title={'What to learn'} body={'this is body'} tasks={tasks1}/>
            {/* <Todolist title={'What to remember'} tasks={tasks2}/> }
            {/* <Todolist title={titleValue}/> }
            </div>
            );
        }
 */
