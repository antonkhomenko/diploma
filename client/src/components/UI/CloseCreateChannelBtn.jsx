import React from 'react';
import CloseIcon from '../../assets/closeChatIcon.svg'

const CloseCreateChannelBtn = ({ setIsCreating, setIsEditing }) => {

    const onClose = () => {
        if (setIsCreating) setIsCreating(false);
        if (setIsEditing) setIsEditing(false);
    }

    return (
        <button onClick={onClose} style={{border: 'none', background: 'none', cursor: 'pointer'}}>
            <img src={CloseIcon} alt="close-channel-icon" width={35}/>
        </button>
    );
};

export default CloseCreateChannelBtn;