function UserProfile(props){

    const handleOnClick=()=>
    {
        props.onUpdateClicked("hello",12)
    }

    return(
        // <div>This is User Profile Component</div>
        <div>
        <div>{props.title}</div>
        <div>{props.name}</div>

        <button onClick={handleOnClick}>Update</button>
        </div>
    )
}

const UserRole={
ADMIN:"admin",
USER:"user"
}
export{UserProfile};
export{UserRole}