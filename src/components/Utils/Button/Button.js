import classes from "./Button.module.css";

const Button = ({ buttonAttributes, children }) => {
  return (
    <button className={classes.button} {...buttonAttributes}>
      {children}
    </button>
  );
};

export default Button;
