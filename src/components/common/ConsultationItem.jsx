import { images } from "../../assets/images";

const ConsultationItem = ({ teacher, subject, time, date }) => {
  return (
    <div className="consultation-item">
      <div>
        <h3>{teacher}</h3>
        <p>{subject}</p>
      </div>

      <div className="consultation-time">
        <div>
          <img src={images.clock} alt="" />
          <span>{time}</span>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ConsultationItem;