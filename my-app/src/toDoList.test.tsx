import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ToDoList } from "./toDoList";

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
        
});

