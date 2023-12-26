import React from 'react'
import "./style.scss"
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

export default function BigComponent() {
    return (
      <div className="big_div my-4">
        <button className="btn1">+</button>
        <button className="btn2">-</button>
        <div className='div_component'>
          <div className="component1">
            <FirstComponent />
          </div>
          <div className="component2">
            <SecondComponent />
          </div>
        </div>
      </div>
    );
}
