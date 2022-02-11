import tick from "../../assets/images/tick.png";
import classes from "./Benefit.module.css";

const Benefit = ({ title, description }) => {
  return (
    <div className={classes.benefit}>
      <span className={classes.benefit__title}>
        <img src={tick} alt="tick" loading="lazy" /> {title}:&nbsp;
      </span>
      <span className={classes.benefit__description}>{description}</span>
    </div>
  );
};

export default Benefit;
