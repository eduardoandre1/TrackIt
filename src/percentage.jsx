import { createContext } from "react";
import { ReactDOM } from "react";
import axios from "axios";
import Serve_answer from "./assets/serve_answer";

const [Percentage,Setpercent] = createContext()

function p100(){
    function p(data){
        let g = 0;
        data.map((habito)=>{if(habito.done===true){g++}})
        let  total = data.length
        SetPercent((g/total)*100)
        console.log(Percentage.value)

    }
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{headers:{Authorization: `Bearer ${Serve_answer.value.token}`}})
    promise.then((resposta)=>{p(resposta.data)})
}


export {Percentage,p100}