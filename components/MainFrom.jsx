import React, { useState } from "react";
import MainFieldForm from "./Field_Form/MainFieldForm";
import MainDetailsForm from "./Details_Form/MainDetailsForm";

const MainFrom = ({form_state}) => {
  const [step, setStep] = useState(1);
  
  return (
    <div>
      {step < 3 ? (
        <MainFieldForm setStep={setStep} step={step} form_state = {form_state}/>
      ) : (
        <MainDetailsForm setStep={setStep} step={step} form_state = {form_state}/>
      )}
      {/* <MainFieldForm setStep={setStep} step={step} form_state = {form_state}/> */}
    </div>
  );
};

export default MainFrom;
