import { Fragment } from "react";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Modal/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      e.target[0].value.trim().length === 0 ||
      e.target[1].value.lenght === 0
    ) {
      alert("Please insert some data!");
      return;
    } else {
      props.onAddUser({
        username: e.target[0].value.toString(),
        age: +e.target[1].value,
      });
      document.getElementById("addUserForm").reset();
    }
  };

  return (
    <Fragment>
      <ErrorModal title="An Error occured" message="Something went wrong" />
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
    </Fragment>
  );
};

export default AddUser;
