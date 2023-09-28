import './App.css';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';
import Checklist from './Components/Checklist/Checklist';
import { useReducer } from 'react';


const updater=(state,action)=>{

    switch(action.type){
      case 'addTask':
        return [...state,action.payload];
      case 'deleteTask':
        return state.filter(task => task.id !== action.payload);
    }
  
    throw new Error("Undefined action type")
}

function App() {

  const [tasks,dispatchTasks]=useReducer(updater,[]);


  return (
    <>
     <Form onSubmit={(taskData)=> dispatchTasks({type:'addTask',payload:taskData})}></Form>
     <Button>All</Button>
     <Button>Done</Button>
     <Button>Remainded</Button>
     <Checklist dispatch={dispatchTasks} tasks={tasks}/>
    </>
  );
}

export default App;