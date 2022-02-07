import classes from "./Showcase.module.css";

const Showcase = () => {
  return (
    <div className={classes.showcase}>
      <div className={classes.showcase__content}>
        <h2>شمع های طبیعت</h2>
        <p>
          شمع برگ تماما دست ساز با موم سویا طبیعی همراهی برای تمام لحظات لذت بخش
          شماست
        </p>
        <button>دنبال کردن مجموعه ما</button>
      </div>
    </div>
  );
};

export default Showcase;
