import React from "react";

import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from "./pages";

import "./App.css";
import "./styles/main.css";




export const App = () => {
  return (
    <div className="App">
      <Welcome/>
      <StepOne/>
      <StepTwo/>
      <StepThree/>
      <StepFour/>
      <Thanks/> 
    </div>
  );

  
  // let date = new Date()

  // let hours = date.getHours().toString().padStart(2, 0)
  // let minutes = date.getMinutes().toString().padStart(2, 0)
  // let seconds = date.getSeconds().toString().padStart(2, 0)

  // const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`)

  // useEffect(() => {
//   const intervalId = setInterval(() => {
//     const date = new Date();

//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     const seconds = date.getSeconds().toString().padStart(2, '0');

//     const currentTime = `${hours}:${minutes}:${seconds}`;
//     console.log(currentTime); // Логируем текущее время
//     setTime(currentTime);
//   }, 500);

//   return () => {
//     clearInterval(intervalId);
//   };
// }, []);

 
};
