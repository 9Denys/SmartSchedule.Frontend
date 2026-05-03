import { images } from "../../assets/images";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ role = "student" }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const isTeacher = role === "teacher";

  return (
    <header className="dashboard-header">
      <div className="header-inner">
        <div className="header-logo">
          <img src={images.calendar} alt="calendar" />
          <span>ConsultHub</span>
        </div>

        <nav className="header-nav">
          {isTeacher ? (
            <>
              <NavLink to="/teacher" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <img src={images.dashboard} alt="" />
                Dashboard
              </NavLink>

              <NavLink to="/teacher/schedule" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <img src={images.clock} alt="" />
                Schedule
              </NavLink>

              <NavLink to="/teacher/bookings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <img src={images.note} alt="" />
                Booked Slots
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <img src={images.dashboard} alt="" />
                Dashboard
              </NavLink>

              <NavLink to="/teachers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <img src={images.people} alt="" />
                Find Teachers
              </NavLink>

              <NavLink to="/bookings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <img src={images.bookings} alt="" />
                My Bookings
              </NavLink>
            </>
          )}
        </nav>

        <div className="header-user">
          <div className="user-info">
            <strong>{isTeacher ? "Dr. Sarah Johnson" : "John Doe"}</strong>
            <span>{isTeacher ? "Teacher" : "Student"}</span>
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