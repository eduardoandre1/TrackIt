import { CircularProgressbar,buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components"

const Habit_page = styled.div`
background: #E5E5E5;
width: 100%;
height: 100vh;
h1{
    width: 97px;
    height: 49px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
}
img{
    width: 51px;
    height: 51px;
    border-radius: 99px;
}
h2{
    width: 148px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}
h3{

}
button{
    all: unset;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
}
p{
    width: 338px;
    height: 74px;
    left: 17px;
    top: 155px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
h3{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
}
`
const Habit_head = styled.div`
`
const Habit_tail = styled.div`
`
const Progress = styled.div`
background-color:#52B6FF;
color: red;
width:91px;
height:91px;
border-radius: 50%;
padding: 6px;`
function Habits(){
    const percentage = 45;
    return(
        <Habit_page>
            <Habit_head>
                <h1>TrackIt</h1>
                <img src="src/assets/logo.jpg" alt="" />
            </Habit_head>
            <h2>Meus hábitos</h2>
            <button>+</button>
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