const DashboardCard = ({ title, children }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>

      {children}
    </div>
  );
};

export default DashboardCard;