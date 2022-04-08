import './Button.css';

const Button = (props) => {
  return (
    <div className="motoCard__order ">
      <h3>{props.title}</h3>
    </div>
  );
};

export { Button };
