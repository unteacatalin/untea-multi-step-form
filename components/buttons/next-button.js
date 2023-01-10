import { Fragment } from 'react';

import styles from '../../styles/next-button.module.css';

function NextButton(props) {
  const { setPushedButton, id } = props;
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={() => setPushedButton('next')}>
        {id === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}

export default NextButton;
