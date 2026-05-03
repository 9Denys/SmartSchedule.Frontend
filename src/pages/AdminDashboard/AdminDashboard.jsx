import "./AdminDashboard.css";
import Header from "../../components/layout/Header";
import StatCard from "../../components/common/StatCard";
import DashboardCard from "../../components/common/DashboardCard";
import QuickAction from "../../components/common/QuickAction";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard-page">
      <Header role="admin" />

      <main className="admin-dashboard-content">
        <section className="admin-title">
          <h1>Admin Dashboard</h1>
          <p>System overview and management</p>
        </section>

        <section className="admin-stats-grid">
          <StatCard icon={images.people} value="9" label="Total Users" color="blue" />
          <StatCard icon={images.bookings} value="3" label="Students" color="green" />
          <StatCard icon={images.people} value="5" label="Teachers" color="purple" />
          <StatCard icon={images.note} value="2" label="Active Bookings" color="orange" />
        </section>

        <section className="admin-main-grid">
          <DashboardCard title="System Statistics">
            <div className="system-stats">
              <div className="system-row">
                <span>Total Time Slots</span>
                <strong>10</strong>
              </div>

              <div className="system-row">
                <span>Available Slots</span>
                <strong>8</strong>
              </div>

              <div className="system-row">
                <span>Booked Slots</span>
                <strong>2</strong>
              </div>

              <div className="system-row">
                <span>Cancelled Bookings</span>
                <strong>1</strong>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Recent Bookings">
            <div className="recent-bookings">
              <div className="recent-booking-item">
                <div>
                  <h3>Booking #b3</h3>
                  <p>Cancelled</p>
                </div>

                <div className="recent-time">
                  <img src={images.clock} alt="" />
                  <span>10:00</span>
                  <p>2026-04-27</p>
                </div>
              </div>

              <div className="recent-booking-item">
                <div>
                  <h3>Booking #b2</h3>
                  <p>Active</p>
                </div>

                <div className="recent-time">
                  <img src={images.clock} alt="" />
                  <span>09:00</span>
                  <p>2026-04-29</p>
                </div>
              </div>

              <div className="recent-booking-item">
                <div>
                  <h3>Booking #b1</h3>
                  <p>Active</p>
                </div>

                <div className="recent-time">
                  <img src={images.clock} alt="" />
                  <span>10:00</span>
                  <p>2026-04-28</p>
                </div>
              </div>
            </div>
          </DashboardCard>
        </section>

        <section className="admin-actions-grid">
          <QuickAction
            icon={images.people}
            title="User Management"
            text="Manage users and roles"
            color="action-blue"
            onClick={() => navigate("/admin/users")}
          />

          <QuickAction
            icon={images.note}
            title="System Control"
            text="View bookings and slots"
            color="action-green"
            onClick={() => navigate("/admin/system")}
          />

          <QuickAction
            icon={images.clock}
            title="System Health"
            text="All systems operational"
            color="action-gray"
          />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;