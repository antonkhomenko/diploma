import React, {useState} from 'react';
import Cookies from "universal-cookie";
import axios from "axios";
import SignInImage from '../assets/signInImage.jpg';
import SigInForm from "./Forms/SigInForm.jsx";
import SignOutForm from "./Forms/SignOutForm.jsx";

const cookies = new Cookies();


const formInitialState = {
    fullName: '',
    userName: '',
    password: '',
    passwordConfirm: '',
    avatarURL: '',
}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [form, setForm] = useState(formInitialState);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {userName, password, avatarURL} = form;
        const URL = 'http://localhost:8000/auth';

        const {data: {token, userID, hashedPassword, fullName}} = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
            userName, password, fullName: form.fullName, avatarURL
        });

        cookies.set('token', token);
        cookies.set('userName', userName);
        cookies.set('fullName', fullName);
        cookies.set('userID', userID);

        if(isSignup) {
            cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
    }

    const switchMode = () => {
        setIsSignup(prev => !prev);
    }


    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{isSignup ? 'Регестрація' : 'Увійти'}</p>
                    {isSignup
                        ? <SignOutForm handleSubmit={handleSubmit} handleChange={handleChange}/>
                        : <SigInForm handleSubmit={handleSubmit} handleChange={handleChange}/>
                    }
                    <div className='auth__form-container_fields-account'>
                        <p>
                            {isSignup ? 'Вже зараєстрований' : 'Ще не маю облікового запису'}
                            <span onClick={switchMode}>
                                {isSignup ? ' Увійти' : ' Зареєструватись'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={SignInImage} alt="sign in image"/>
            </div>
        </div>
    );
};

export default Auth;