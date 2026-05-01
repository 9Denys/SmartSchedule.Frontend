const StatCard = ({ icon, value, label, color }) => {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        <img src={icon} alt="" />
      </div>

      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default StatCard;