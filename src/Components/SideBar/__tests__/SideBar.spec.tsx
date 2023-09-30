import { render, screen } from "@testing-library/react";
import Sidebar from "../index";
import { BrowserRouter as Router } from "react-router-dom";


test("renders Dashboard link", () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  const dashboardLink = screen.getByLabelText("Dashboard");
  expect(dashboardLink).toBeTruthy();
});

test("renders Transactions link", () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  const transactionsLink = screen.getByLabelText("Transações");
  expect(transactionsLink).toBeTruthy();
});

test("renders Tema Claro option", () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  const lightModeOption = screen.getByLabelText("Tema Claro");
  expect(lightModeOption).toBeTruthy();
});

test("renders Tema Escuro option", () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );

  const darkModeOption = screen.getByLabelText("Tema Escuro");
  expect(darkModeOption).toBeTruthy();
});