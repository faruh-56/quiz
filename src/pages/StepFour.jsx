import { Button, Option, Progress } from "../components";

export const StepFour = () => {

  const answers = [1, 2, 3, 4, 5]

  return (    
        <div className="emoji-quiz">
          <Progress activeStep={4} />        
          <form className="question">
            <h2>4. Занимательный вопрос</h2>
            <ul className="level-variants">
              {answers.map((answer, index) => (
                <Option key={index} text={answer} name={`variant-${index + 1}`} id={`variant-${index + 1}`} />
              ))}              
            </ul>                
            <Button step="/thanks" />
          </form>
        </div>     
  );
};