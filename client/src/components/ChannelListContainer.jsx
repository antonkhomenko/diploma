import React, {useState} from 'react';
import {ChannelList, useChatContext} from "stream-chat-react";
import Cookies from "universal-cookie";
import CompanyIcon from '../assets/companyIcon.svg';
import LogoutIcon from '../assets/logoutIcon.svg';
import ChannelSearch from "./ChannelSearch.jsx";
import TeamChannelList from "./TeamChannelList.jsx";
import TeamChannelPreview from "./TeamChannelPreview.jsx";

const cookies = new Cookies();

const SideBar = ({logout}) => {
    return (
        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src={CompanyIcon} alt="company-icon" width={30}/>
                </div>
            </div>

            <div className='channel-list__sidebar__icon2'>
                <div className='icon1__inner' onClick={logout}>
                    <img src={LogoutIcon} alt="logout-icon" width={30}/>
                </div>
            </div>
        </div>
    )
}

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>
            Team chat
        </p>
    </div>
);

const customChannelTeamFilter = (channels) => {
    return channels.filter(c => c.type === 'team')
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter(c => c.type === 'messaging')
}

const ChannelListContent = ({isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer}) => {

    const {client} = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userName');
        cookies.remove('fullName');
        cookies.remove('userID');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');

        window.location.reload();
    }

    const filters = {
        members: {$in: [client.userID]}
    }

    return (
        <>
            <SideBar logout={logout}/>
            <div className='channel-list__list__wrapper'>
                <CompanyHeader/>
                <ChannelSearch setToggleContainer={setToggleContainer}/>
                {/*For group messages*/}
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => {
                        return (
                            <TeamChannelList
                                {...listProps}
                                type='team'
                                isCreating={isCreating}
                                setIsCreating={setIsCreating}
                                setCreateType={setCreateType}
                                setIsEditing={setIsEditing}
                                setToggleContainer={setToggleContainer}
                            />
                        )
                    }}
                    Preview={(previewProps) => {
                        return (
                            <TeamChannelPreview
                                {...previewProps}
                                type='team'
                                setToggleContainer={setToggleContainer}
                                setIsCreating={setIsCreating}
                                setIsEditing={setIsEditing}
                            />
                        )
                    }}
                />
                {/*//For direct messages*/}
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => {
                        return (
                            <TeamChannelList
                                {...listProps}
                                type='messaging'
                                isCreating={isCreating}
                                setIsCreating={setIsCreating}
                                setCreateType={setCreateType}
                                setIsEditing={setIsEditing}
                                setToggleContainer={setToggleContainer}
                            />
                        )
                    }}
                    Preview={(previewProps) => {
                        return (
                            <TeamChannelPreview
                                {...previewProps}
                                type='team'
                                setToggleContainer={setToggleContainer}
                                setIsCreating={setIsCreating}
                                setIsEditing={setIsEditing}
                            />
                        )
                    }}
                />
            </div>
        </>
    );
};

const ChannelListContainer = ({setCreateType, setIsCreating, setIsEditing}) => {

    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className='channel-list__container'>
                <ChannelListContent
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
            </div>

            <div
                className='channel-list__container-responsive'
                style={{left: toggleContainer ? '0%' : '-89%', backgroundColor: 'red'}}
            >
                <div className='channel-list__container-toggle' onClick={() => setToggleContainer(prev => !prev)}>
                </div>
                <ChannelListContent
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                    setToggleContainer={setToggleContainer}
                >

                </ChannelListContent>
            </div>
        </>
    )
}

export default ChannelListContainer;