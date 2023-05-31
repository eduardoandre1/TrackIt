import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import styled from 'styled-components'

import Login from './pages/login/Login'
import Cadrastro from './pages/Cadrasto/Cadrastro'
import Habits from './pages/Habits/Habits'
import Resetstyle from './reset'
function App() {
  //<Route path="/hoje" element={<Today />}/>
  //<Route path="/cadastro" element={<Cadrastro />}/>
  //<Route path="/habitos" element={<Habit />}/>
  //<Route path="/historico" element={<History />} />
  return (
    <>
      <Resetstyle />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadrastro />}/>
        <Route path="/habitos" element={<Habits />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
