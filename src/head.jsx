import Serve_answer from "./assets/serve_answer"
import { Habit_head, Minidiv } from "./pages/Habits/Habitys-style"
function Head_page(){
    return(
        <Habit_head atributo data-test="header">
                <h1>TrackIt</h1>
                <Minidiv>
                    <h3>{Serve_answer.value.name}</h3>
                    <img data-test="avatar" src={Serve_answer.value.image} alt="" />
                </Minidiv>
        </Habit_head>
    )
 }
 export default Head_page