import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Reward1 from '../components/reward1';
import Reward2 from '../components/reward2';
import Reward3 from '../components/reward3';
import Reward4 from '../components/reward4';
import Reward5 from '../components/reward5';
import Footer from '../components/footer';
import './rewards.css';


const Rewards = () => {
  const [totalRewards, setTotalRewards] = useState(0);
  const [claimedRewards, setClaimedRewards] = useState({
    reward1: false,
    reward2: false,
    reward3: false,
    reward4: false,
    reward5: false,
  });


  const claimReward = (points, rewardName) => {
    if (!claimedRewards[rewardName]) {
      setTotalRewards(totalRewards + points);
      setClaimedRewards({ ...claimedRewards, [rewardName]: true });
    }
  };


  return (
    <div className="rewards-container">
      <Helmet>
        <title>Rewards - SoCollEd</title>
        <meta property="og:title" content="Rewards - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name17" />
      <h1 className="rewards-text">CLAIMABLE REWARDS</h1>
      <h1 className="rewards-text01">TOTAL REWARDS: {totalRewards}</h1>
      <div className="rewards-hero">
        <Reward1 rootClassName="reward1-root-class-name1" />
        <Reward2 rootClassName="reward2-root-class-name" />
        <Reward3 rootClassName="reward3-root-class-name" />
        <Reward4 rootClassName="reward4-root-class-name" />
        <Reward5 rootClassName="reward5-root-class-name" />
        {/* Add more reward components as needed */}
      </div>
      <div className="rewards-container02">
        <div className="rewards-container03">
          {/* Reward 1 */}
          <div className="rewards-container04">
            <svg viewBox="0 0 1024 1024" className="rewards-icon">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text10">Filled Faculty Feedback on time</span>
            <span className="rewards-text11">50 Points</span>
            <button type="button" className={`rewards-button2 button ${claimedRewards.reward1 ? 'claimed' : ''}`} onClick={() => claimReward(50, 'reward1')}>{claimedRewards.reward1 ? 'CLAIMED' : 'CLAIM'}</button>
          </div>
          {/* Reward 2 */}
          <div className="rewards-container05">
            <svg viewBox="0 0 1024 1024" className="rewards-icon02">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text12">Filled Exam Fees on Time</span>
            <span className="rewards-text13">100 Points</span>
            <button type="button" className={`rewards-button3 button ${claimedRewards.reward2 ? 'claimed' : ''}`} onClick={() => claimReward(100, 'reward2')}>{claimedRewards.reward2 ? 'CLAIMED' : 'CLAIM'}</button>
          </div>
          {/* Reward 3 */}
          <div className="rewards-container06">
            <svg viewBox="0 0 1024 1024" className="rewards-icon04">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text14">Completed Your Assignments on Time</span>
            <span className="rewards-text15">75 Points</span>
            <button type="button" className={`rewards-button4 button ${claimedRewards.reward3 ? 'claimed' : ''}`} onClick={() => claimReward(75, 'reward3')}>{claimedRewards.reward3 ? 'CLAIMED' : 'CLAIM'}</button>
          </div>
          {/* Reward 4 */}
          <div className="rewards-container07">
            <svg viewBox="0 0 1024 1024" className="rewards-icon06">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text16">Completed Your Project on Time</span>
            <span className="rewards-text17">75 Points</span>
            <button type="button" className={`rewards-button5 button ${claimedRewards.reward4 ? 'claimed' : ''}`} onClick={() => claimReward(75, 'reward4')}>{claimedRewards.reward4 ? 'CLAIMED' : 'CLAIM'}</button>
          </div>
          {/* Reward 5 */}
          <div className="rewards-container08">
            <svg viewBox="0 0 1024 1024" className="rewards-icon08">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text18">Filled The Fees on Time</span>
            <span className="rewards-text19">100 Points</span>
            <button type="button" className={`rewards-button6 button ${claimedRewards.reward5 ? 'claimed' : ''}`} onClick={() => claimReward(100, 'reward5')}>{claimedRewards.reward5 ? 'CLAIMED' : 'CLAIM'}</button>
          </div>
          <div className="rewards-container09">
            <svg viewBox="0 0 1024 1024" className="rewards-icon">
            <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text10">Filled the feedback form of Month March</span>
            <span className="rewards-text11">50 Points</span>
            <button type="button" className={`rewards-button2 button ${claimedRewards.reward6 ? 'claimed' : ''}`} onClick={() => claimReward(50, 'reward6')}>{claimedRewards.reward6 ? 'CLAIMED' : 'CLAIM'}</button>
          </div>
          {/* Add more reward containers and buttons as needed */}
        </div>
      </div>
 
 
export default Rewards;




      <div className="rewards-container10">
        <Reward1 rootClassName="reward1-root-class-name2"></Reward1>
        <div className="rewards-container11">
          <Reward2 rootClassName="reward2-root-class-name"></Reward2>
          <Reward3 rootClassName="reward3-root-class-name"></Reward3>
        </div>
      </div>
      <div className="rewards-container12">
        <Reward4 rootClassName="reward4-root-class-name"></Reward4>
        <Reward5 rootClassName="reward5-root-class-name"></Reward5>
      </div>
      <Footer rootClassName="footer-root-class-name18"></Footer>
    </div>
  )
}


export default Rewards
