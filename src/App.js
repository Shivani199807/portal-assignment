import React from "react";
import "./App.css";
import useRewardData from "./hooks/useRewardData";
import AllTransactions from "./components/allTransactions";
import MonthlyRewardPoints from "./components/monthyTransactions";
import TotalRewardsPoints from "./components/totalRewards";
import Loader from "./components/loader";
import DateComponent from "./components/dateComponent";
import ErrorBoundary from "./components/errBoundary";
import { Container } from "@mui/material";

/**
 * The main application component that manages and displays transaction data, reward points,
 * and filtering functionality.
 *
 * @returns {JSX.Element} The main application Page.
 */
function App() {
  const { result, loading, error, dateFilter, setDateFilter, fetchData } =
    useRewardData();

  return (
    <>
      <ErrorBoundary error={error}>
        <div className="App">
          {loading ? (
            <Loader />
          ) : (
            <Container>
              <div style={{ fontSize: "40px", fontWeight: "bold" }}>
                Reward Program
              </div>
              <DateComponent
                dateFilter={dateFilter}
                setDateFilter={setDateFilter}
                fetchData={fetchData}
              />

              <AllTransactions totalTransactions={result}></AllTransactions>
              <MonthlyRewardPoints monthlyTransactions={result} />
              <TotalRewardsPoints transactions={result} />
            </Container>
          )}
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
