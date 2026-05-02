import { images } from "../../assets/images";

const TeacherCard = ({ name, department, slots, onClick }) => {
  return (
    <div className="teacher-card">
      <div className="teacher-info">
        <div className="teacher-avatar">
          <img src={images.people} alt="" />
        </div>

        <div>
          <h3>{name}</h3>
          <p>{department}</p>

          <div className="teacher-slots">
            <img src={images.bookings} alt="" />
            <span>{slots} slots available</span>
          </div>
        </div>
      </div>

      <button className="view-btn" onClick={onClick}>
        View
      </button>
    </div>
  );
};

export default TeacherCard;