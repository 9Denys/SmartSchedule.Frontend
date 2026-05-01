import "./MyBookings.css";
import Header from "../../components/layout/Header";
import { images } from "../../assets/images";

const MyBookings = () => {
  return (
    <div className="bookings-page">
      <Header />

      <main className="bookings-content">
        <section className="bookings-title">
          <h1>My Bookings</h1>
          <p>View and manage your consultation bookings</p>
        </section>

        <section className="bookings-card">
          <div className="bookings-card-header">
            <h2>Active Bookings</h2>
          </div>

          <div className="bookings-table">
            <div className="bookings-row bookings-head">
              <span>Teacher</span>
              <span>Department</span>
              <span>Date</span>
              <span>Time</span>
              <span>Actions</span>
            </div>

            <div className="bookings-row">
              <div className="teacher-cell">
                <div className="teacher-avatar">
                  <img src={images.people} alt="" />
                </div>
                <strong>Dr. Sarah Johnson</strong>
              </div>

              <span>Computer Science</span>

              <div className="icon-cell">
                <img src={images.note} alt="" />
                <span>2026-04-28</span>
              </div>

              <div className="icon-cell">
                <img src={images.clock} alt="" />
                <span>10:00 - 11:00</span>
              </div>

              <button className="cancel-btn">Cancel</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyBookings;