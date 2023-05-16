import React from 'react';

const SignOutForm = ({handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='auth__form-container_fields-content_input'>
                <label htmlFor="fullName">Імʼя та прізвище</label>
                <input
                    type="text"
                    name='fullName'
                    placeholder='Імʼя та прізвище'
                    onChange={handleChange}
                    required={true}
                />
            </div>
            <div className='auth__form-container_fields-content_input'>
                <label htmlFor="userName">Імʼя користувача</label>
                <input
                    type="text"
                    name='userName'
                    placeholder='Імʼя користувача'
                    onChange={handleChange}
                    required={true}
                />
            </div>
            <div className='auth__form-container_fields-content_input'>
                <label htmlFor="avatarURL">Посилання на аватар</label>
                <input
                    type="text"
                    name='avatarURL'
                    placeholder='Увведіть URL-адресу зображення для вашого аватару'
                    onChange={handleChange}
                    required={true}
                />
            </div>
            <div className='auth__form-container_fields-content_input'>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    name='password'
                    placeholder='Пароль'
                    onChange={handleChange}
                    required={true}
                />
            </div>
            <div className='auth__form-container_fields-content_input'>
                <label htmlFor="passwordConfirm">Підтвердження пароля</label>
                <input
                    type="password"
                    name='passwordConfirm'
                    placeholder='Повторіть пароль для підтвердження'
                    onChange={handleChange}
                    required={true}
                />
            </div>
            <div className='auth__form-container_fields-content_button'>
                <button>Зареєструватися</button>
            </div>
        </form>
    );
};

export default SignOutForm;