import { useState } from "react";
import { Card } from "./Card";

export function Set() {

    const cards = require('../data.json');
    const [step, setStep] = useState(0);


    return (
        <div>
            <h2>Название набора</h2>
            <Card
                front = { cards[step].front }
                back = { cards[step].back }
            />
            <div>Управление</div>
        </div>
    );
}