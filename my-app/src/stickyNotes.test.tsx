import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });
});
 test("read notes", () => {
    render(<StickyNotes />);

    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "Read Note 1" } });
    fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content 1" },
    });
    fireEvent.click(createNoteButton);

    fireEvent.change(createNoteTitleInput, { target: { value: "Read Note 2" } });
    fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content 2" },
    });
    fireEvent.click(createNoteButton);

    const noteTitle1 = screen.getByText("Read Note 1");
   const noteContent1 = screen.getByText("Note content 1");
   const noteTitle2 = screen.getByText("Read Note 2");
   const noteContent2 = screen.getByText("Note content 2");

   expect(noteTitle1).toBeInTheDocument();
   expect(noteContent1).toBeInTheDocument();
   expect(noteTitle2).toBeInTheDocument();
   expect(noteContent2).toBeInTheDocument();

   const dummyNote1 = screen.getByText("test note 1 title");
   const dummyContent1 = screen.getByText("test note 1 content");
   const dummyNote2 = screen.getByText("test note 2 title");
   const dummyContent2 = screen.getByText("test note 2 content");
   const dummyNote3 = screen.getByText("test note 3 title");
   const dummyContent3 = screen.getByText("test note 3 content");
   const dummyNote4 = screen.getByText("test note 4 title");
   const dummyContent4 = screen.getByText("test note 4 content");
   const dummyNote5 = screen.getByText("test note 5 title");
   const dummyContent5 = screen.getByText("test note 5 content");
   const dummyNote6 = screen.getByText("test note 6 title");
   const dummyContent6 = screen.getByText("test note 6 content");

   expect(dummyNote1).toBeInTheDocument();
   expect(dummyContent1).toBeInTheDocument();
   expect(dummyNote2).toBeInTheDocument();
   expect(dummyContent2).toBeInTheDocument();
   expect(dummyNote3).toBeInTheDocument();
   expect(dummyContent3).toBeInTheDocument();
   expect(dummyNote4).toBeInTheDocument();
   expect(dummyContent4).toBeInTheDocument();
   expect(dummyNote5).toBeInTheDocument();
   expect(dummyContent5).toBeInTheDocument();
   expect(dummyNote6).toBeInTheDocument();
   expect(dummyContent6).toBeInTheDocument();
 })

 test("update notes", () => {
    render(<StickyNotes/>);
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "No Update Note 1" } });
    fireEvent.change(createNoteContentTextarea, {
     target: { value: "No Update Note content 1" },
    });
    fireEvent.click(createNoteButton);

    const updateNoteTitle = screen.getByText("No Update Note 1");
    const updateNoteContent = screen.getByText("No Update Note content 1");

    fireEvent.focus(updateNoteTitle);
    fireEvent.change(updateNoteTitle, { target: { textContent: "Updated Note 1" } });
    fireEvent.blur(updateNoteTitle);
    fireEvent.focus(updateNoteContent);
    fireEvent.change(updateNoteContent, {
     target: { textContent: "Updated Note content 1" },
    });
    fireEvent.blur(updateNoteContent);
    
    const noteTitle1 = screen.getByText("Updated Note 1");
    const noteContent1 = screen.getByText("Updated Note content 1");

    expect(noteTitle1).toBeInTheDocument();
    expect(noteContent1).toBeInTheDocument();

 })

 test("delete notes", ()=> {
    render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");

    fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
    fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
    });
    fireEvent.click(createNoteButton);

    const newNoteTitle = screen.getByText("New Note");
    const newNoteContent = screen.getByText("Note content");

    expect(newNoteTitle).toBeInTheDocument();
    expect(newNoteContent).toBeInTheDocument();

    const [deleteNoteButton, ...deleteButtons]= screen.getAllByText("x");

    fireEvent.click(deleteNoteButton);

    expect(newNoteTitle).not.toBeInTheDocument();
 })

 test("delete all notes", ()=> {
    render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
    const dummyNote1 = screen.getByText("test note 1 title");
    const dummyContent1 = screen.getByText("test note 1 content");
    const dummyNote2 = screen.getByText("test note 2 title");
    const dummyContent2 = screen.getByText("test note 2 content");
    const dummyNote3 = screen.getByText("test note 3 title");
    const dummyContent3 = screen.getByText("test note 3 content");
    const dummyNote4 = screen.getByText("test note 4 title");
    const dummyContent4 = screen.getByText("test note 4 content");
    const dummyNote5 = screen.getByText("test note 5 title");
    const dummyContent5 = screen.getByText("test note 5 content");
    const dummyNote6 = screen.getByText("test note 6 title");
    const dummyContent6 = screen.getByText("test note 6 content");

    expect(dummyNote1).toBeInTheDocument();
    expect(dummyContent1).toBeInTheDocument();
    expect(dummyNote2).toBeInTheDocument();
    expect(dummyContent2).toBeInTheDocument();
    expect(dummyNote3).toBeInTheDocument();
    expect(dummyContent3).toBeInTheDocument();
    expect(dummyNote4).toBeInTheDocument();
    expect(dummyContent4).toBeInTheDocument();
    expect(dummyNote5).toBeInTheDocument();
    expect(dummyContent5).toBeInTheDocument();
    expect(dummyNote6).toBeInTheDocument();
    expect(dummyContent6).toBeInTheDocument();

    const deleteButtons= screen.getAllByText("x");

    for (let db of deleteButtons) {
        fireEvent.click(db);  
    }
    expect(dummyNote1).not.toBeInTheDocument();
    expect(dummyContent1).not.toBeInTheDocument();
    expect(dummyNote2).not.toBeInTheDocument();
    expect(dummyContent2).not.toBeInTheDocument();
    expect(dummyNote3).not.toBeInTheDocument();
    expect(dummyContent3).not.toBeInTheDocument();
    expect(dummyNote4).not.toBeInTheDocument();
    expect(dummyContent4).not.toBeInTheDocument();
    expect(dummyNote5).not.toBeInTheDocument();
    expect(dummyContent5).not.toBeInTheDocument();
    expect(dummyNote6).not.toBeInTheDocument();
    expect(dummyContent6).not.toBeInTheDocument();
 })
