import './FormCreateSet.css'
// import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormCreateSet() {
    const { register, handleSubmit, formState : {errors} } = useForm({
        defaultValues: {
            name:'',
            description: ''
        }
    });
    console.log(errors);

    // const [name, setName] = useState('');
    // const [description, setDesc] = useState('');

    // function handleNameChange(e) {
    //     setName(e.target.value);
    // }

    // function handleDescChange(e) {
    //     setDesc(e.target.value);
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if(name == '' || description == ''){
    //         alert("Одно из полей не заполнено.")
    //     } else {
    //         console.log(name,description);
    //     }
    // }

    return (
        <form className="create-set__form" onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <div className="form__item">
                <label className="create-set__name" htmlFor="name">
                    Название набора:
                </label>
                <input
                    type="text"
                    name="name"
                    id='name'
                    {...register("name", { 
                        required: "Напишите название набора.", 
                        minLength: {
                            value: 3,
                            message: "Название набора должно состоять минимум из 3 символов."
                        }
                    })}
                />
                <p className='error-msg'>{errors.name?.message}</p>
            </div>
            <div className='form__item'>
                <label className="create-set__desc" htmlFor="description">
                    Описание:
                </label>
                <textarea
                    name="discrition"
                    id='description'
                    rows={6}
                    {...register("description", { required: "Заполните описание набора." })}
                />
                <p className='error-msg'>{errors.description?.message}</p>
            </div>
            <div className='form__item'>
                <input
                    className="create-set__btn"
                    type="submit"
                    value="Создать сет"
                />
            </div>
        </form>
    );
}