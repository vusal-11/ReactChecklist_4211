import ChecklistItem from "./ChecklisItem/ChecklistItem";

function Checklist({tasks}) {

    return (
        <ul>
            {
                tasks.map(taskData => <ChecklistItem taskData={taskData} key={taskData.id}/>)
            }
        </ul>
    )
}

export default Checklist;