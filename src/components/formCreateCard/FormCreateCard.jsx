export function FormCreateCard() {
    return (
        <form action="">
            <label>
                Передняя сторона карточки: <input type="text" name="fronttext" />
            </label>
            <label>
                Передняя сторона карточки: <input type="text" name="backtext" />
            </label>
            <input type="submit" value="Создать карточку"/>
        </form>
    )
}