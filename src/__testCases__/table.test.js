import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../components/table";

describe("Table Component", () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
  ];

  const rows = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
  ];

  test("renders the table correctly", () => {
    render(<Table rows={rows} column={columns} dataTestId="test-table" />);

    expect(screen.getByTestId("test-table")).toBeInTheDocument();
  });

  test("renders the correct number of rows", () => {
    render(<Table rows={rows} column={columns} dataTestId="test-table" />);

    expect(screen.getAllByRole("row")).toHaveLength(rows.length + 1); // +1 for header row
  });

  test("renders the correct number of columns", () => {
    render(<Table rows={rows} column={columns} dataTestId="test-table" />);

    columns.forEach((col) => {
      expect(screen.getByText(col.headerName)).toBeInTheDocument();
    });
  });

  test("renders empty table when no rows are provided", () => {
    render(<Table rows={[]} column={columns} dataTestId="test-table" />);

    expect(screen.getByText("No rows")).toBeInTheDocument();
  });
});
