import React from "react";
import { render, screen } from "@testing-library/react";
import TotalRewardsPoints from "../components/totalRewards";

const mockTransactions = [
  {
    transactionId: 4092,
    customerId: 10000,
    customerName: "Amit Tiwari",
    purchaseDate: "06/14/2024",
    productPurchased: "Monitor",
    price: 48.0,
  },
  {
    transactionId: 4093,
    customerId: 10001,
    customerName: "Vikram Singh",
    purchaseDate: "03/26/2022",
    productPurchased: "Mouse",
    price: 459.601618051525,
  },
  {
    transactionId: 4094,
    customerId: 10002,
    customerName: "Ayesha Kapoor",
    purchaseDate: "04/10/2023",
    productPurchased: "Tablet",
    price: 919.6585371654922,
  },
  {
    transactionId: 4095,
    customerId: 10003,
    customerName: "Neeraj Verma",
    purchaseDate: "03/20/2022",
    productPurchased: "Router",
    price: 287.14439283274567,
  },
  {
    transactionId: 4096,
    customerId: 10001,
    customerName: "Vikram Singh",
    purchaseDate: "12/20/2023",
    productPurchased: "Laptop",
    price: 633.9281875676744,
  },
];

test("renders transactions table data", () => {
  render(<TotalRewardsPoints totalTransactions={mockTransactions} />);

  expect(screen.getByTestId("totalRewardPoints")).toBeInTheDocument();
});

test("renders heading correctly", () => {
  render(<TotalRewardsPoints transactions={mockTransactions} />);

  const headingElement = screen.getByTestId("heading");
  expect(headingElement).toBeInTheDocument();

  expect(headingElement).toHaveTextContent("Total Rewards", { exact: true });
});
