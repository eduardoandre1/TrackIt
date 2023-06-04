import { Habit_head, Habit_page, Habit_tail , Minidiv ,Progress } from "../Habits/Habitys-style"
import Serve_answer from "../../assets/serve_answer"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { Link } from "react-router-dom";
import { Graybutton, Greenbutton , Today_habit } from "./Today-style";
import axios from "axios";
import { useEffect, useState } from "react";

function Today(){
    const [percentage,Setpercent] =useState(50)
    const [today_task,Setask] = useState('')
    function generate_habit(data){
        Setask(data.map((habito)=>{
            let button = ''
            if(habito.done === true){
                button = <Greenbutton onClick={()=>done_habit(habito.id)}><img src="../src/assets/check.svg" /></Greenbutton>
            }
            else{
                button = <Graybutton onClick={()=>done_habit(habito.id)}><img src="../src/assets/check.svg" /></Graybutton>
            }
            return(
            <Today_habit key={habito.id}>
            <h1>{habito.name}</h1>
            <h2>Sequência atual: {habito.currentSequence} dias Seu recorde: {habito.highestSequence} dias </h2>
            {button}
        </Today_habit>
        )}))
    }
    function Get_Habits(){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then((resposta)=>generate_habit(resposta.data))
    }
    function undone_habit(id){
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,id,{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then(()=>{Get_Habits();console.log('renviou')})
        promise.catch(()=>alert('erro'))
    }
    function done_habit(id){
        const link = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const promise = axios.post(link,id,{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then(()=>{Get_Habits();console.log('enviou')})
        promise.catch(()=>undone_habit(id))
    }
    useEffect(()=>Get_Habits(),[])
    return(
    <Habit_page>
        <Habit_head>
                <h1>TrackIt</h1>
                <Minidiv>
                    <h3>{Serve_answer.value.name}</h3>
                    <img src={Serve_answer.value.image} alt="" />
                </Minidiv>
        </Habit_head>
        {today_task}
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