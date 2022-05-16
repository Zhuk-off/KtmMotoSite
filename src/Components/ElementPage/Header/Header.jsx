import styles from './Header.module.scss';

const Header = (props) => {
  let models;
  switch (props.length) {
    case 1:
      models = 'модель';
      break;
    case 2:
    case 3:
    case 4:
      models = 'модели';
      break;
    default:
      models = 'моделей';
      break;
  }
  if (props.length === undefined) {
    models = '';
  }
  return (
    <div
      className={styles.pageHeading}
      style={{
        backgroundImage: 'url(' + props.background + ')',
      }}
    >
      <div className={styles.pageHeadingText}>
        <h1>{props.category} </h1>
        <h2>{props.description}</h2>
        <h3>
          {props.length} {models}
        </h3>
      </div>
    </div>
  );
};

export { Header };
