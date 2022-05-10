import './Moto.css';

const Moto = (props) => {
  let motoClasses = ['Moto'];

  return (
    <div className={motoClasses}>
      <h2>{props.name}</h2>
      <img className="Moto__imgMoto" src={props.img} alt={`${props.name}`} />
    </div>
  );
};

export { Moto };
