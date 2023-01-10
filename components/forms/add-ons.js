import { useState, useContext } from 'react';

import styles from '../../styles/add-ons.module.css';
import PrevButton from '../buttons/prev-button';
import NextButton from '../buttons/next-button';
import AddOn from '../../components/buttons/add-on';
import SelectedContext from '../../store/selected-context';

function AddOns({ prevFormStep, nextFormStep }) {
  const selectedCtx = useContext(SelectedContext);
  const [pushedButton, setPushedButton] = useState('');
  const [checkedAddons, setCheckedAddons] = useState(
    selectedCtx.step3.checkedAddons ? selectedCtx.step3.checkedAddons : []
  );

  console.log({ selectedCtx });

  console.log({ checkedAddons });

  function submitHandle(event) {
    event.preventDefault();

    if (pushedButton === 'next') {
      selectedCtx.postStep3({ checkedAddons });
      nextFormStep();
    } else if (pushedButton === 'prev') {
      prevFormStep();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Pick add-ons</div>
      <div className={styles.description}>
        <span>Add-ons help enhance your gaming experience.</span>
      </div>
      <form className={styles.form} onSubmit={submitHandle}>
        <AddOn
          id={1}
          selected={checkedAddons.includes(1)}
          title='Online service'
          description='Access to multiplayer games'
          price={selectedCtx.step2.selectedBilling === 1 ? '+$1/mo' : '+$10/yr'}
          checkedAddons={checkedAddons}
          setCheckedAddons={setCheckedAddons}
        />
        <div className={styles.spacer} />
        <AddOn
          id={2}
          selected={checkedAddons.includes(2)}
          title='Large storage'
          description='Extra 1TB of cloud save'
          price={selectedCtx.step2.selectedBilling === 1 ? '+$2/mo' : '+$20/yr'}
          checkedAddons={checkedAddons}
          setCheckedAddons={setCheckedAddons}
        />
        <div className={styles.spacer} />
        <AddOn
          id={3}
          selected={checkedAddons.includes(3)}
          title='Customizable profile'
          description='Custom theme on your profile'
          price={selectedCtx.step2.selectedBilling === 1 ? '+$2/mo' : '+$20/yr'}
          checkedAddons={checkedAddons}
          setCheckedAddons={setCheckedAddons}
        />
        <div className={styles.spacer}></div>
        <div className={styles.spacer}></div>
        <PrevButton setPushedButton={setPushedButton} />
        <NextButton setPushedButton={setPushedButton} />
      </form>
    </div>
  );
}

export default AddOns;
