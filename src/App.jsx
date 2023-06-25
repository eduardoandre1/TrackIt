import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"

import Login from './pages/login/Login'
import Cadrastro from './pages/Cadrasto/Cadrastro'
import Habits from './pages/Habits/Habits'
import Resetstyle from './reset'
import Serve_answer from './assets/serve_answer'
import Today from './pages/Today/Today'
import {Percentage} from './percentage'
import Historico from './pages/History/History'
function App() {
  const [Serve,Setanswer] =useState('')
  const [progress,Setprogress] =useState(0)
  return (
    <>
      <Resetstyle />
      <Serve_answer.Provider value={{Serve,Setanswer,progress,Setprogress}}>
        <Percentage.Provider value={'recheio'}>
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<Cadrastro />}/>
            <Route path="/habitos" element={<Habits />}/>
            <Route path='/hoje' element={<Today />}/>
            <Route path='/historico' element={<Historico />} />
            </Routes>
          </BrowserRouter>
        </Percentage.Provider>
      </Serve_answer.Provider>
    </>
  )
}

export default App
