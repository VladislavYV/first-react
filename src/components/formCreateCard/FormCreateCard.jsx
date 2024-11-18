import './FormCreateCard.css';
import { useForm } from "react-hook-form";

export function FormCreateCard() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            front: '',
            back: ''
        }
    });

    return (
        <form className='create-card__form' onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <div className='form__item'>
                <label className='create-card__front' htmlFor='front'>
                    Передняя сторона карточки:
                </label>
                <input 
                    type="text" 
                    name="front"
                    id='front'
                    {...register("front", {
                        required: "Напишите текст для передней стороны карточки.",
                        minLength: {
                            value: 3,
                            message: "Кол-во символов должно быть больше 3."
                        }
                    })} 
                />
                <p className='error-msg'>{errors.front?.message}</p>
            </div>
            <div className='form__item'>
                <label className='create-card__back' htmlFor='back'>
                    Задняя сторона карточки:
                </label>
                <input 
                    type="text" 
                    name="back" 
                    id='front'
                    {...register("back", {
                        required: "Напишите текст для задней стороны карточки.",
                        minLength: {
                            value: 3,
                            message: "Кол-во символов должно быть больше 3."
                        }
                    })} 
                />
                <p className='error-msg'>{errors.back?.message}</p>
            </div>
            <div className='form__item'>
                <input
                    className="create-card__btn"
                    type="submit" 
                    value="Создать карточку" 
                />
            </div>
        </form>
    )
}