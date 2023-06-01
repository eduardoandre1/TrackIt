import { CircularProgressbar,buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components"
import Serve_answer from "../../assets/serve_answer";
import {Habit_head ,Habit_page ,Habit_bar ,Progress ,Habit_tail ,Minidiv} from "src/pages/Habits/Habitys-style.js"

function Habits(){
    const percentage = 65;
    return(
        <Habit_page>
            <Habit_head>
                <h1>TrackIt</h1>
                <Minidiv>
                    <h3>{Serve_answer.value.name}</h3>
                    <img src={Serve_answer.value.image} alt="" />
                </Minidiv>
            </Habit_head>
            <Habit_bar>
                <h2>Meus hábitos</h2>
                <button>+</button>
            </Habit_bar>
            <input/>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Habit_tail>
                <h3>Hábitos</h3>
                <Progress>
                <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
                text="Hoje" />
                </Progress>
                <h3>Histórico</h3>
            </Habit_tail>

        </Habit_page>
    )
}

export default Habits