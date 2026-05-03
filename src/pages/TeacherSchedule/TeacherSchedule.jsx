import "./TeacherSchedule.css";
import Header from "../../components/layout/Header";
import { images } from "../../assets/images";
import { useState } from "react";

const timeOptions = [];

for (let hour = 8; hour <= 18; hour++) {
  for (let minute = 0; minute < 60; minute += 5) {
    const h = String(hour).padStart(2, "0");
    const m = String(minute).padStart(2, "0");
    timeOptions.push(`${h}:${m}`);
  }
}

const initialSlots = [
  {
    id: 1,
    date: "Tuesday, April 28, 2026",
    time: "09:00 - 10:00",
    status: "Available",
  },
  {
    id: 2,
    date: "Tuesday, April 28, 2026",
    time: "10:00 - 11:00",
    status: "Booked",
  },
  {
    id: 3,
    date: "Tuesday, April 28, 2026",
    time: "14:00 - 15:00",
    status: "Available",
  },
  {
    id: 4,
    date: "Wednesday, April 29, 2026",
    time: "09:00 - 10:00",
    status: "Available",
  },
  {
    id: 5,
    date: "Wednesday, April 29, 2026",
    time: "11:00 - 12:00",
    status: "Available",
  },
];

const TeacherSchedule = () => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [slots, setSlots] = useState(initialSlots);

  const handleAddSlot = () => {
    if (!date || !startTime || !endTime) return;

    const newSlot = {
      id: Date.now(),
      date,
      time: `${startTime} - ${endTime}`,
      status: "Available",
    };

    setSlots([newSlot, ...slots]);
    setDate("");
    setStartTime("09:00");
    setEndTime("10:00");
  };

  const handleDeleteSlot = (slotId) => {
    setSlots(slots.filter((slot) => slot.id !== slotId));
  };

  const groupedDates = [...new Set(slots.map((slot) => slot.date))];

  return (
    <div className="teacher-schedule-page">
      <Header role="teacher" />

      <main className="teacher-schedule-content">
        <section className="schedule-title">
          <h1>Schedule Management</h1>
          <p>Set your working hours and manage your consultation time slots</p>
        </section>

        <section className="schedule-grid">
          <div className="schedule-card add-slot-card">
            <div className="schedule-card-header">
              <h2>Add New Time Slot</h2>
            </div>

            <div className="schedule-form">
              <label>Date</label>
              <div className="field-with-icon">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <img src={images.note} alt="" />
              </div>

              <label>Start Time</label>
              <div className="field-with-icon">
                <select
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <img src={images.clock} alt="" />
              </div>

              <label>End Time</label>
              <div className="field-with-icon">
                <select
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <img src={images.clock} alt="" />
              </div>

              <button className="add-slot-btn" onClick={handleAddSlot}>
                + Add Time Slot
              </button>
            </div>
          </div>

          <div className="schedule-card slots-card">
            <div className="schedule-card-header">
              <h2>Your Time Slots</h2>
            </div>

            <div className="slots-list-wrapper">
              {groupedDates.map((date) => (
                <div className="slots-date-group" key={date}>
                  <h3>{date}</h3>

                  {slots
                    .filter((slot) => slot.date === date)
                    .map((slot) => (
                      <div className="schedule-slot" key={slot.id}>
                        <div className="slot-left">
                          <img src={images.clock} alt="" />
                          <strong>{slot.time}</strong>

                          <span
                            className={
                              slot.status === "Booked"
                                ? "status booked"
                                : "status available"
                            }
                          >
                            {slot.status}
                          </span>
                        </div>

                        {slot.status !== "Booked" && (
                          <button
                            className="delete-slot-btn"
                            onClick={() => handleDeleteSlot(slot.id)}
                          >
                            <img src={images.bin} alt="delete" />
                          </button>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeacherSchedule;