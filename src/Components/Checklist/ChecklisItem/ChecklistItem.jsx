import { useId } from 'react';
import Button from '../../Button/Button';

function ChecklistItem({
    taskData
}) {
    const id = useId();

    return (
        <li>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </li>
    )
}

export default ChecklistItem;