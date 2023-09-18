import classes from "./User.module.css";

const User = (props) => {
  return (
    <li className={classes.userItem}>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default User;
