import cls from 'classnames';

import styles from '../../styles/sidebar.module.css';

function Sidebar(props) {
  const { formStep } = props;

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.rows}>
          <div
            className={cls(
              styles.counter,
              formStep === 1 && styles.counter_bg_color
            )}
          >
            1
          </div>
          <div className={styles.step_wrapper}>
            <div className={styles.step_num}>STEP 1</div>
            <div className={styles.step_desc}>YOUR INFO</div>
          </div>
        </div>
        <div className={styles.rows}>
          <div
            className={cls(
              styles.counter,
              formStep === 2 && styles.counter_bg_color
            )}
          >
            2
          </div>
          <div className={styles.step_wrapper}>
            <div className={styles.step_num}>STEP 2</div>
            <div className={styles.step_desc}>SELECT PLAN</div>
          </div>
        </div>
        <div className={styles.rows}>
          <div
            className={cls(
              styles.counter,
              formStep === 3 && styles.counter_bg_color
            )}
          >
            3
          </div>
          <div className={styles.step_wrapper}>
            <div className={styles.step_num}>STEP 3</div>
            <div className={styles.step_desc}>ADD-ONS</div>
          </div>
        </div>
        <div className={styles.rows}>
          <div
            className={cls(
              styles.counter,
              formStep === 4 && styles.counter_bg_color
            )}
          >
            4
          </div>
          <div className={styles.step_wrapper}>
            <div className={styles.step_num}>STEP 4</div>
            <div className={styles.step_desc}>SUMMARY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
