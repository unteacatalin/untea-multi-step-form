import { useContext } from 'react';
import Image from 'next/image';

import styles from '../../styles/thank-you.module.css';
import SelectedContext from '../../store/selected-context';

function ThankYou({ goToStart }) {
  const selectedCtx = useContext(SelectedContext);

  function handleRestart() {
    selectedCtx.postStep1({});
    selectedCtx.postStep2({});
    selectedCtx.postStep3({});
    selectedCtx.postStep4({});
    goToStart();
  }

  return (
    <div className={styles.container}>
      <div>
        <Image
          src='icons/icon-thank-you.svg'
          width={55}
          height={55}
          alt='thank you'
        />
      </div>
      <div className={styles.title}>Thank you!</div>
      <div className={styles.description}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
