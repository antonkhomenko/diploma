import React from 'react';
import AddChannelsBtn from "./UI/AddChannelsBtn.jsx";

const TeamChannelList = ({children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer}) => {
    if(error) {
        return type === 'team' ? (
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    Помилка з`єднання, будь ласка спробуйте пізніше
                </p>
            </div>
        ) : null;
    }

    if(loading) {
        return (
            <div className='team-channel-list'>
                <p className='team-channel-list__message loading'>
                    Заванатаження {type === 'team' ? 'Каналів...' : ' Повідомлень...'}
                </p>
            </div>
        )
    }


    return (
        <div className='team-channel-list'>
            <div className='team-channel-list__header'>
                <p className='team-channel-list__header__title'>
                    {type === 'team' ? 'Канали' : 'Приватні повідомлення'}
                </p>
                <AddChannelsBtn
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                    type={type === 'team' ? 'team' : 'messaging'}
                    setToggleContainer={setToggleContainer}
                />
                {/*<img src={addChannels} alt="add-channels-btn" width={30}/>*/}
            </div>
            {children}
        </div>
    );
};

export default TeamChannelList;