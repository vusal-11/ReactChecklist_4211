import Button from "../Button/Button";
import InputTypeText from "../InputTypeText/InputTypeText";
import styles from "./Form.module.scss";

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form>
            <InputTypeText />
            <Button clickHandler={handleSubmit}>Add</Button>
        </form>
    )
}

export default Form;