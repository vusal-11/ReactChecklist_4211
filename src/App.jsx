import './App.css';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';
import Checklist from './Components/Checklist/Checklist';
import { useReducer } from 'react';

const updater = (state, action) => {
  switch(action.type) {

  }

  throw new Error('Undefined action type');
}

function App() {
  const [tasks, dispatchTasks] = useReducer(updater, [5, 6, 7, 8, 2134, 43]);

  return (
    <>
      <Form></Form>
      <Button>All</Button>
      <Button>Done</Button>
      <Button>Remainded</Button>
      <Checklist tasks={tasks}/>
    </>
  );
}

export default App;
