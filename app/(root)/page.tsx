'use client';
import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  const loggedIn = { firstName: "Gabi", lastName:"window", email:"g@gmail.com"};
  const transactions = []; 
  const banks = [];        

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={222.222}
        />

        <p>Recent transactions</p>
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={transactions}
        banks={[{}, {}]}
      />
    </section> 
  );
};

export default Home;

