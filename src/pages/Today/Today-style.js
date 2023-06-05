import styled from "styled-components";

const Today_habit = styled.div`
all: unset;
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
position: relative;
margin: 5px;
display: flex;
flex-direction: column;
align-items: first baseline;

h1{
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-top: 5px;
}
h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #666666;;
}
`
const Greenbutton = styled.div`
    all: unset;
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: #8FC549;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    position: absolute;
    top: 12px;
    right: 5px;
`
const Greentext =styled.div`
    all: unset;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #8FC549;
`
const Blacktext =styled.h2`
    all: unset;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #2C2C2C;`

const Graybutton = styled(Greenbutton)`
background-color: #EBEBEB;`

export { Blacktext, Today_habit ,Greenbutton , Graybutton ,Greentext}