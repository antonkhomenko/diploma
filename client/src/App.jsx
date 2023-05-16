import React, {useState} from 'react';
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from 'universal-cookie';
import ChannelListContainer from "./components/ChannelListContainer.jsx";
import ChannelContainer from "./components/ChannelContainer.jsx";

import "stream-chat-react/dist/css/index.css";
import './App.css';


import Auth from "./components/Auth.jsx";



const cookies = new Cookies();

const authToken = cookies.get("token");
const client = StreamChat.getInstance(import.meta.env.VITE_API_KEY);

if(authToken) {
    client.connectUser({
        name:       cookies.get('userName'),
        fullName:       cookies.get('fullName'),
        id:         cookies.get('userID'),
        image:      cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
    }, authToken);
}

const App = () => {

    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if(!authToken) {
        return (
            <Auth/>
        )
    }


    return (
        <div className='app__wrapper'>
            <Chat client={client} theme='team light'>
                <ChannelListContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
            </Chat>
        </div>
    );
};

export default App;