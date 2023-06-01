import Cadrastrostyle from "./Cadrastrostyle"
function Cadrastro(){
    return(
    <>
        <Cadrastrostyle>
        <img src="src/assets/logo.jpg" alt="logo" />
        <h1>TrackIt</h1>
        <form>
                <input type="text" placeholder="Email"/><br />
                <input type="password" placeholder="Senha" /><br />
                <input type="text" placeholder="nome"/><br />
                <input type="text" placeholder="foto"/><br />
                <button >Entrar</button>
        </form>
        </Cadrastrostyle>
    </>
    )
}
export default Cadrastro