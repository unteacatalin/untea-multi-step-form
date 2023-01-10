import Image from 'next/image';
import cls from 'classnames';

import styles from '../../styles/option.module.css';

function Option(props) {
  const { imageSrc, name, price, id, setSelectedPlan, selected, freebie } =
    props;
  return (
    <div
      className={cls(styles.container, selected && styles.selected)}
      onClick={() => setSelectedPlan(id)}
    >
      <Image
        width={0}
        height={0}
        className={styles.icon}
        src={imageSrc}
        alt={name}
      />
      <div className={styles.namePriceWrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.freebie}>{freebie}</div>
      </div>
    </div>
  );
}

export default Option;
