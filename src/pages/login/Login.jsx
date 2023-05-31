import styled from "styled-components"
import { Link } from "react-router-dom";
import Loginstyle from "./Login-style";
import { ThreeDots } from "react-loader-spinner";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Login(){
    const Dots = styled(ThreeDots)`
        color:red;`
    return(
        <>
        
        <Loginstyle>
        <img src="src/assets/logo.jpg" alt="logo" />
            <h1>TrackIt</h1>
            <form>
                <input type="text" placeholder="Email"/><br />
                <input type="password" placeholder="Senha" /><br />
                <button >Entrar</button>
                
            </form>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </Loginstyle>
        </>
    )
}
const Gesto = styled.div`
width:40px;
height:40px;` 


export default Login;
