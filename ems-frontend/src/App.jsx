import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './Components/HeaderComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          {/* http://localhost:5173 */}
          <Route path='/' element = {<ListEmployeeComponent />}></Route>
          {/* http://localhost:5173/employees */}
          <Route path='/employees' element ={<ListEmployeeComponent />}></Route>
          {/* http://localhost:5173/add-employee */}
          <Route path='/add-employee' element = {<EmployeeComponent />}></Route>
          {/* http:localhost:5273/edit-employee */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
