import { createContext, useState } from 'react';

const SelectedContext = createContext({
  step1: {},
  step2: {},
  step3: {},
  step4: {},
  postStep1: (newStep1) => {},
  postStep2: (newStep2) => {},
  postStep3: (newStep3) => {},
  postStep4: (newStep4) => {},
});

export function SelectedContextProvider(props) {
  const [step1State, setStep1State] = useState({});
  const [step2State, setStep2State] = useState({});
  const [step3State, setStep3State] = useState({});
  const [step4State, setStep4State] = useState({});

  function updateStep1(step1Data) {
    setStep1State((prevStep1Data) => {
      return step1Data;
    });
  }

  function updateStep2(step2Data) {
    setStep2State((prevStep2Data) => {
      return step2Data;
    });
  }

  function updateStep3(step3Data) {
    setStep3State((prevStep3Data) => {
      return step3Data;
    });
  }

  function updateStep4(step4Data) {
    setStep4State((prevStep4Data) => {
      return step4Data;
    });
  }

  const context = {
    step1: step1State,
    step2: step2State,
    step3: step3State,
    step4: step4State,
    postStep1: updateStep1,
    postStep2: updateStep2,
    postStep3: updateStep3,
    postStep4: updateStep4,
  };

  return (
    <SelectedContext.Provider value={context}>
      {props.children}
    </SelectedContext.Provider>
  );
}

export default SelectedContext;
