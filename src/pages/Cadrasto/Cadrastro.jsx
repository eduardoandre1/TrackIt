import { useState } from "react"
import Cadrastrostyle from "./Cadrastrostyle"
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Cadrastro(){
    const [waitlogin,SetWaitlogin]= useState(false)
    const [Email,SetEmail] = useState('')
    const [Senha,SetSenha] = useState('')
    const [Nome,SetNome] = useState('')
    const [Foto,SetFoto] = useState('')
    function isnull(){
        if(Email === null){
            alert('email empty')
            return console.log('erro input empty')
        }
        if(Senha === null){
            alert('senha empty')
            return console.log('erro input empty')
        }
        if(Nome=== null){
            alert('Nome empty')
            return console.log('erro input empty')
        }
        if(Foto === null){
            alert('email empty')
            return console.log('erro input empty')
        }
    }
    function Cadastro_server(){
        SetWaitlogin(true)
        isnull()
        const new_user ={
            email: Email,
            name: Nome,
            image: Foto,
            password: Senha
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',new_user)
        promise.then(()=>{alert('enviado')})
        promise.catch(()=>{alert('erro no servidor');SetWaitlogin(false)})
    }
    return(
    <>
        <Cadrastrostyle>
        <img src="src/assets/logo.jpg" alt="logo" />
        <h1>TrackIt</h1>
        <form>
                <input type="text" placeholder="Email" value={Email}
                        onChange={(event)=>SetEmail(event.target.value)}/><br />
                <input type="password" placeholder="Senha" value={Senha}
                        onChange={(event)=>SetSenha(event.target.value)}/><br />
                <input type="text" placeholder="nome" value={Nome}
                        onChange={(event)=>SetNome(event.target.value)}/><br />
                <input type="text" placeholder="foto" value={Foto}
                        onChange={(event)=>SetFoto(event.target.value)}/><br />
                <input type="File" praceholder='arquivo'/>
        </form>
        <button 
                    disabled={waitlogin==true?true:false}
                    onClick={()=>Cadastro_server()}>
                    {waitlogin==false?"Entrar":<ThreeDots color="white" />}
            </button>
        <Link to='/'>Já tem uma conta? Faça login!</Link>
        </Cadrastrostyle>
    </>
    )
}
export default Cadrastro