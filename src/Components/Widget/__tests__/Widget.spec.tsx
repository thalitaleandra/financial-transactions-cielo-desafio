import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Widget from "../index"

test("renders widget with description, value, and percentage", () => {
  const description = "Total de Vendas";
  const value = 1000;
  const porcentagem = "10%";
  render(
    <Router>
      <Widget description={description} value={value} porcentagem={porcentagem} />
    </Router>
  );

  const descriptionElement = screen.getByText(description);
  const valueElement = screen.getByText(value.toString());
  const percentageElement = screen.getByText(porcentagem);

  expect(descriptionElement).toBeTruthy();
  expect(valueElement).toBeTruthy();
  expect(percentageElement).toBeTruthy();
});

test("renders link to Transactions page", () => {
  const description = "Total de Vendas";
  const value = 1000;
  const porcentagem = "10%";

  render(
    <Router>
      <Widget description={description} value={value} porcentagem={porcentagem} />
    </Router>
  );

  const linkElement = screen.getByText("Ver detalhes de transações");

  expect(linkElement).toBeTruthy();
});