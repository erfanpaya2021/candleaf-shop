import Button from "../Utils/Button/Button";
import classes from "./Showcase.module.css";

const Showcase = () => {
  return (
    <section className={classes.showcase}>
      <div className={classes.showcase__content}>
        <h2>شمع های طبیعت</h2>
        <p>
          شمع برگ تماما دست ساز با موم سویا طبیعی همراهی برای تمام لحظات لذت بخش
          شماست
        </p>
        <Button>دنبال کردن مجموعه ما</Button>
      </div>
    </section>
  );
};

export default Showcase;
