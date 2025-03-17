import React from 'react'
import './aboutUs.css'

import rectangle from './../../img/Rectangle 63.png'

export default function AboutUs() {
  return (
    <div className="aboutus">
        <div className="container">
            <h1>О нас</h1>
            <div className="content">
                <div className="content-text">
                    <p><span className='content-text-k'>Какая-то компания -</span>стартап IT компания, занимающаяся разработкой сторонних решений</p>
                    <p className='content-text-us'>Мы придерживаемся подходов TDD, DDD, Clean code. Качество всегда в приоритете</p>
                </div>
                <div className="content-img">
                    <img src={rectangle} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}