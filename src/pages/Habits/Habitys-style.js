import styled from "styled-components"

const Habit_page = styled.div`
background: #E5E5E5;
width: 100vw;
height: 100vh;
position: relative;
display: flex;
h1{
    width: 97px;
    height: 49px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    margin-left: 15px;
}
img{
    width: 51px;
    height: 51px;
    border-radius: 99px;
    margin: 10px;
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
    text-align: center;
    margin-left: 26px;
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
    margin-right: 25px;
}
p{
    margin-top: 150px;
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
position: absolute;
width: 100vw;
height: 70px;
left: 0px;
top: 0px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
`
const Habit_bar = styled(Habit_head)`
position: absolute;
top: 70px;
background: #E5E5E5;
box-shadow: none;
`
const Minidiv =styled.div`
display:flex;
text-align:center;
height:100%;
color:white;
align-items:center;
h3{
    color: azure;;
}`

const Habit_tail = styled.div`
position: fixed;
width: 100vw;
height: 70px;
left: 0px;
bottom: 0px;
background: #FFFFFF;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Progress = styled.div`
font-family: 'Lexend Deca';
background-color:#52B6FF;
color: red;
width:91px;
height:91px;
border-radius: 50%;
padding: 6px;
margin-bottom:70px;`

const Create_Habit = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
`

export {Habit_head,Habit_page,Habit_bar,Progress ,Habit_tail ,Minidiv}