import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // потом тут будет очистка токена
    navigate("/");
  };

  return (
    <header className="dashboard-header">
      <div className="header-inner">
        <div className="header-logo">
          <img src={images.calendar} alt="calendar" />
          <span>SmartSchedule</span>
        </div>

        <nav className="header-nav">
          <a className="nav-link active">
            <img src={images.dashboard} alt="" />
            Dashboard
          </a>

          <a className="nav-link">
            <img src={images.people} alt="" />
            Find Teachers
          </a>

          <a className="nav-link">
            <img src={images.bookings} alt="" />
            My Bookings
          </a>
        </nav>

        <div className="header-user">
          <div className="user-info">
            <strong>John Doe</strong>
            <span>Student</span>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            <img src={images.exit} alt="" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;