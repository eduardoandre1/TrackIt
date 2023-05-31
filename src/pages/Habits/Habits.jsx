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
button{
    all: unset;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
}
`
const Habit_head = styled.div`
`
const Habit_tail = styled.div`
`
function Habits(){
    return(
        <Habit_page>
            <Habit_head>
                <h1>TrackIt</h1>
                <img src="" alt="" />
            </Habit_head>

            <Habit_tail>
                <h3>Hábitos</h3>
                <h3>Histórico</h3>


            </Habit_tail>

        </Habit_page>
    )
}

export default Habits