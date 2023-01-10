import { Fragment } from 'react';
import cls from 'classnames';

import styles from '../../styles/prev-button.module.css';

function PrevButton(props) {
  const { setPushedButton, dontShow } = props;
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={cls(styles.button, dontShow && styles.hide_button)}
        onClick={() => setPushedButton('prev')}
      >
        Go Back
      </button>
    </div>
  );
}

export default PrevButton;
