import { useState } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import YourInfo from '../components/forms/your-info';
import SelectPlan from '../components/forms/select-plan';
import AddOns from '../components/forms/add-ons';
import Summary from '../components/forms/summary';
import Sidebar from '../components/sidebars/sidebar';
import ThankYou from '../components/forms/thank-you';

export default function Home() {
  const [formStep, setFormStep] = useState(1);

  const nextFormStep = () =>
    setFormStep((currentStep) => (currentStep + 1 <= 5 ? currentStep + 1 : 5));

  const prevFormStep = () =>
    setFormStep((currentStep) => (currentStep - 1 >= 1 ? currentStep - 1 : 1));

  const goToStart = () => setFormStep((currentStep) => 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Multi-step form</title>
      </Head>
      <div className={styles.sidebar}>
        <Sidebar formStep={formStep} />
      </div>
      <div className={styles.mainarea}>
        {formStep === 1 && <YourInfo nextFormStep={nextFormStep} />}
        {formStep === 2 && (
          <SelectPlan prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
        )}
        {formStep === 3 && (
          <AddOns prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
        )}
        {formStep === 4 && (
          <Summary prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
        )}
        {formStep === 5 && <ThankYou goToStart={goToStart} />}
      </div>
    </div>
  );
}
