import { render, screen } from "@testing-library/react";
import AllTransactions from "../components/allTransactions";
import Heading from "../components/heading";
import Table from "../components/table";

jest.mock("../components/heading", () => jest.fn(({ text }) => <h1 id="heading">{text}</h1>));
jest.mock("../components/table", () => jest.fn(() => <div data-testid="table"></div>));

describe("AllTransactions Component", () => {
    const transactionsMock = [
        {
            transactionId: 1,
            customerName: "John Doe",
            purchaseDate: "2024-07-20",
            productPurchased: "Laptop",
            price: 1200,
            rewardPoints: 100,
            customerId: "1234"
        },
        {
            transactionId: 2,
            customerName: "Jane Smith",
            purchaseDate: "2024-07-21",
            productPurchased: "Phone",
            price: 800,
            rewardPoints: 50,
            customerId: "5678"
        }
    ];

    it("should render Heading component with correct text", () => {
        render(<AllTransactions transactions={transactionsMock} />);
        expect(screen.getByTestId('heading')).toHaveTextContent("All Transactions");
    });

    // it("should render Table component with correct props", () => {
    //     render(<AllTransactions transactions={transactionsMock} />);

    //     expect(Table).toHaveBeenCalledWith(
    //         expect.objectContaining({
    //             columns: expect.arrayContaining([
    //                 "Transaction ID",
    //                 "Customer Name",
    //                 "Purchase Date",
    //                 "Product Purchased",
    //                 "Price",
    //                 "Reward Points"
    //             ]),
    //             data: transactionsMock,
    //             excludeKeys: expect.arrayContaining(["customerId"])
    //         }),
    //         expect.any(Object) // React component props always have additional internal properties
    //     );
    // });
});
