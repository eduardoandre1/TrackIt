import { Link } from "react-router-dom";
import { Habit_tail, Progress } from "./pages/Habits/Habitys-style";
import { CircularProgressbar , buildStyles } from "react-circular-progressbar";
import { Percentage, p100 } from "./percentage";
import { useContext, useEffect } from "react";

function Tail(){
    p100()
    useEffect(()=>p100(),[Percentage.value])
    const [progress ,Setprogress] = useContext(Percentage)
    return(
        <Habit_tail data-test="menu">
            <Link to={'/habitos'} data-test="habit-link">
                <h3>
                    Hábitos
                </h3>
            </Link>
            <Link to={'/hoje'} data-test="today-link">
                <Progress>
                <CircularProgressbar
                value={Percentage.value}
                styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
                text="Hoje" />
                </Progress>
                </Link>
            <Link to={'/historico'} data-test="history-link">
                <h3>
                    Histórico
                </h3>
            </Link>
        </Habit_tail>
    )
    
}

export default Tail