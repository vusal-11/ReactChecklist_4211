import { useId } from 'react';
import Button from '../../Button/Button';

function ChecklistItem({
    labelName
}) {
    const id = useId();

    return (
        <li>
            <input type="checkbox" id={id} checked/>
            <label htmlFor={id}>{labelName}</label>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </li>
    )
}

export default ChecklistItem;