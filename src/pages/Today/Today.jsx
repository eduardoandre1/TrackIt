import { Habit_head, Habit_page, Habit_tail , Minidiv ,Progress } from "../Habits/Habitys-style"
import Serve_answer from "../../assets/serve_answer"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { Link } from "react-router-dom";
function Today(){
    let percentage = 15;
    return(
    <Habit_page>
        <Habit_head>
                <h1>TrackIt</h1>
                <Minidiv>
                    <h3>{Serve_answer.value.name}</h3>
                    <img src={Serve_answer.value.image} alt="" />
                </Minidiv>
        </Habit_head>
        
        <Habit_tail>
            <Link to={'/habitos'}>
            <h3>Hábitos</h3>
            </Link>
            <Progress>
                <Link to={'/hoje'}>
                    <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    text="Hoje" />
                </Link>
            </Progress>
            <h3>Histórico</h3>
        </Habit_tail>
    </Habit_page>
    )
}
export default Today