import React from 'react'

import './Progress.module.css'

export const Progress = ({ active }) => {
  const steps = [0, 1, 2, 3]
  const percent = 100 / steps.length;

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">
        {steps.map((index) => (
          <div
            key={index}
            className={`indicator__unit indicator__unit-${index +1} ${
              index <= active ? '_active' : ''
            }`}
          ></div>
        ))}
      </div>
      <div className="indicator_text">
        <span className="indicator_description">
        Процесс прохождения:
        </span>
        <span className="indicator__value">{percent}%</span>       
      </div> 
    </div>
  );
};