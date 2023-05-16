import React, {useState} from 'react';
import {useChatContext} from "stream-chat-react";
import CloseCreateChannelBtn from "./UI/CloseCreateChannelBtn.jsx";
import UserList from "./UserList.jsx";

//UserList

const ChannelNameInput = ({channelName = '', setChannelName}) => {
    const handleChange = e => {
         e.preventDefault();
         setChannelName(e.target.value);
    }

    return (
        <div className='channel-name-input__wrapper'>
            <p>Назва:</p>
            <input type="text" value={channelName} onChange={handleChange} placeholder='Назва каналу'/>
            <p>Додати учасників</p>
        </div>
    )
}


const CreateChannel = ({createType, setIsCreating}) => {

    const [channelName, setChannelName] = useState('');
    const {client, setActiveChannel} = useChatContext();
    const [selectedUsers, setSelectedUsers] = useState([client.userID || '']);

    const createChannel = async (e) => {
        e.preventDefault();
        try {
            const newChannel = await client.channel(createType, channelName, {
                name: channelName, members: selectedUsers,
            });

            await newChannel.watch();

            setChannelName('');
            setIsCreating(false);
            setSelectedUsers([client.userID]);
            setActiveChannel(newChannel);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='create-channel__container'>
            <div className='create-channel__header'>
                <p>{createType === 'team' ?  'Створити канал' : 'Надіслати приватне повідомлення'}</p>
                <CloseCreateChannelBtn setIsCreating={setIsCreating}/>
            </div>
            {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName}/>}
            <UserList setSelectedUsers={setSelectedUsers}/>
            <div className='create-channel__button-wrapper' onClick={createChannel}>
                <p>{createType === 'team' ? 'Створити канал' : 'Створити груповий чат'}</p>
            </div>
        </div>
    );
};

export default CreateChannel;