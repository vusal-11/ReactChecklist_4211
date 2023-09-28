import { useId } from "react";
import Button from "../../Button/Button";




function ChecklistItem({
    taskData,
    dispatch
}){
    const id = useId();
    const handleDelete=()=>{
       dispatch({type:'deleteTask',payload:taskData.id})
    }
    return (

        <li>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button>Edit</Button>
            <Button clickHandler={handleDelete}>Delete</Button>
        </li>

    )

}


export default ChecklistItem;
