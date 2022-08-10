import classes from '../styles/Illustration.module.css';

const Illustration = ({ imagefile }) => {
  return (
    <div className={classes.illustration}>
      <img src={`image/${imagefile}`} alt='Signup' />
    </div>
  );
};

export default Illustration;
