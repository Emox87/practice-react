import classes from "./User.module.css";

const User = (props) => {
  return (
    <div className={classes.userItem}>
      <p>
        {props.username} ({props.age} years old)
      </p>
    </div>
  );
};

export default User;
