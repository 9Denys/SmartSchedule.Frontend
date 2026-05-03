import "./TeacherDashboard.css";
import Header from "../../components/layout/Header";
import StatCard from "../../components/common/StatCard";
import DashboardCard from "../../components/common/DashboardCard";
import QuickAction from "../../components/common/QuickAction";
import ConsultationItem from "../../components/common/ConsultationItem";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="teacher-dashboard-page">
      <Header role="teacher" />

      <main className="teacher-dashboard-content">
        <section className="dashboard-title">
          <h1>Dashboard</h1>
          <p>Welcome back, Dr. Sarah Johnson</p>
        </section>

        <section className="teacher-stats-grid">
          <StatCard
            icon={images.note}
            value="1"
            label="Total Bookings"
            color="blue"
          />

          <StatCard
            icon={images.clock}
            value="4"
            label="Available Slots"
            color="green"
          />

          <StatCard
            icon={images.people}
            value="0"
            label="Today's Sessions"
            color="purple"
          />

          <StatCard
            icon={images.bookings}
            value="5"
            label="Total Slots"
            color="orange"
          />
        </section>

        <section className="teacher-dashboard-grid">
          <DashboardCard title="Upcoming Consultations">
            <ConsultationItem
              teacher="John Doe"
              subject="john@student.edu"
              time="10:00 - 11:00"
              date="2026-04-28"
            />
          </DashboardCard>

          <DashboardCard title="Quick Actions">
            <div className="quick-actions">
              <QuickAction
                icon={images.clock}
                title="Manage Schedule"
                text="Set working hours and slots"
                color="action-blue"
                onClick={() => navigate("/teacher/schedule")}
              />

              <QuickAction
                icon={images.note}
                title="View Bookings"
                text="See all booked consultations"
                color="action-green"
                onClick={() => navigate("/teacher/bookings")}
              />
            </div>
          </DashboardCard>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;