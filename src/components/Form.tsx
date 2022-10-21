import React from 'react';
import '../styles/App.css';

const Form = () => {
    return (
        <form className='Form'>
            <div className='Name'>Вход</div>
            <div className='Email'>Email</div>
            <input name='email' type='text' placeholder='Введите свой email'/>
            <div className='Password'>Пароль</div>
            <input name='password' type='text' placeholder='Введите свой пароль'/>
            <button className='Button' type='submit'> Войти</button>
        </form>
    );
};

export default Form;