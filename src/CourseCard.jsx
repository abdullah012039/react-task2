import CardStyle from './Card-style.module.css';

const CourseCard = ({ name, imageSrc, description }) => {
  return (
    <div className={CardStyle.card}>
      <img src={imageSrc} alt="course" />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>View Course</button>
    </div>
  );
}

export default CourseCard;
