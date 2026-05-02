import "./TeacherDetails.css";
import Header from "../../components/layout/Header";
import { images } from "../../assets/images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherDetails = () => {
  const navigate = useNavigate();

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const slots = [
    { id: 1, date: "2026-04-28", day: "Tue, Apr 28", time: "09:00 - 10:00" },
    { id: 2, date: "2026-04-28", day: "Tue, Apr 28", time: "14:00 - 15:00" },
    { id: 3, date: "2026-04-29", day: "Wed, Apr 29", time: "09:00 - 10:00" },
    { id: 4, date: "2026-04-29", day: "Wed, Apr 29", time: "11:00 - 12:00" },
  ];

  const handleConfirmBooking = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="teacher-details-page">
      <Header />

      <main className="teacher-details-content">
        <section className="teacher-details-grid">
          <div className="teacher-info-card">
            <div className="teacher-card-header">
              <h2>Teacher Information</h2>
            </div>

            <div className="teacher-profile">
              <div className="teacher-big-avatar">
                <img src={images.people} alt="" />
              </div>

              <h1>Dr. Sarah Johnson</h1>
              <p>Computer Science</p>
            </div>

            <div className="teacher-meta">
              <div className="teacher-meta-item">
                <img src={images.mail} alt="" />
                <span>sarah@teacher.edu</span>
              </div>

              <div className="teacher-meta-item">
                <img src={images.file} alt="" />
                <span>Computer Science</span>
              </div>

              <div className="teacher-meta-item">
                <img src={images.note} alt="" />
                <span>4 slots available</span>
              </div>
            </div>
          </div>

          <div className="slots-card">
            <div className="teacher-card-header">
              <h2>Available Time Slots</h2>
            </div>

            <div className="slots-content">
              <div className="slots-day">
                <h3>Tue, Apr 28</h3>

                <div className="slots-list">
                  {slots
                    .filter((slot) => slot.day === "Tue, Apr 28")
                    .map((slot) => (
                      <button
                        key={slot.id}
                        className={
                          selectedSlot?.id === slot.id
                            ? "slot-btn selected"
                            : "slot-btn"
                        }
                        onClick={() => setSelectedSlot(slot)}
                      >
                        <img src={images.clock} alt="" />
                        {slot.time}
                      </button>
                    ))}
                </div>
              </div>

              <div className="slots-day">
                <h3>Wed, Apr 29</h3>

                <div className="slots-list">
                  {slots
                    .filter((slot) => slot.day === "Wed, Apr 29")
                    .map((slot) => (
                      <button
                        key={slot.id}
                        className={
                          selectedSlot?.id === slot.id
                            ? "slot-btn selected"
                            : "slot-btn"
                        }
                        onClick={() => setSelectedSlot(slot)}
                      >
                        <img src={images.clock} alt="" />
                        {slot.time}
                      </button>
                    ))}
                </div>
              </div>

              {selectedSlot && (
                <>
                  <div className="slots-divider" />

                  <button
                    className="book-slot-btn"
                    onClick={() => setShowConfirmModal(true)}
                  >
                    Book Selected Slot
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h2>Confirm Booking</h2>
              <button onClick={() => setShowConfirmModal(false)}>×</button>
            </div>

            <div className="modal-body">
              <p>You are about to book a consultation with:</p>

              <div className="booking-preview">
                <h3>Dr. Sarah Johnson</h3>
                <p>Computer Science</p>
                <div />
                <span>
                  {selectedSlot.date} at {selectedSlot.time}
                </span>
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="cancel-modal-btn"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </button>

              <button
                className="confirm-modal-btn"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-card success-modal">
            <div className="modal-header">
              <h2>Booking Confirmed</h2>
              <button onClick={() => setShowSuccessModal(false)}>×</button>
            </div>

            <div className="success-content">
              <div className="success-icon">✓</div>

              <p>Your consultation has been successfully booked!</p>

              <button
                className="confirm-modal-btn"
                onClick={() => navigate("/bookings")}
              >
                View My Bookings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDetails;