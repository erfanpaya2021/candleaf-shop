import tick from "../../assets/images/tick.png";
import classes from "./Benefit.module.css";

const Benefit = ({ title, description }) => {
  return (
    <div className={classes.benefit}>
      <img src={tick} alt="tick" />
      <span className={classes.benefit__title}>{title}:&nbsp;</span>
      <span className={classes.benefit__description}>{description}</span>
    </div>
  );
};

export default Benefit;
