const Button = ({ className = "", icon, value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} transition-all duration-300`}
    >
      {value}
    </div>
  );
};

export default Button;
