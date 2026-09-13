import React, {useState} from 'react';

export default function TicketForm(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // !IMPORTANT! Prevents page from being reloaded when we submit the form
        clearForm();
    }

    return(
        <form onSubmit={handleSubmit} className="ticket-form">
            <div>
                <label>Title</label>
                <input 
                    type="text" 
                    value={title} 
                    className="form-input" 
                    onChange={e => setTitle(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Description</label>
                <textarea
                    type="text"
                    value={description}
                    className="form-input"
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <fieldset className="priority-fieldset">
                <legend>Priority</legend>

                {
                    Object.entries(priorityLabels).map(([value, label]))
                }
            </fieldset>
        </form>
    )
}
