import React from "react";
import { Button, Progress, Option } from "../components";

export const StepTwo = () => {

  
  const answers = [
    {
      id: '8f5ced48-da99-477f-aa62-889eca67ce57',
      answer: 'Ваш ответ'
    },
    {
      id: '4639c91d-0dc1-4b31-a7a4-b5b66d7584d3',
      answer: 'Ваш ответ'
    },
    {
      id: 'bdc14d39-df17-402c-a332-5037ee1c7e35',
      answer: 'Ваш ответ'
    },
    {
      id: '4c40902d-bc82-479c-a690-0386c8811ad8',
      answer: 'Ваш ответ'
    }
  ]




  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <Progress active={0}/>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              {answers.map(({ id, answer }) => (
                <Option id={id} answer={answer} key={id}/>
            ))}
            </ul>
            <Button type="button" disabled id="next-btn" text="Далее"/>
          </div>
        </div>
      </div>
    </div>
  );
};
