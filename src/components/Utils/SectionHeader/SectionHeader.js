import classes from "./SectionHeader.module.css";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <>
      <h2 className={classes.h2}>{title}</h2>
      <p className={classes.p}>{subtitle}</p>
    </>
  );
};

export default SectionHeader;
