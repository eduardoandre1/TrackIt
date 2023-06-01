import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import Loginstyle from "./Login-style";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";

function Login(){
    const [waitlogin,SetWaitlogin]= useState(false)
    const[Email,SetEmail] = useState("")
    const [Senha,SetSenha] = useState("")
    function Login_server(){
        SetWaitlogin(true)
        const user = {
            email: Email,
            password: Senha
        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",user)
        promise.then((resposta)=>{const navigate =useNavigate();navigate('/habitos')})
        promise.catch(()=>{alert('usuario invalido');SetSenha("");SetWaitlogin(false)})
        
        

    }
    return(
        <>
        
        <Loginstyle>
        <img src="src/assets/logo.jpg" alt="logo" />
            <h1>TrackIt</h1>
            <form>
                <input 
                    type="text"placeholder="Email" value={Email}
                    onChange={(event)=>SetEmail(event.target.value)}/><br />
                <input 
                    type="password" placeholder="Senha" value={Senha}
                    onChange={(event)=>SetSenha(event.target.value)}/><br />  
            </form>
            <button 
                    disabled={waitlogin==true?true:false}
                    onClick={()=>Login_server()}>
                    {waitlogin==false?"Entrar":<ThreeDots color="white" />}
            </button>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </Loginstyle>
        </>
    )
}

export default Login;
