import './stickyNotes.css';
import { Label, Note } from "./types";
import { dummyNotesList } from "./constants";
import { ToggleTheme} from "./hooksExercise";
import { FavoriteButton } from './favoriteButton';
import { useContext } from 'react';
import { ThemeContext, BGThemeContext, themes, BGthemes } from './themeContext';
import React, { useState, useEffect } from 'react';
import internal from 'stream';
import { eventNames } from 'process';



export const StickyNotes = () => {
//  const theme = useContext(ThemeContext);
 const [notes, setNotes] = useState(dummyNotesList); 
 const [favorites, setFavorites] = useState(notes.map(() => false));
 const favoriteNotes = notes.filter((_, index) => favorites[index]);
 const [currentTheme, setCurrentTheme] = useState(themes.light);
 const [backTheme, setBackTheme] = useState(BGthemes.light);
 const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.personal,
  };
 const [selectedNote, setSelectedNote] = useState(initialNote);
 const selectNoteHandler = (note: Note) => {
    setSelectedNote(note);
 };

 const toggleFavorite = (index: number) => {
    setFavorites(favorites.map((fav, i) => (i === index ? !fav : fav)))
 }
 
 const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    setBackTheme(backTheme === BGthemes.light ? BGthemes.dark : BGthemes.light);
    console.log(backTheme)
    console.log(currentTheme)
 }
 
 useEffect(() => {
    document.body.style.background = backTheme.background;
    document.body.style.color = backTheme.foreground;
 }, [currentTheme]);


 
 
 const [createNote, setCreateNote] = useState(initialNote);

 const createNoteHandler = (event: React.FormEvent) => {
   event.preventDefault();
   console.log("title: ", createNote.title);
   console.log("content: ", createNote.content);
   createNote.id = notes.length + 1;
   setNotes([createNote, ...notes]);
   setCreateNote(initialNote);
   setFavorites([false, ...favorites]);

 };

 const updateNoteContent = (field: keyof Note, value: string) => {
    setNotes(notes.map(note => note.id === selectedNote.id ? {...note, [field]: value} : note));
 };

 const deleteNote = (id: number) => {
    const delIndex = notes.findIndex(note => note.id === id)
    setNotes(notes.filter(note => note.id != id));
    setFavorites(favorites.filter((_, index) => index !== delIndex));
 };

 return (
   <ThemeContext.Provider value = {currentTheme}>
   <BGThemeContext.Provider value = {backTheme}>

   <div className='app-container'
   style = {{background: backTheme.background, color: backTheme.foreground}}>
     <div id='userInput'>
     <form className="note-form" onSubmit={createNoteHandler}>
       <div>
        <input placeholder="Note Title" style={{ background: currentTheme.background, color: currentTheme.foreground }}
        value={createNote.title}
        onChange={(event) =>setCreateNote({ ...createNote, title: event.target.value})}
        required></input></div>

       <div><textarea style={{ background: currentTheme.background, color: currentTheme.foreground }}
       value={createNote.content}
       onChange={(event) =>setCreateNote({ ...createNote, content: event.target.value })}
       required></textarea></div>

       <div>
       <select
       	onChange={(event) =>setCreateNote({ ...createNote, label: event.target.value as Label })}
        value={createNote.label}
       	required>
       	<option value={Label.personal}>Personal</option>
       	<option value={Label.study}>Study</option>
       	<option value={Label.work}>Work</option>
       	<option value={Label.other}>Other</option>
       </select>
       </div>


       <div><button type="submit">Create Note</button></div>
       
     </form>
     <ToggleTheme toggleTheme={toggleTheme}/>
     </div>
     <div className="notes-grid">
       {notes.map((note, index) => (
         <div
           key={note.id}
           className="note-item"
           style={{ background: currentTheme.background, color: currentTheme.foreground }}
           onClick={() => selectNoteHandler(note as Note)}
           >
           <div className="notes-header">
             
             <FavoriteButton 
             isFavorite={favorites[index]}
             toggleFavorite={() => toggleFavorite(index)}
             theme = {currentTheme}
             />
             <button onClick={() => deleteNote(note.id)}>x</button>
           </div>
           <h2 contentEditable={selectedNote.id === note.id}
           onBlur={(e) => updateNoteContent('title', e.currentTarget.textContent || '')}
           > {note.title} </h2>
           <p contentEditable={selectedNote.id === note.id}
           onBlur={(e) => updateNoteContent('content', e.currentTarget.textContent || '')}
           > {note.content} </p>
           <p contentEditable={selectedNote.id === note.id}
           onBlur={(e) => updateNoteContent('label', e.currentTarget.textContent || '')}
           > {note.label} </p>
         </div>
       ))}
     </div>
     <div className='favoritesList'>
     <h2>List of Favorites</h2>
     <ol>
        {favoriteNotes.map((note) => (
            <li key={note.id}>{note.title}</li>
        ))}
     </ol>
     </div>
   </div>
   </BGThemeContext.Provider>
   </ThemeContext.Provider>

 );
}

