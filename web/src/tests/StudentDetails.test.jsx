import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import StudentDetails from "../pages/StudentDetails.jsx";

test("deve mostrar 'Carregando...' ao abrir detalhes", () => {
  render(
    <BrowserRouter>
      <StudentDetails />
    </BrowserRouter>
  );

  const text = screen.getByText("Carregando...");
  expect(text).toBeInTheDocument();
});
