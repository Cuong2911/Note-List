import Note from './Note';
import './NoteList.css';
import AddNote from './AddNote';

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {

    return (
        <div className="note-list">
            {notes.map((note) => (
                <Note
                    key={note.id} 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    bgColor={note.bgColor}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NoteList;