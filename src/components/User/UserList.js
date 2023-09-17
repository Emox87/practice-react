import Card from "../UI/Card/Card";
import User from "./User";

const UserList = (props) => {
  return (
    <div>
      {props.items.map((user) => (
        <User key={user.username} username={user.username} age={user.age} />
      ))}
    </div>
  );
};

export default UserList;
