import { Header } from "../../components/header/Header";
import { BtnSet } from "../../components/btnSet/BtnSet";
import "./PageSelectSet.css";

export function PageSelectSet() {
    const cards = require("../../data.json"); //Выбор неповторяющихся названий сетов
    const sets = cards.reduce(
        (acc, item) => { //Перебор каждой карточки
            if (acc.obj[item.setName])
                return acc;
            acc.obj[item.setName] = true;
            acc.sets.push(item.setName);
            return acc;
        },
        {
            obj: {}, //Проверяет на наличие: Fruit:true, Space:true
            sets: [], //Fruit, Space
        }
    ).sets.map((item, index) => ( // Перебор названий
        <BtnSet key={index} name={item} id={index} /> // Создание кнопок
    ));

    return (
        <div>
            <Header />
            <h2 className="title">Выбор сета карточек</h2>
            <ul className="set-list">
                {sets}
            </ul>
        </div>
    )
}