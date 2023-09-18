import React, { useState, Fragment } from "react";

import Card from "./components/UI/Card/Card";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

const App = () => {
  const [users, setUsers] = useState("");

  const onAddUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  // Paragraph Styles
  const paraNoData = {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  return (
    <Fragment>
      <Card>
        <AddUser onAddUser={onAddUser} />
      </Card>
      <Card>
        {!users ? (
          <p style={paraNoData}>No Users Found! Maybe add some?</p>
        ) : (
          <UserList items={users} />
        )}
      </Card>
    </Fragment>
  );
};

export default App;
