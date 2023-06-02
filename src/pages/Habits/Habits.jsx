import { CircularProgressbar,buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import Serve_answer from "../../assets/serve_answer";
import {Create_Habit, Habit_head ,Habit_page ,Habit_bar ,Progress ,Habit_tail ,Minidiv, Week} from "./Habitys-style.js"
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

function Habits(){
    const [Open, SetOpen] = useState(false)
    const [Newhabit,Sethabit] =useState('')
    const [list,setList] = useState('')
    const Days = [
        {dia:"D",value:0},
        {dia:"S",value:1},
        {dia:"T",value:2},
        {dia:"Q",value:3},
        {dia:"Q",value:4},
        {dia:"S",value:5},
        {dia:"S",value:6}]
    const [Selectedays,SetDays] = useState([])
    function habit_list(){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then((resposta)=>{setList(resposta.data.map((L)=>{return(<p>{L.name}</p>)}))})
    }

    function send_habit(){
        Setwait(true)
        const habit = {
            name: Newhabit ,
            days: [1, 3, 5] // segunda, quarta e sexta
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',habit,{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then((resposta)=>{Setwait(false)})
        promise.catch((resposta)=>{console.log(resposta)})
    }
    const percentage = 80;
    const [waithabit,Setwait] = useState(false)
    function abrir(){
        if(Open===true){
            return(<Create_Habit>
                <form>
                    <input type="text" value={Newhabit} 
                    onChange={(event)=>{console.log(event.target.value);Sethabit(event.target.value)}}/>
                    <Week>
                        {Days.map((day)=>{return (<div onClick={()=>{console.log(Days[day.value].value)}} >{day.dia}</div>)})}
                    </Week>
                    <h2 onClick={()=>{SetOpen(false)}}>Cancel</h2>
                    <button onClick={()=>{send_habit()}}>{waithabit==false?"Salvar":<ThreeDots color="white" />}</button>
                </form>
                    
                </Create_Habit>)
        }
        else{
            return(<></>)
        }
        
    }
    const aberto = abrir({Create_Habit})
    useEffect(()=>habit_list,[])
    console.log(list)
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
            {aberto}
            {list}
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