
import ChecklistItem from "./ChecklistItem/ChecklistItem";

function Checklist({tasks,dispatch}){


    return (

        <ul>
            {
                tasks.map((taskData) => <ChecklistItem dispatch={dispatch} taskData={taskData} key={taskData.id}/> )
            }
        </ul>

    )

}


export default Checklist; 