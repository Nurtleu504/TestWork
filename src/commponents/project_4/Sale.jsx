import './sale.css'
import { useState } from "react";
import React from 'react'

import ellipse7 from "../../img/Ellipse 7.png";
import ellipse8 from "../../img/Ellipse 8.png";
import ellipse9 from "../../img/Ellipse 9.png";

export default function Sale() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="sale">
        <div className="salecontainer">
            <div className="circle">
                <div className=" circle-1"><img src={ellipse8} alt="" /></div>
                <div className=" circle-2"><img src={ellipse9} alt="" /></div>
                <div className=" circle-3"><img src={ellipse7} alt="" /></div>
            </div>
            <div className="salecontent">
                <h1>До конца акции меньше недели!</h1>
                <p> Оформите заявку до Х мая и сэкономьте ХХХХХ тг./мес.</p>
                <form className='salecontentform' >
                    <input type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)} className="input-field .input-fieldnon" />
                    <input type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)} className="input-field" />
                    <button className="submit-button">Получить консультацию</button>
               </form>
               <label className="flex items-center text-white mg-top-12px">
                    <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="mr-2"
                    />
                    Я соглашаюсь на обработку персональных данных
                </label>
            </div>
            

        </div>
    </div>
  )
}