import { useState, useContext } from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import cls from 'classnames';

import styles from '../../styles/select-plan.module.css';
import Option from '../buttons/option';
import NextButton from '../buttons/next-button';
import PrevButton from '../buttons/prev-button';
import SelectedContext from '../../store/selected-context';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 38, // 28,
  height: 20, // 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 14, //15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(17px)', // 9
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 4,
    '&.Mui-checked': {
      transform: 'translateX(17px)', //12
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#02295a' : '#02295a',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12, // 12,
    height: 12, // 12,
    borderRadius: 10, //6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2, //16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#02295a' : '#02295a',
    boxSizing: 'border-box',
  },
}));

function SelectPlan({ prevFormStep, nextFormStep }) {
  const selectedCtx = useContext(SelectedContext);

  const [pushedButton, setPushedButton] = useState('');

  const [selectedPlan, setSelectedPlan] = useState(
    selectedCtx?.step2?.selectedPlan ? selectedCtx?.step2?.selectedPlan : 1
  );
  const [selectedBilling, setSelectedBilling] = useState(
    selectedCtx?.step2?.selectedBilling
      ? selectedCtx?.step2?.selectedBilling
      : 1
  );

  function submitHandle(event) {
    event.preventDefault();

    if (pushedButton === 'next') {
      selectedCtx.postStep2({ selectedPlan, selectedBilling });
      nextFormStep();
    } else if (pushedButton === 'prev') {
      prevFormStep();
    }
  }

  function handleSwitch() {
    setSelectedBilling(selectedBilling === 1 ? 2 : 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Select your plan</div>
      <div className={styles.description}>
        <span>You have the option of monthly or yearly billing.</span>
      </div>
      <form className={styles.form} onSubmit={submitHandle}>
        <div className={styles.options}>
          <div className={styles.control}>
            <Option
              imageSrc='icons/icon-arcade.svg'
              name='Arcade'
              price={selectedBilling === 1 ? '$9/mo' : '$90/yr'}
              freebie={selectedBilling === 1 ? '' : '2 months free'}
              id={1}
              setSelectedPlan={setSelectedPlan}
              selected={1 === selectedPlan}
            />
          </div>
          <div className={styles.spacerLeft}></div>
          <div className={styles.control}>
            <Option
              imageSrc='icons/icon-advanced.svg'
              name='Advanced'
              price={selectedBilling === 1 ? '$12/mo' : '$120/yr'}
              freebie={selectedBilling === 1 ? '' : '2 months free'}
              id={2}
              setSelectedPlan={setSelectedPlan}
              selected={2 === selectedPlan}
            />
          </div>
          <div className={styles.spacerLeft}></div>
          <div className={styles.control}>
            <Option
              imageSrc='icons/icon-pro.svg'
              name='Pro'
              price={selectedBilling === 1 ? '$15/mo' : '$150/yr'}
              freebie={selectedBilling === 1 ? '' : '2 months free'}
              id={3}
              setSelectedPlan={setSelectedPlan}
              selected={3 === selectedPlan}
            />
          </div>
        </div>
        <div className={styles.billingWrapper}>
          <Stack direction='row' spacing={3} alignItems='center'>
            <label
              className={cls(
                styles.label,
                selectedBilling === 1 && styles.labelSelected
              )}
            >
              Monthly
            </label>
            <AntSwitch
              defaultChecked={selectedBilling === 2 ? true : false}
              inputProps={{ 'aria-label': 'ant design' }}
              onClick={handleSwitch}
            />
            <label
              className={cls(
                styles.label,
                selectedBilling === 2 && styles.labelSelected
              )}
            >
              Yearly
            </label>
          </Stack>
        </div>
        <PrevButton
          setPushedButton={setPushedButton}
          // className={styles.button}
        />
        <NextButton
          setPushedButton={setPushedButton}
          // className={styles.button}
        />
      </form>
    </div>
  );
}

export default SelectPlan;
