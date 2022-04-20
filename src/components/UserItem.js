function UserItem (props) {
    return (
        <div className="userlist">
            <p className = "enteredname">{props.name}</p>
            <p className="enteredage">{props.age}</p>
        </div>
    )
}

export default UserItem;