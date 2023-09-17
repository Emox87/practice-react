import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddUser({
      username: e.target[0].value.toString(),
      age: +e.target[1].value,
    });
    document.getElementById("addUserForm").reset();
  };

  return (
    <form
      id="addUserForm"
      className={classes.addUserForm}
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" step="1" id="age" />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
