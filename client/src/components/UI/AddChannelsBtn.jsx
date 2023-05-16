import React from 'react';
import addChannels from '../../assets/addChannels.svg';
import cls from './AddChannelsBtn.module.css';

const AddChannelsBtn = ({setCreateType, setIsCreating, setIsEditing, setToggleContainer, type}) => {

    const handleClick = () => {
        setCreateType(type);
        setIsCreating((prevState) => !prevState);
        setIsEditing(false);
        if(setToggleContainer) setToggleContainer((prevState) => !prevState);
    }

    return (
        <button className={cls.btn}>
            <img src={addChannels} alt="add-channels-btn" width={20} onClick={handleClick}/>
        </button>

    );
};

export default AddChannelsBtn;