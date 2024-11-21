import React from 'react'

import './Progress.module.css'

export const Progress = ({ active }) => {
  const steps = [0, 1, 2, 3]

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
    </div>
  );
};