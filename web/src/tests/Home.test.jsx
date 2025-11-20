import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";

test("deve renderizar o título da lista de alunos", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const titulo = screen.getByText("Lista de Alunos");
  expect(titulo).toBeInTheDocument();
});
