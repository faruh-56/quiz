import React from "react";
import { Button, Input } from "../components";

export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form">
            <Input 
              label="Ваше имя"
              id="username" 
              type="text" 
              placeholder="Ваш ответ" 
              errorMessage="Введите свое имя"/>
            <Input
              label="Ваш номер"
              type="tel" 
              name="phone" 
              id="phone" 
              placeholder="Ваш номер" 
              errorMessage="Введите в правильном формате"
              pattern='^(?:\+998)?(?:\d{2})?(?:\d{7})$'/>
            <Button text="Далее "/>
          </form>
        </div>
      </div>
    </div>
  );
};
