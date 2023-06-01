import { CircularProgressbar,buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components"
import Serve_answer from "../../assets/serve_answer";
import {Create_Habit, Habit_head ,Habit_page ,Habit_bar ,Progress ,Habit_tail ,Minidiv, Week} from "./Habitys-style.js"
import { useState } from "react";
import axios from "axios";0
import { ThreeDots } from "react-loader-spinner";


function Habits(){
    const [Open, SetOpen] = useState(false)
    const [newhabit,Sethabit] =useState('')
    const Habit_plus = styled(Create_Habit)`
    display:${Open===true?'flex':'none'};`
    function send_habit(){
        Setwait(true)
        const habit = {
            name: newhabit ,
            days: [1, 3, 5] // segunda, quarta e sexta
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',habit,{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then((resposta)=>{Setwait(false)})
        promise.catch((resposta)=>{console.log(resposta)})
    }
    const percentage = 80;
    const [waithabit,Setwait] = useState(false)
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
                <button
                onClick={()=>{SetOpen(true)}}>+</button>
            </Habit_bar>
            <Habit_plus>
                <input type="text" value={newhabit} onChange={(resposta)=>{Sethabit(resposta)}}/>
                <Week>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
                    <div>D</div>
                </Week>
                <h2 onClick={()=>{SetOpen(false)}}>Cancel</h2>
                <button onClick={()=>{send_habit()}}>{waithabit==false?"Salvar":<ThreeDots color="white" />}</button>
            </Habit_plus>
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