import React from "react";
import { Button, Progress } from "../components";

export const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Progress />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <Button type="button" disabled id="next-btn" text="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};
