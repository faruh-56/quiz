import React from "react";

import { Welcome, StepOne, StepTwo, Thanks } from './pages'

import "./styles/main.css";

export const App = () => {
  return (
    <div className="App">
      <Welcome />
      <StepOne /> 
      <StepTwo />
      <Thanks />
    </div>
  );
};
