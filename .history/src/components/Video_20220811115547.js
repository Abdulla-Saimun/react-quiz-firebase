// import { Link } from 'react-router-dom';
import image from '../assets/images/3.jpg';
import classes from '../styles/Video.module.css';

export default function Video({ title, id, noq }) {
  return (
    // <Link to='/quiz'>
    <div className={classes.video}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq}</p>
        <p>Total Points: {noq}</p>
      </div>
    </div>
    // </Link>
  );
}
