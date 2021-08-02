import React, { useState } from 'react';
import "./ChatInput.css";
import db, { firebase } from './firebase';
import useStateValue from './StateProvider';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();
    const sendMessage = e => {
        e.preventDefault();

        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue,
                user: user.displayName,
                userImage: user.photoURL
            });
        }
    };
    return (
        <div className="chatInput">
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <button type="submit">SEND</button>
            </form>
        </div>
    );
};

export default ChatInput;
