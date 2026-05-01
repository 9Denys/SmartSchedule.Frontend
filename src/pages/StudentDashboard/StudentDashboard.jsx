import "./StudentDashboard.css";
import Header from "../../components/layout/Header";
import StatCard from "../../components/common/StatCard";
import DashboardCard from "../../components/common/DashboardCard";
import QuickAction from "../../components/common/QuickAction";
import ConsultationItem from "../../components/common/ConsultationItem";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <Header />

      <main className="dashboard-content">
        <section className="dashboard-title">
          <h1>Dashboard</h1>
          <p>Welcome back, John Doe</p>
        </section>

        <section className="stats-grid">
          <StatCard
            icon={images.bookings}
            value="1"
            label="Active Bookings"
            color="blue"
          />

          <StatCard
            icon={images.people}
            value="4"
            label="Available Teachers"
            color="green"
          />

          <StatCard
            icon={images.note}
            value="0"
            label="Upcoming"
            color="purple"
          />
        </section>

        <section className="dashboard-grid">
          <DashboardCard title="Upcoming Consultations">
            <ConsultationItem
              teacher="Dr. Sarah Johnson"
              subject="Computer Science"
              time="10:00 - 11:00"
              date="2026-04-28"
            />
          </DashboardCard>

          <DashboardCard title="Quick Actions">
            <div className="quick-actions">
              <QuickAction
                icon={images.people}
                title="Find Teachers"
                text="Browse available teachers"
                color="action-blue"
                onClick={() => navigate("/teachers")}
              />

              <QuickAction
                icon={images.bookings}
                title="My Bookings"
                text="View and manage bookings"
                color="action-green"
                onClick={() => navigate("/bookings")}
              />
            </div>
          </DashboardCard>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;