import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
  return (
    <form id="addUserForm" className={classes.addUserForm}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" step="1" id="age" />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
