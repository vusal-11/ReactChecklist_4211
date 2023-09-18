import ChecklistItem from "./ChecklisItem/ChecklistItem";

function Checklist({tasks}) {

    return (
        <ul>
            {
                tasks.map(task => <ChecklistItem />)
            }
        </ul>
    )
}

export default Checklist;