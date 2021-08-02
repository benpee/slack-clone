import React, { useState, useEffect } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { useStateValue } from './StateProvider';

const rooms = [
    {
        name: "youtube",
    },
    {
        messages: {
            user: 'Ajibola',
            userImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-cldnry.s-nbcnews.com%2Fimage%2Fupload%2Fnewscms%2F2021_24%2F3483901%2F210617-pope-francis-jm-1014.jpg&imgrefurl=https%3A%2F%2Fwww.nbcnews.com%2Fnews%2Freligion%2Fpope-francis-champions-right-workers-organize-unions-n1271143&tbnid=hAeb7ghwIZk3AM&vet=12ahUKEwiB17OCx7rxAhUM5IUKHf4VBvMQMygDegUIARDYAQ..i&docid=p4kZ3nrajkNLzM&w=2500&h=1609&q=pope%20francis&ved=2ahUKEwiB17OCx7rxAhUM5IUKHf4VBvMQMygDegUIARDYAQ',
            timeStamp: new Date().getDate(),
            message: ['Hello', 'is any one there?'],
            id: 1
        }
    }
];

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    // useEffect(() => {
    //     db.collection('rooms').onSnapshot(snapshot => {
    //         setChannels(
    //             snapshot.docs.map(doc => {
    //                 return {
    //                     id: doc.id,
    //                     name: doc.data().name,
    //                 }
    //             })
    //         );
    //     })
    // }, [channels]);

    // useEffect(() => {
    //     setChannels(rooms.messages)
    // }, [channels])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Anter Project</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title='Threads' />
            <SidebarOption Icon={InboxIcon} title='Mentions & Reactions' />
            <SidebarOption Icon={DraftsIcon} title='Saved Items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser' />
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File Browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title='Show more' />
            {/* Connect to db and list all the channels */}
            {/* <SidebarOption ... /> */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
            <SidebarOption title='Youtube' />
        </div>
    )
}

export default Sidebar
