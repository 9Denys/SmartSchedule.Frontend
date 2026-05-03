import { images } from "../../assets/images";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ role = "student" }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const isTeacher = role === "teacher";
  const isAdmin = role === "admin";

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="dashboard-header">
      <div className="header-inner">
        <div className="header-logo">
          <img src={images.calendar} alt="calendar" />
          <span>ConsultHub</span>
        </div>

        <nav className="header-nav">
          {isAdmin ? (
            <>
              <NavLink to="/admin" end className={linkClass}>
                <img src={images.dashboard} alt="" />
                Dashboard
              </NavLink>

              <NavLink to="/admin/users" className={linkClass}>
                <img src={images.people} alt="" />
                Users
              </NavLink>

              <NavLink to="/admin/system" className={linkClass}>
                <img src={images.file} alt="" />
                System Control
              </NavLink>
            </>
          ) : isTeacher ? (
            <>
              <NavLink to="/teacher" end className={linkClass}>
                <img src={images.dashboard} alt="" />
                Dashboard
              </NavLink>

              <NavLink to="/teacher/schedule" className={linkClass}>
                <img src={images.clock} alt="" />
                Schedule
              </NavLink>

              <NavLink to="/teacher/bookings" className={linkClass}>
                <img src={images.note} alt="" />
                Booked Slots
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard" end className={linkClass}>
                <img src={images.dashboard} alt="" />
                Dashboard
              </NavLink>

              <NavLink to="/teachers" className={linkClass}>
                <img src={images.people} alt="" />
                Find Teachers
              </NavLink>

              <NavLink to="/bookings" className={linkClass}>
                <img src={images.bookings} alt="" />
                My Bookings
              </NavLink>
            </>
          )}
        </nav>

        <div className="header-user">
          <div className="user-info">
            <strong>
              {isAdmin ? "Admin User" : isTeacher ? "Dr. Sarah Johnson" : "John Doe"}
            </strong>
            <span>{isAdmin ? "Admin" : isTeacher ? "Teacher" : "Student"}</span>
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