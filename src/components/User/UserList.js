import User from "./User";

const UserList = (props) => {
  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {props.items.map((user) => (
        <User key={user.username} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UserList;
