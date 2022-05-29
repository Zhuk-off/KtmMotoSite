import styles from './Moto.module.scss';

const Moto = (props) => {
  // console.log('motoMoto Data ===', props);
  return (
    <div className={styles.Moto}>
      <h2>{props.name}</h2>
      <img src={props.img} alt={`${props.name}`} />
    </div>
  );
};

export { Moto };
