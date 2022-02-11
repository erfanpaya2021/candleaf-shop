import classes from "./Quote.module.css";

const Quote = ({ name, message, image }) => {
  return (
    <div className={classes.quote}>
      <img
        src={require(`../../assets/images/testimonials/${image}`)}
        alt="person"
      />
      <h3 className={classes.quote__message}>{message}</h3>
      <h4 className={classes.quote__name}>{name}</h4>
    </div>
  );
};

export default Quote;
