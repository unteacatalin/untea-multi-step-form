import { useState, useContext } from 'react';

import styles from '../../styles/summary.module.css';
import NextButton from '../buttons/next-button';
import PrevButton from '../buttons/prev-button';
import SelectedContext from '../../store/selected-context';

function Summary({ prevFormStep, nextFormStep }) {
  const selectedCtx = useContext(SelectedContext);

  const [pushedButton, setPushedButton] = useState('');

  const plan =
    selectedCtx.step2.selectedPlan === 1
      ? 'Arcade'
      : selectedCtx.step2.selectedPlan === 2
      ? 'Advanced'
      : selectedCtx.step2.selectedPlan === 3
      ? 'Pro'
      : '';

  const price =
    selectedCtx.step2.selectedPlan === 1 &&
    selectedCtx.step2.selectedBilling === 1
      ? '$9/mo'
      : selectedCtx.step2.selectedPlan === 1 &&
        selectedCtx.step2.selectedBilling === 2
      ? '$90/yr'
      : selectedCtx.step2.selectedPlan === 2 &&
        selectedCtx.step2.selectedBilling === 1
      ? '$12/mo'
      : selectedCtx.step2.selectedPlan === 2 &&
        selectedCtx.step2.selectedBilling === 2
      ? '$120/yr'
      : selectedCtx.step2.selectedPlan === 3 &&
        selectedCtx.step2.selectedBilling === 1
      ? '$15/mo'
      : selectedCtx.step2.selectedPlan === 3 &&
        selectedCtx.step2.selectedBilling === 2
      ? '$150/yr'
      : '';

  const planAmount =
    selectedCtx.step2.selectedPlan === 1 &&
    selectedCtx.step2.selectedBilling === 1
      ? 9
      : selectedCtx.step2.selectedPlan === 1 &&
        selectedCtx.step2.selectedBilling === 2
      ? 90
      : selectedCtx.step2.selectedPlan === 2 &&
        selectedCtx.step2.selectedBilling === 1
      ? 12
      : selectedCtx.step2.selectedPlan === 2 &&
        selectedCtx.step2.selectedBilling === 2
      ? 120
      : selectedCtx.step2.selectedPlan === 3 &&
        selectedCtx.step2.selectedBilling === 1
      ? 15
      : selectedCtx.step2.selectedPlan === 3 &&
        selectedCtx.step2.selectedBilling === 2
      ? 150
      : 0;

  let addonsAmount = 0;

  selectedCtx.step3.checkedAddons.forEach((item) => {
    addonsAmount +=
      item === 1 && selectedCtx.step2.selectedBilling === 1
        ? 1
        : item === 1 && selectedCtx.step2.selectedBilling === 2
        ? 10
        : item === 2 && selectedCtx.step2.selectedBilling === 1
        ? 2
        : item === 2 && selectedCtx.step2.selectedBilling === 2
        ? 20
        : item === 3 && selectedCtx.step2.selectedBilling === 1
        ? 2
        : item === 3 && selectedCtx.step2.selectedBilling === 2
        ? 20
        : 0;
  });

  const billing =
    selectedCtx.step2.selectedBilling === 1
      ? 'Monthly'
      : selectedCtx.step2.selectedBilling === 2
      ? 'Yearly'
      : '';

  const totalLabel =
    billing === 'Monthly'
      ? 'Total (per month)'
      : billing === 'Yearly'
      ? 'Total (per year)'
      : '';

  function submitHandle(event) {
    event.preventDefault();

    if (pushedButton === 'next') {
      // selectedCtx.postStep2({ selectedPlan, selectedBilling });
      nextFormStep();
    } else if (pushedButton === 'prev') {
      prevFormStep();
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Finishing up</div>
      <div className={styles.description}>
        <span>Double-check everything looks OK before confirming.</span>
      </div>
      <div className={styles.main}>
        <div className={styles.selectedPlan}>
          <div>
            <div className={styles.plan}>{`${plan} (${billing})`}</div>
            <div className={styles.link}>
              <u>Change</u>
            </div>
          </div>
          <div className={styles.planPrice}>{price}</div>
        </div>
        <div className={styles.spacer} />
        <hr />
        {selectedCtx.step3.checkedAddons
          .concat([0, 0, 0])
          .slice(0, 3)
          .map((item) => (
            <div key={item} className={styles.addonRow}>
              <div>
                {item === 1
                  ? 'Online service'
                  : item === 2
                  ? 'Large storage'
                  : item === 3
                  ? 'Customizable profile'
                  : ''}
              </div>
              <div>
                {item === 1 && selectedCtx.step2.selectedBilling === 1
                  ? '+$1/mo'
                  : item === 1 && selectedCtx.step2.selectedBilling === 2
                  ? '+$10/yr'
                  : item === 2 && selectedCtx.step2.selectedBilling === 1
                  ? '+$2/mo'
                  : item === 2 && selectedCtx.step2.selectedBilling === 2
                  ? '+$20/yr'
                  : item === 3 && selectedCtx.step2.selectedBilling === 1
                  ? '+$2/mo'
                  : item === 3 && selectedCtx.step2.selectedBilling === 2
                  ? '+$20/yr'
                  : ''}
              </div>
            </div>
          ))}
        <div className={styles.totalRow}>
          <div className={styles.totalLabel}>{totalLabel}</div>
          <div className={styles.totalAmount}>
            +${planAmount + addonsAmount}
            {billing === 'Monthly' ? '/mo' : billing === 'Yearly' ? '/yr' : ''}
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={submitHandle}>
        <PrevButton setPushedButton={setPushedButton} />
        <NextButton setPushedButton={setPushedButton} id={4} />
      </form>
    </div>
  );
}

export default Summary;
