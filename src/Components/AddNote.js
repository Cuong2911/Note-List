import './AddNote.css';
import { useState, useEffect } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [color, setColor] = useState(Math.floor(Math.random()*16777215).toString(16))

    const characterLimit = 200;
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };
    const handleSave = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText, color);
        }else {
            alert('Nhập vào thì mới lưu được thằng khốn!')
        }
        setNoteText('');
        setColor(Math.floor(Math.random()*16777215).toString(16))
    }
    return (
        <div
            className="note new"
            style={{
                backgroundColor: `#` + color,
              }}
        >
            <textarea 
                rows="8"
                cols="10"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;