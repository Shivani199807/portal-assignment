import React from 'react';
import { render, screen } from '@testing-library/react';
import MonthlyTransaction from '../components/monthyTransactions';
import { columns } from '../components/monthyTransactions';
const mockTransactions=[
    
    {
      "transactionId": 4081,
      "customerId": 20009,
      "customerName": "Preeti Malhotra",
      "purchaseDate": "2024-03-11",
      "productPurchased": "Smartphone",
      "price": 875
    },
    {
      "transactionId": 4061,
      "customerId": 20007,
      "customerName": "Nisha Rao",
      "purchaseDate": "2024-04-15",
      "productPurchased": "Portable Speaker",
      "price": 99.99
    },
    {
      "transactionId": 4101,
      "customerId": 20011,
      "customerName": "Megha Kulkarni",
      "purchaseDate": "2023-06-05",
      "productPurchased": "Wireless Charger",
      "price": 45
    },
    {
      "transactionId": 4091,
      "customerId": 20010,
      "customerName": "Amit Tiwari",
      "purchaseDate": "2024-01-10",
      "productPurchased": "Gaming Mouse",
      "price": 60
    },
    {
      "transactionId": 4041,
      "customerId": 20005,
      "customerName": "Kunal Mehta",
      "purchaseDate": "2023-12-22",
      "productPurchased": "Desk Lamp",
      "price": 40
    },
    {
      "transactionId": 4071,
      "customerId": 20008,
      "customerName": "Rahul Desai",
      "purchaseDate": "2023-02-21",
      "productPurchased": "Electric Kettle",
      "price": 55.5
    },
    {
      "transactionId": 4011,
      "customerId": 20002,
      "customerName": "Ayesha Kapoor",
      "purchaseDate": "2024-10-25",
      "productPurchased": "Wireless Earbuds",
      "price": 130.75
    },
    {
      "transactionId": 4003,
      "customerId": 20001,
      "customerName": "Vikram Singh",
      "purchaseDate": "2024-12-08",
      "productPurchased": "Smart Watch",
      "price": 200.5
    },
    {
      "transactionId": 4050,
      "customerId": 20001,
      "customerName": "Vikram Singh",
      "purchaseDate": "2024-04-08",
      "productPurchased": "Smart Watch",
      "price": 200
    },
    {
      "transactionId": 4032,
      "customerId": 20004,
      "customerName": "Ritika Sharma",
      "purchaseDate": "2024-12-06",
      "productPurchased": "Noise Cancelling Headphones",
      "price": 200
    },
    {
      "transactionId": 4021,
      "customerId": 20003,
      "customerName": "Neeraj Verma",
      "purchaseDate": "2024-06-30",
      "productPurchased": "Bluetooth Mouse",
      "price": 45.99
    },
    {
      "transactionId": 4001,
      "customerId": 20001,
      "customerName": "Vikram Singh",
      "purchaseDate": "2024-12-22",
      "productPurchased": "Laptop",
      "price": 1250.75
    },
  
   
  ]
  
  
test('renders transactions table with data ', () => {
    render(<MonthlyTransaction transactions={mockTransactions} />);
 
  
    const excludeKeys = [""]; // Define excludeKeys properly
    const columnKeys = Object.keys(mockTransactions[0]).filter(
      (key) => !excludeKeys.includes(key)
    );
  
    
    mockTransactions.forEach((transaction, rowIndex) => {
      columnKeys.forEach((col, colIndex) => {
        expect(screen.getByTestId(`cell-${rowIndex}-${colIndex}`)).toBeInTheDocument();
      });
  
   
    });
  });
  test('renders transactions table with columns', () => {
    render(<MonthlyTransaction transactions={mockTransactions} />);
    columns.forEach((columns)=>{
        expect(screen.getByText(columns)).toBeInTheDocument();
    })
  
  
  });
  
  
  test("renders heading correctly", () => {
    render(<MonthlyTransaction transactions={mockTransactions} />);

   
    const headingElement = screen.getByTestId("heading");
    expect(headingElement).toBeInTheDocument();

    
    expect(headingElement).toHaveTextContent("Monthly Transactions", { exact: true }); 

   
  });
  
  
  
