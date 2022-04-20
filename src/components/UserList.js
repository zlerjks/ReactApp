import Card from "./Card";
import UserItem from "./UserItem";
import '../Css/Form.css';

function UserList (props) {
    return (
        <Card>
            <UserItem name = {props.enteredname} age = {props.enteredage}/>
        </Card>
    )
}

export default UserList;