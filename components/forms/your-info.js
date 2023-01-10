import { useRef, useState, forwardRef, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import styles from '../../styles/your-info.module.css';
import PrevButton from '../buttons/prev-button';
import NextButton from '../buttons/next-button';
import SelectedContext from '../../store/selected-context';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function YourInfo({ nextFormStep }) {
  const selectedCtx = useContext(SelectedContext);
  const [open, setOpen] = useState(false);
  const [pushedButton, setPushedButton] = useState('');
  const [nameInput, setNameInput] = useState(
    selectedCtx?.step1?.nameInput || ''
  );
  const [emailInput, setEmailInput] = useState(selectedCtx?.step1?.emailInput);
  const [phoneInput, setPhoneInput] = useState(selectedCtx?.step1?.phoneInput);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  function nextHandle(event) {
    event.preventDefault();

    // const nameInput = nameInputRef.current.value;
    // const emailInput = emailInputRef.current.value;
    // const phoneInput = phoneInputRef.current.value;

    if (nameInput && emailInput && phoneInput) {
      if (pushedButton === 'next') {
        selectedCtx.postStep1({ nameInput, emailInput, phoneInput });
        nextFormStep();
      }
    } else {
      setOpen(true);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Personal info</div>
      <div className={styles.description}>
        <span>Please provide your name, email address, and phone number.</span>
      </div>
      <form className={styles.form} onSubmit={nextHandle}>
        <div className={styles.control}>
          <div className={styles.controlLabels}>
            <label className={styles.label}>Name</label>
            <label className={styles.error}>
              {nameInputRef?.current?.value === '' && 'This field is required'}
            </label>
          </div>
          <input
            type='text'
            ref={nameInputRef}
            className={styles.input}
            placeholder='e.g. Stephen King'
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <div className={styles.controlLabels}>
            <label className={styles.label}>Email Address</label>
            <label className={styles.error}>
              {emailInputRef?.current?.value === '' && 'This field is required'}
            </label>
          </div>
          <input
            type='email'
            ref={emailInputRef}
            className={styles.input}
            placeholder='e.g. stephenking@lorem.com'
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <div className={styles.controlLabels}>
            <label className={styles.label}>Phone Number</label>
            <label className={styles.error}>
              {phoneInputRef?.current?.value === '' && 'This field is required'}
            </label>
          </div>
          <input
            type='tel'
            ref={phoneInputRef}
            className={styles.input}
            placeholder='e.g +1 234 567 890'
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
            pattern='+[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}'
          />
        </div>
        <PrevButton dontShow setPushedButton={setPushedButton} />
        <NextButton setPushedButton={setPushedButton} />
      </form>
      <div className={styles.snackbar}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity='error'
            sx={{
              width: '250px',
              fontSize: 12,
              height: '100%',
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            Please fill in the form!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default YourInfo;
