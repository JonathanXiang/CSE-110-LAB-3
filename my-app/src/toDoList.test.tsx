import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { MemoryRouter, Route, Routes } from "react-router-dom";

test("checks elements of list", () => {
    render(<ToDoList/>)

    const appleItem = screen.getByText("Apples");
    const bananaItem = screen.getByText("Bananas");

    expect(appleItem).toBeInTheDocument();
    expect(bananaItem).toBeInTheDocument();
});

test("checks counter", () => {
    render(<ToDoList/>)

    const items1 = screen.getByText("Items bought: 0");
    expect(items1).toBeInTheDocument();


    const appleCheckbox = screen.getByRole("checkbox", {name: "Apples"}); 
    fireEvent.click(appleCheckbox);
    expect(items1).toHaveTextContent("Items bought: 1");

    const bananaCheckbox = screen.getByRole("checkbox", {name: "Bananas"}); 
    fireEvent.click(bananaCheckbox);
    expect(items1).toHaveTextContent("Items bought: 2");

});

test("checks title name change", () => {
    render(<MemoryRouter initialEntries={["/todolist/ABC"]}>
        <Routes>
            <Route path="/todolist/:name" element = {<ToDoList/>}/>
        </Routes>
    </MemoryRouter>);


    const title = screen.getByText("ABC's To Do List");
    expect(title).toBeInTheDocument();


});



