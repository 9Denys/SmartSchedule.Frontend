import "./FindTeachers.css";
import Header from "../../components/layout/Header";
import TeacherCard from "../../components/common/TeacherCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const teachers = [
  { id: 1, name: "Dr. Sarah Johnson", department: "Computer Science", slots: 4 },
  { id: 2, name: "Prof. David Lee", department: "Mathematics", slots: 2 },
  { id: 3, name: "Dr. Maria Garcia", department: "Physics", slots: 2 },
  { id: 4, name: "Prof. James Miller", department: "Computer Science", slots: 0 },
];

const FindTeachers = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const navigate = useNavigate();

  const filteredTeachers = teachers.filter((teacher) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      teacher.name.toLowerCase().includes(searchValue) ||
      teacher.department.toLowerCase().includes(searchValue);

    const matchesDepartment =
      department === "All" || teacher.department === department;

    return matchesSearch && matchesDepartment;
  });

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="department-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
          </select>
        </div>

        <div className="teachers-grid">
          {filteredTeachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              name={teacher.name}
              department={teacher.department}
              slots={teacher.slots}
              onClick={() => navigate(`/teachers/${teacher.id}`)}
            />
          ))}

          {filteredTeachers.length === 0 && (
            <p className="empty-text">No teachers found</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default FindTeachers;