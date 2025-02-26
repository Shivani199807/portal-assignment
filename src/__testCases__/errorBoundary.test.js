import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../components/errBoundary";

describe("ErrorBoundary Component", () => {
  test("renders children when no error is present", () => {
    render(
      <ErrorBoundary error={null}>
        <div data-testid="child-component">This is a child component</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });

  test("renders error message when error is present", () => {
    const errorMessage = "Test error occurred";

    render(<ErrorBoundary error={errorMessage} />);

    expect(
      screen.getByText("😞 Oops! Something went wrong.")
    ).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test("renders error container with correct test ID", () => {
    render(<ErrorBoundary error="An error happened!" />);

    expect(screen.getByTestId("errorboundary")).toBeInTheDocument();
  });
});
