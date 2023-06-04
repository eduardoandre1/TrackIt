import Head_page from "../../head";
import Tail from "../../tail";
import { Habit_bar, Habit_head, Habit_page, Habit_tail } from "../Habits/Habitys-style";

function Historico(){
    return(
        <Habit_page>
            <Head_page />
            <Tail />
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Habit_page>
    )
}
export default Historico