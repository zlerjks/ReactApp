import Age from "./Age";
import Username from "./Username";
import Button from "./Button";
import Card from "./Card";
import '../Css/Form.css'

function TheForm (props) {
    function defaultSubmit (e) {
        e.preventDefault();
        const inputname = (e.target[0].value);
        const inputage = (e.target[1].value);
        props.submitHandler(inputname, inputage);

        e.target.reset(); //resets the input fields
    }
    return (
        <Card>
            <form className="formstyle" onSubmit={defaultSubmit} >
                <Username />
                <Age />
                <Button />
            </form>
        </Card>
    );
}

export default TheForm;