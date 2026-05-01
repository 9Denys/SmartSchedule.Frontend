import { images } from "../../assets/images";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
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
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={images.dashboard} alt="" />
            Dashboard
          </NavLink>

          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={images.people} alt="" />
            Find Teachers
          </NavLink>

          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <img src={images.bookings} alt="" />
            My Bookings
          </NavLink>
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