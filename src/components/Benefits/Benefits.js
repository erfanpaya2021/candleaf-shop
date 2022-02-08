import Benefit from "./Benefit";
import { BENEFITS_DATA } from "./benefists-data";
import benefitsImage from "../../assets/images/benefits.png";
import classes from "./Benefits.module.css";
import SectionHeader from "../Utils/SectionHeader/SectionHeader";

const Benefits = () => {
  const benefits = BENEFITS_DATA.map((item) => (
    <Benefit key={item.id} {...item} />
  ));

  return (
    <section className={classes.benefits}>
      <div className={classes.benefits__container}>
        <div className={classes.benefits__content}>
          <SectionHeader
            title="موم سویا تمیز و معطر"
            subtitle="ساخته شده برای خانه شما و برای سلامتی شما"
          />

          <div className={classes.benefits__list}>{benefits}</div>
        </div>
        <div className={classes.benefits__image}>
          <img src={benefitsImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
