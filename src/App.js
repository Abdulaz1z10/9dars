import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Route, Routes } from 'react-router-dom'
import BigComponent from './component/task2/BigComponent'
import Auth from './component/Auth'
import Users from './component/Users'
import Cars from './component/cars'

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<BigComponent />} />
      </Routes>
      <Routes>
        <Route path="" element={<Auth />} />
        <Route path="users" element={<Users />} />
        <Route path='cars/:id' element={<Cars />}/>
      </Routes>
    </div>
  );
}
