const QuickAction = ({ icon, title, text, color }) => {
  return (
    <button className={`quick-action ${color}`}>
      <img src={icon} alt="" />

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </button>
  );
};

export default QuickAction;