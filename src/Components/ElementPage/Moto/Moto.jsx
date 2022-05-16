import styles from './Moto.module.scss';

const Moto = (props) => {
  let motoClasses = styles.Moto;

  return (
    <div className={motoClasses}>
      <h2>{props.name}</h2>
      <img src={props.img} alt={`${props.name}`} />
    </div>
  );
};

export { Moto };
