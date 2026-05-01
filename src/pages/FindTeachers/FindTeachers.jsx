import "./FindTeachers.css";
import Header from "../../components/layout/Header";
import TeacherCard from "../../components/common/TeacherCard";

const FindTeachers = () => {
  return (
    <div className="find-page">
      <Header />

      <main className="find-content">
        <div className="find-title">
          <h1>Find Teachers</h1>
          <p>Browse and book consultations with available teachers</p>
        </div>

        <div className="find-controls">
          <input
            type="text"
            placeholder="Search by name or department..."
            className="search-input"
          />

          <select className="department-select">
            <option>All Departments</option>
            <option>Computer Science</option>
            <option>Mathematics</option>
            <option>Physics</option>
          </select>
        </div>

        <div className="teachers-grid">
          <TeacherCard
            name="Dr. Sarah Johnson"
            department="Computer Science"
            slots={4}
          />

          <TeacherCard
            name="Prof. David Lee"
            department="Mathematics"
            slots={2}
          />

          <TeacherCard
            name="Dr. Maria Garcia"
            department="Physics"
            slots={2}
          />

          <TeacherCard
            name="Prof. James Miller"
            department="Computer Science"
            slots={0}
          />
        </div>
      </main>
    </div>
  );
};

export default FindTeachers;