import { Button, Option } from "../components";

export const StepTwo = () => {

  const answers = ["Ваш ответ 1", "Ваш ответ 2", "Ваш ответ 3", "Ваш ответ 4"]

  return (
    <div className="variants-quiz">
      <div className="question">
        <h2>2. Занимательный вопрос</h2>
        <ul className="variants">
          {answers.map((answer, index) => (
            <Option key={index} text={answer} name={`variant-${index + 1}`} id={`variant-${index + 1}`} />
          ))}
        </ul>
        <Button type="button" id="next-btn" text="Далее" disabled step="/step/3"/>
      </div>
    </div>
  );
};
