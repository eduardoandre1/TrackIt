import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import styled from 'styled-components'
import axios from 'axios'

import Login from './pages/login/Login'
import Cadrastro from './pages/Cadrasto/Cadrastro'
import Habits from './pages/Habits/Habits'
import Resetstyle from './reset'
import Serve_answer from './assets/serve_answer'
function App() {
  //axios.defaults.headers.common['Authorization'] = 'ZfyEHVktLffwQEsDXg9wTbtQ';
  const [servertoken,SetToken] = useState({name: 'usuario', image: 'src/assets/logo.jpg', email: '', password: '123',token
  :'valor'}) 
  return (
    <>
      <Resetstyle />
      <Serve_answer.Provider value={servertoken}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/cadastro" element={<Cadrastro />}/>
          <Route path="/habitos" element={<Habits />}/>
          </Routes>
        </BrowserRouter>
      </Serve_answer.Provider>
      
    </>
  )
}

export default App
