import Benefit from "./Benefit";
import { BENEFITS_DATA } from "./benefists-data";
import benefitsImage from "../../assets/images/benefits.png";
import classes from "./Benefits.module.css";

const Benefits = () => {
  const benefits = BENEFITS_DATA.map((item) => (
    <Benefit key={item} {...item} />
  ));

  return (
    <div className={classes.benefits}>
      <div className={classes.benefits__container}>
        <div className={classes.benefits__content}>
          <h2>موم سویا تمیز و معطر</h2>
          <p>ساخته شده برای خانه شما و برای سلامتی شما</p>

          <div className={classes.benefits__list}>{benefits}</div>
        </div>
        <div className={classes.benefits__image}>
          <img src={benefitsImage} alt="" />
        </div>
      </div>
    </div>
  );
};

// سازگار با محیط زیست: همه مواد قابل بازیافت، انتشار کربن دی اکسید 0٪
// ضد حساسیت: 100% طبیعی و مواد دوستدار انسان
// دست ساز: همه شمع ها با هنر و با عشق ساخته می شوند.
// سوزاندن طولانی: دیگر ضایعات وجود ندارد. برای مدت طولانی ایجاد شده است.

export default Benefits;
