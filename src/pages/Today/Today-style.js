import styled from "styled-components";

const Today_habit = styled.div`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
position: relative;
margin: 5px;

h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    overflow: hidden;
}
h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
}
`
const Greenbutton = styled.div`
    all: unset;
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: green;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    position: absolute;
    top: 0px;
    right: 0px;
`

const Graybutton = styled(Greenbutton)`
background-color:gray`

export { Today_habit ,Greenbutton , Graybutton}