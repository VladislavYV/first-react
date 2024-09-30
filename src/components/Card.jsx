import { useState } from "react";

export function Card() {

    const [checkCard, setCheckCard] = useState(false);

    function handleClick () {
        setCheckCard(!checkCard);
    }

    let className = `card ${checkCard ? 'card-check' : ''}`;

    return (
        <div className={className} onClick={handleClick}>1-я карточка</div>
    );
}