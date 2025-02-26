import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import useRewardData from "../hooks/useRewardData";

jest.mock("../hooks/useRewardData", () => jest.fn());

describe("App Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Loader when loading is true", () => {
    useRewardData.mockReturnValue({
      result: [],
      loading: true,
      error: null,
      dateFilter: null,
      setDateFilter: jest.fn(),
      fetchData: jest.fn(),
    });

    render(<App />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("renders ErrorBoundary when an error occurs", () => {
    useRewardData.mockReturnValue({
      result: [],
      loading: false,
      error: "Something went wrong",
      dateFilter: null,
      setDateFilter: jest.fn(),
      fetchData: jest.fn(),
    });

    render(<App />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
