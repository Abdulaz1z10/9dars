import React from 'react'
import "./style.scss"
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'

export default function FirstComponent() {
  return (
    <div>
        <h1>1-component</h1>
        <div>
            <ThirdComponent/>
            <FourthComponent/>
        </div>
    </div>
  )
}
