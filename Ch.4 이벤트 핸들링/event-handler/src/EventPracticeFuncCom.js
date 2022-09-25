import React, { useState } from 'react';

const EventPracticeFuncCom = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const {username, message} = form;

    const onChange = (e) => {
        const newForm = {
            ...form,
            [e.target.name] : e.target.value
        }

        setForm(newForm);
    }

    const onClick = () => {
        alert(username + " : " + message);
        setForm({
            username: '',
            message: ''
        });
    }

    return (
        <div>
            <input 
                type="text"
                name="username"
                placeholder='username'
                value={username}
                onChange={onChange}
            />
            <input 
                type="text"
                name="message"
                placeholder='message'
                value={message}
                onChange={onChange}
            />
            <button onClick={onClick}>Alert</button>
        </div>
    );
};

export default EventPracticeFuncCom;