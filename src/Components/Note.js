import { MdDeleteForever } from "react-icons/md";
import './Note.css';

const Note = ({ id, text, date, bgColor, handleDeleteNote }) => {

    return (
        <div
            className="note"
            style={{
                backgroundColor: `#` + bgColor,
              }}
        >
            <span>{text}</span>
            <footer className="note-footer">
                <small>{date}</small>
                <MdDeleteForever
                    className="delete-icon" 
                    size='1.3em' 
                    onClick={() => handleDeleteNote(id)}
                />
            </footer>
        </div>
    )
}

export default Note;