import React from 'react'
import HeaderBox from '../components/ui/HeaderBox'
import TotalBalanceBox from '../components/ui/TotalBalanceBox'

const Home = () => {
    const loggedIn ={ firstName: 'Gabi'}
  return (
    <section className='home'>
    <div className='home-content'>
        <header>
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
            />
        </header>
        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={222.222}
        />
    </div>
    </section>
  )
}

export default Home