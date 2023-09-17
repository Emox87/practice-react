import { Fragment } from "react";

import User from "./User";

const UserList = (props) => {
  return (
    <Fragment>
      {props.items.map((user) => (
        <User key={user.username} username={user.username} age={user.age} />
      ))}
    </Fragment>
  );
};

export default UserList;
