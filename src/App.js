import logo from './logo.svg';
import React,{useEffect} from 'react';
import './App.css';
import { fetchRewardData } from './ApiService/fetchReward';
import useRewardData from './hooks/useRewardData';
import AllTransactions from './components/allTransactions';
import MonthlyRewardPoints from './components/monthyTransactions';
import TotalRewardsPoints from './components/totalRewards';
import Loader from './Utils/loader';
function App() {
  
const {transactions,monthlyRewards,totalConsecutiveRewards,loading,error}=useRewardData();

  return (<>
    {error ? (
      <div className="error-message">
        <strong>Error:</strong> {error}
      </div>
    ) : (
    <div className="App">

      {loading?(
 
   <Loader />


      ):(
      <header className="App-header">
        <AllTransactions transactions={transactions}></AllTransactions>
        <MonthlyRewardPoints transactions={monthlyRewards}/>
        <TotalRewardsPoints transactions={totalConsecutiveRewards}/>
      </header>
    
    
    )}
    </div>)}
    </>
  );
}

export default App;
