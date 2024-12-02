import { Button, Progress, Option} from "../components";

export const StepThree = () => {

  const answers = [
    {      
      answer: "Ваш ответ 1",
      imgSrc: "/img/laugh.png",
      imgAlt: "laugh"
    }, 
    {      
      answer: "Ваш ответ 2",
      imgSrc: "/img/hearts.png",
      imgAlt: "hearts"
    }, 
    {     
      answer: "Ваш ответ 3",
      imgSrc: "/img/smirk.png",
      imgAlt: "smirk"
    }, 
    {      
      answer: "Ваш ответ 4",
      imgSrc: "/img/fright.png",
      imgAlt: "fright"
    },    
  ]
  
  return (   
        <div className="emoji-quiz">
           <Progress activeStep={3} />
          <form className="question"> <br/><br/>
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">
              {answers.map((answer, index) => (
                <Option key={index} text={<p>{answer.answer}</p>} img src={answer.imgSrc} alt={answer.imgAlt} name={`variant-${index + 1}`} id={`variant-${index + 1}`} />
              ))}
            </ul>   
           
            <Button step="/step/4" />
          </form>
        </div>      
  );
};
