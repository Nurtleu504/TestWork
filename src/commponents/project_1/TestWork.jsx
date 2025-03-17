import React from 'react'
import './testWork.css'

import ellipse7 from "../../img/Ellipse 7.png";
import ellipse8 from "../../img/Ellipse 8.png";
import ellipse9 from "../../img/Ellipse 9.png";
import ellipse10 from "../../img/Frame 47.png";
import ellipse11 from "../../img/Frame 48.png";



const TestWork = () => {
  return (
    <div className='TestWork'>
      <div className="TestWorkcontainer">
      <div className="section ">
        <div className="circle">
          <div className=" circle-1"><img src={ellipse8} alt="" /></div>
          <div className=" circle-2"><img src={ellipse9} alt="" /></div>
          <div className=" circle-3"><img src={ellipse7} alt="" /></div>
        </div>
        <div className="leftright">
          <div className="left-section">
              <h2 className='left-title' >ТЕСТОВОЕ ЗАДАНИЕ</h2>
              <p>ВЫПОЛНИТЕ ВЕРСТКУ КОМПОНЕНТА</p>
              <ul>
                <li>
                  <span className="emoji"><img src={ellipse10} alt="" /></span>
                  <span>Используйте BEM, React контекст провайдеры, MVVM и CleanArchitecture</span>
                </li>
                <li>
                  <span className="emoji"><img src={ellipse11} alt="" /></span>
                  <span>Flex и Grid системы верстки</span>
                </li>
              </ul>
              <d className="final-text">Будем рады видеть вас в нашей команде :)</d>
              <button className="complete-button">Я все выполнил !</button>
          </div>
          <div className="right-section">
              <h3>ТЕСТОВАЯ ФОРМА ДЛЯ ПОДАЧИ ЗАЯВКИ</h3>
              <form>
                <input type="text" placeholder="Имя" className="input-field" />
                <input type="text" placeholder="Телефон" className="input-field" />
                <button className="submit-button">Записаться</button>
              </form>

          </div>
      </div>
        </div>
      
          

    </div>
    </div>
    
      
      
    
  );
};

export default TestWork