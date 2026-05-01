const QuickAction = ({ icon, title, text, color, onClick }) => {
  return (
    <button className={`quick-action ${color}`} onClick={onClick}>
      <img src={icon} alt="" />

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </button>
  );
};

export default QuickAction;