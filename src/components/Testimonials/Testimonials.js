import { TESTIMONIALS_DATA } from "./testimonial-data";
import Quote from "./Quote";
import SectionHeader from "../Utils/SectionHeader/SectionHeader";

import classes from "./Testimonials.module.css";
import TestimonialsList from "./TestimonialsList";

const Testimonials = () => {
  const quotes = TESTIMONIALS_DATA.map((item) => (
    <Quote key={item.id} {...item} />
  ));

  return (
    <div className={classes.testimonials}>
      <SectionHeader
        title="نظرات شما"
        subtitle="چند نقل قول از مشتریان خوشحال ما"
      />

      <TestimonialsList quotes={quotes} />
    </div>
  );
};

export default Testimonials;
