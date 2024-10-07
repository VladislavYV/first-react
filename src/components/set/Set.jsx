import './Set.css'
import { useState } from "react";
import { Card } from "../card/Card";

export function Set() {

    const cards = require('../../data.json');
    const [step, setStep] = useState(0);

    const handleNext = () => {
        if (step < cards.length - 1) {
            setStep(step + 1)
        }
    }

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    return (
        <div>
            <h2 className="title-cards">Название набора</h2>

            <Card
                key={cards[step].id}
                front={cards[step].front}
                back={cards[step].back}
            />

            <div className="control-cards">
                <button
                    className="control-btn"
                    onClick={handlePrev}
                    disabled={step == 0 ? true : false}
                >
                    «
                </button>
                <p>
                    {step + 1} / {cards.length}
                </p>
                <button
                    className="control-btn"
                    onClick={handleNext}
                    disabled={step == cards.length - 1 ? true : false}
                >
                    »
                </button>
            </div>
        </div>
    );
}