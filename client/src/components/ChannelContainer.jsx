import React from 'react';
import {Channel, useChatContext, MessageSimple} from "stream-chat-react";
import EditChannel from "./EditChannel.jsx";
import CreateChannel from "./CreateChannel.jsx";
import ChannelInner from "./ChannelInner.jsx";

const ChannelContainer = ({isCreating, isEditing, setIsCreating, setIsEditing, createType}) => {

    const {channel} = useChatContext();

    if(isCreating) {
        return (
            <div className='channel__container'>
                <CreateChannel createType={createType} setIsCreating={setIsCreating}/>
            </div>
        )
    }

    if(isEditing) {
        return (
            <div className='channel__container'>
                <EditChannel setIsEditing={setIsEditing}/>
            </div>
        )
    }

    const EmptyState = () => {
        return (
            <div className='channel-empty__container'>
                <p className='channel-empty__first'>Початок вашої історії повідомлень</p>
                <p className='channel-empty__second'>Відправляйте повідомлення, посилання, файли, та багато інщого !</p>
            </div>
        )
    }

    return (
        <div className='channel__container'>
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, index) => <MessageSimple key={index} {...messageProps}/>}
            >
                <ChannelInner setIsEditing={setIsEditing}/>
            </Channel>
        </div>
    );
};

export default ChannelContainer;