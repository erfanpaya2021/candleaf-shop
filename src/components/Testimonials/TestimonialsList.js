import classes from "./TestimonialsList.module.css";

const TestimonialsList = ({ quotes }) => {
  return <div className={classes["testimonials-list"]}>{quotes}</div>;
};

export default TestimonialsList;
