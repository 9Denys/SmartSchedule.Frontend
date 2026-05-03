import "./TeacherBookings.css";
import Header from "../../components/layout/Header";
import { images } from "../../assets/images";

const TeacherBookings = () => {
  return (
    <div className="teacher-bookings-page">
      <Header role="teacher" />

      <main className="teacher-bookings-content">
        <section className="teacher-bookings-title">
          <h1>Booked Slots</h1>
          <p>View all student consultations</p>
        </section>

        <section className="teacher-bookings-card">
          <div className="teacher-bookings-card-header">
            <h2>All Bookings</h2>
          </div>

          <div className="teacher-bookings-body">
            <div className="booking-date-title">
              <img src={images.note} alt="date" />
              <span>Tuesday, April 28, 2026</span>
            </div>

            <div className="teacher-booking-item">
              <div className="booking-avatar">
                <img src={images.people} alt="student" />
              </div>

              <div className="booking-info">
                <h3>John Doe</h3>

                <div className="booking-line">
                  <img src={images.mail} alt="email" />
                  <span>john@student.edu</span>
                </div>

                <div className="booking-line">
                  <img src={images.clock} alt="time" />
                  <span>10:00 - 11:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeacherBookings;