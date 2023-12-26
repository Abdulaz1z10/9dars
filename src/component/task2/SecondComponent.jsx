import React from 'react'
import "./style.scss"
import FifthComponent from './FifthComponent'
import SixComponent from './SixComponent'

export default function SecondComponent() {
  return (
    <div>
        <h1>2-component</h1>
        <div>
            <FifthComponent/>
            <SixComponent/>
        </div>
    </div>
  )
}
