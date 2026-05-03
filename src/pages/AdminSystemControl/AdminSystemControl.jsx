import "./AdminSystemControl.css";
import Header from "../../components/layout/Header";
import { images } from "../../assets/images";
import { useState } from "react";

const bookings = [
  {
    id: "b1",
    student: "John Doe",
    teacher: "Dr. Sarah Johnson",
    department: "Computer Science",
    date: "2026-04-28",
    time: "10:00 - 11:00",
    status: "Active",
  },
  {
    id: "b2",
    student: "Emma Wilson",
    teacher: "Prof. David Lee",
    department: "Mathematics",
    date: "2026-04-29",
    time: "09:00 - 10:00",
    status: "Active",
  },
  {
    id: "b3",
    student: "John Doe",
    teacher: "Dr. Maria Garcia",
    department: "Physics",
    date: "2026-04-27",
    time: "10:00 - 11:00",
    status: "Cancelled",
  },
];

const timeSlots = [
  {
    id: "ts1",
    teacher: "Dr. Sarah Johnson",
    department: "Computer Science",
    date: "2026-04-28",
    time: "09:00 - 10:00",
    status: "Available",
  },
  {
    id: "ts2",
    teacher: "Dr. Sarah Johnson",
    department: "Computer Science",
    date: "2026-04-28",
    time: "10:00 - 11:00",
    status: "Booked",
  },
  {
    id: "ts3",
    teacher: "Dr. Sarah Johnson",
    department: "Computer Science",
    date: "2026-04-28",
    time: "14:00 - 15:00",
    status: "Available",
  },
  {
    id: "ts4",
    teacher: "Dr. Sarah Johnson",
    department: "Computer Science",
    date: "2026-04-29",
    time: "09:00 - 10:00",
    status: "Available",
  },
  {
    id: "ts5",
    teacher: "Dr. Sarah Johnson",
    department: "Computer Science",
    date: "2026-04-29",
    time: "11:00 - 12:00",
    status: "Available",
  },
];

const AdminSystemControl = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  const [status, setStatus] = useState("All");

  const filteredBookings =
    status === "All"
      ? bookings
      : bookings.filter((booking) => booking.status === status);

  const filteredSlots =
    status === "All"
      ? timeSlots
      : timeSlots.filter((slot) => slot.status === status);

  return (
    <div className="admin-system-page">
      <Header role="admin" />

      <main className="admin-system-content">
        <section className="admin-system-title">
          <h1>System Control</h1>
          <p>View and manage all bookings and time slots</p>
        </section>

        <div className="system-toolbar">
          <div className="system-tabs">
            <button
              className={
                activeTab === "bookings"
                  ? "system-tab-btn active"
                  : "system-tab-btn"
              }
              onClick={() => setActiveTab("bookings")}
            >
              All Bookings
            </button>

            <button
              className={
                activeTab === "slots"
                  ? "system-tab-btn active"
                  : "system-tab-btn"
              }
              onClick={() => setActiveTab("slots")}
            >
              All Time Slots
            </button>
          </div>

          <div className="system-status-filter">
            <img src={images.file} alt="" />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>
        </div>

        {activeTab === "bookings" ? (
          <section className="admin-system-card">
            <div className="admin-system-card-header">
              <h2>All Bookings ({filteredBookings.length})</h2>
            </div>

            <div className="admin-system-table">
              <div className="admin-system-row admin-system-head admin-system-bookings-row">
                <span>Booking ID</span>
                <span>Student</span>
                <span>Teacher</span>
                <span>Date</span>
                <span>Time</span>
                <span>Status</span>
              </div>

              {filteredBookings.map((booking) => (
                <div
                  className="admin-system-row admin-system-bookings-row"
                  key={booking.id}
                >
                  <strong>{booking.id}</strong>

                  <div className="admin-system-person-cell">
                    <div className="admin-system-avatar">
                      <img src={images.people} alt="" />
                    </div>
                    <span>{booking.student}</span>
                  </div>

                  <div className="admin-system-person-cell">
                    <div className="admin-system-avatar">
                      <img src={images.people} alt="" />
                    </div>
                    <div>
                      <span>{booking.teacher}</span>
                      <p>{booking.department}</p>
                    </div>
                  </div>

                  <div className="admin-system-icon-cell">
                    <img src={images.note} alt="" />
                    <span>{booking.date}</span>
                  </div>

                  <div className="admin-system-icon-cell">
                    <img src={images.clock} alt="" />
                    <span>{booking.time}</span>
                  </div>

                  <span
                    className={`admin-system-status ${booking.status.toLowerCase()}`}
                  >
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="admin-system-card">
            <div className="admin-system-card-header">
              <h2>All Time Slots ({filteredSlots.length})</h2>
            </div>

            <div className="admin-system-table">
              <div className="admin-system-row admin-system-head admin-system-slots-row">
                <span>Slot ID</span>
                <span>Teacher</span>
                <span>Date</span>
                <span>Time</span>
                <span>Status</span>
              </div>

              {filteredSlots.map((slot) => (
                <div
                  className="admin-system-row admin-system-slots-row"
                  key={slot.id}
                >
                  <strong>{slot.id}</strong>

                  <div className="admin-system-person-cell">
                    <div className="admin-system-avatar">
                      <img src={images.people} alt="" />
                    </div>
                    <div>
                      <span>{slot.teacher}</span>
                      <p>{slot.department}</p>
                    </div>
                  </div>

                  <div className="admin-system-icon-cell">
                    <img src={images.note} alt="" />
                    <span>{slot.date}</span>
                  </div>

                  <div className="admin-system-icon-cell">
                    <img src={images.clock} alt="" />
                    <span>{slot.time}</span>
                  </div>

                  <span
                    className={`admin-system-status ${slot.status.toLowerCase()}`}
                  >
                    {slot.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminSystemControl;