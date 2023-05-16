import React from 'react';

const SigInForm = ({handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
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
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    name='password'
                    placeholder='Пароль'
                    onChange={handleChange}
                    required={true}
                />
            </div>
            <div className='auth__form-container_fields-content_button'>
                <button>Увійти</button>
            </div>
        </form>
    );
};

export default SigInForm;