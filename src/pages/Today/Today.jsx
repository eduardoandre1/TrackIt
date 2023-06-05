import { Habit_bar, Habit_head, Habit_page, Habit_tail , Minidiv ,Progress } from "../Habits/Habitys-style"
import Serve_answer from "../../assets/serve_answer"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { Link } from "react-router-dom";
import { Graybutton, Greenbutton ,Today_habit,Greentext } from "./Today-style";
import axios from "axios";
import { useEffect, useState } from "react";
import {Percentage ,p100} from "../../percentage";
import Head_page from "../../head";
import Tail from "../../tail";
import dayjs from "dayjs";

function Today(){
    const [today_task,Setask] = useState('')
    const [atualizar,Setatualizar] =useState(Percentage.value)
    const [seletor, Setseletor] = useState(``)
    const semana =[
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sabado",
    ]
    function generate_habit(data){
        p100()
        Setask(data.map((habito)=>{
            let button = ''
            if(habito.done === true){
                button = <Greenbutton data-test="today-habit-check-btn" onClick={()=>done_habit(habito.id,habito.done)}><img src="../src/assets/check.svg" /></Greenbutton>
            }
            else if(habito.done === false){
                button = <Graybutton data-test="today-habit-check-btn" onClick={()=>done_habit(habito.id,habito.done)}><img src="../src/assets/check.svg" /></Graybutton>
            }
            Setatualizar(Percentage.value)
            let data = ''
            let data2 =''
            if(habito.currentSequence ==  habito.highestSequence){
                data =(<Greentext data-test="today-habit-sequence" >Sequência atual: {habito.currentSequence} dias</Greentext>)
                data2=(<Greentext data-test="today-habit-record">Seu recorde: {habito.highestSequence} dias</Greentext>)
            }
            else{
                data =(<h2 data-test="today-habit-sequence" >Sequência atual: ${habito.currentSequence} dias</h2>)
                data2=(<h2 data-test="today-habit-record">Seu recorde: ${habito.highestSequence} dias</h2>)
            }
            return(
            <Today_habit key={habito.id} data-test="today-habit-container">
            <h1 data-test="today-habit-name">{habito.name}</h1>
            {data}
            {data2}
            {button}
            </Today_habit>
        )}))
    }
    function Get_Habits(){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then((resposta)=>{generate_habit(resposta.data);console.log(resposta.data)})
        promise.catch(()=>Setseletor('Nenhum hábito concluído ainda'))

    }
    function done_habit(id,done){
        if(done=== true){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,id,{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
            promise.then(()=>{p100();Get_Habits();Setatualizar(Percentage.value)})
            promise.catch(()=>alert('erro'))
        }
        else{
            const link = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            const promise = axios.post(link,id,{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
            promise.then(()=>{p100();Get_Habits();Setatualizar(Percentage.value)})
    }
        }
        
    useEffect(()=>Get_Habits(),[atualizar])
    useEffect(()=>Setatualizar(Percentage.value),[atualizar])
    useEffect(()=>Setatualizar(Percentage.value),[today_task])
    return(
    <Habit_page>
        <Head_page />
        <Habit_bar>
            <h2 data-test="today" >{semana[dayjs().day()]}, {dayjs().date()}/{dayjs().get('month')+1}</h2>
            <h3 data-test="today-counter">{isNaN(Percentage.value)==true ?'Nenhum hábito concluído ainda':`${parseInt(Percentage.value)}% dos hábitos concluídos`}</h3>
        </Habit_bar>
        {today_task}
        <Tail />
    </Habit_page>
    )
}
export default Today