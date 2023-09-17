import { useState } from "react";

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

  return (
    <Card>
      <AddUser onAddUser={onAddUser} />
      {!users ? (
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          No Users Found! Maybe add some?
        </p>
      ) : (
        <UserList items={users} />
      )}
    </Card>
  );
};

export default App;
