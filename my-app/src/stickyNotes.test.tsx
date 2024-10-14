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
});