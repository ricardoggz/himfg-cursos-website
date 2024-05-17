import React from 'react';
import StepWizard from 'react-step-wizard'

const Step1 = () => <div>Step 1</div>;
const Step2 = () => <div>Step 2</div>;
const Step3 = () => <div>Step 3</div>;

const Registro = () => (
  <StepWizard>
    <Step1 />
    <Step2 />
    <Step3 />
  </StepWizard>
);

export default Registro;