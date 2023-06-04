import { CircularProgressbar,buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import Serve_answer from "../../assets/serve_answer";
import {Create_Habit, Habit_head ,Habit_page ,Habit_bar ,Progress ,Habit_tail ,Minidiv, Week, Botons, Invertido, Weekdaystyle, Habit_box} from "./Habitys-style.js"
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Habits(){
    const [Open, SetOpen] = useState(false)
    const [Newhabit,Sethabit] =useState('')
    const [list,setList] = useState()
    const Days = [
        {dia:"D",value:0},
        {dia:"S",value:1},
        {dia:"T",value:2},
        {dia:"Q",value:3},
        {dia:"Q",value:4},
        {dia:"S",value:5},
        {dia:"S",value:6}]
    const [Selectedays,SetDays] = useState([])
    const percentage = 80;
    const [waithabit,Setwait] = useState(false)
    
    //pegar habitos do servidor 
    function habit_list(){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then((resposta)=>{console.log(resposta.data);setList(resposta.data.map((L)=>habit_struture(L)))})
    }
    function habit_struture(data){
        let sunday = Days.map((dia)=>{
            if(data.days.indexOf(dia.value)===-1){
                return(<Weekdaystyle key={dia.value}>{dia.dia}</Weekdaystyle>)
            }else{
                return(<Invertido>{dia.dia}</Invertido>)
                
            }
        })
        return(
        <Habit_box key={data.id}>
            <img onClick={()=>delete_habit(data.id)} src="../src/assets/trash.jpg" />
            <h1>{data.name}</h1>
            <Week>
            {sunday}
            </Week>  
        </Habit_box>
        )
    }
    function delete_habit(id){
        const promise =axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then(()=>{habit_list;SetOpen(false)})
        promise.catch((resposta)=>console.log(resposta))
    }
    
    //enviar habito
    function send_habit(){
        Setwait(true)
        const habit = {
            name: Newhabit ,
            days: Selectedays // segunda, quarta e sexta
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',habit,{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
        promise.then((resposta)=>{Setwait(false),SetOpen(false)})
        promise.catch((resposta)=>{console.log(resposta)})
    }
    
    //abrir menu de enviar 
    function Weekday_select(dia,selecionados){
        if(selecionados.indexOf(dia)=== -1){
            const array = [...selecionados,dia]
            SetDays(array) 
        }else{
            const filtro = selecionados.filter((item) => item !== dia)
            SetDays(filtro)
        }
    }
    function weekday_style(day,Select){
        if(Select.indexOf(day.value)===-1){
            return (<Weekdaystyle onClick={()=>{Weekday_select(day.value,Selectedays)}} >{day.dia}</Weekdaystyle>)
        }else{
            return(<Invertido onClick={()=>{Weekday_select(day.value,Selectedays)}} >{day.dia}</Invertido>)
        }
    }
    function abrir(){
        if(Open===true){
            return(<Create_Habit>
                    <input type="text" value={Newhabit} 
                    onChange={(event)=>{Sethabit(event.target.value)}}/>
                    <Week>
                        {Days.map((day)=>weekday_style(day,Selectedays))}
                    </Week>
                    <Botons>
                    <h2 onClick={()=>{SetOpen(false)}}>Cancel</h2>
                    <button onClick={()=>{send_habit()}}>{waithabit==false?"Salvar":<ThreeDots color="white" />}</button>
                    </Botons>
                </Create_Habit>)
        }
        else{
            return(<></>)
        }
        
    }
    const aberto = abrir()
    useEffect(()=>SetOpen(false),[])
    useEffect(()=>habit_list,[Open])
    
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
                <Link to={'/hoje'}>
                <Progress>
                <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
                text="Hoje" />
                </Progress>
                </Link>
                <h3>Histórico</h3>
            </Habit_tail>

        </Habit_page>
    )
}

export default Habits