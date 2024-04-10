import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Reward1 from '../components/reward1'
import Reward2 from '../components/reward2'
import Reward3 from '../components/reward3'
import Reward4 from '../components/reward4'
import Reward5 from '../components/reward5'
import Footer from '../components/footer'
import './rewards.css'

const Rewards = (props) => {
  return (
    <div className="rewards-container">
      <Helmet>
        <title>Rewards - SoCollEd</title>
        <meta property="og:title" content="Rewards - SoCollEd" />
      </Helmet>
      <Header rootClassName="header-root-class-name17"></Header>
      <h1 className="rewards-text">CLAIMABLE REWARDS</h1>
      <h1 className="rewards-text01">  TOTAL REWARDS  : XX    </h1>
      <div className="rewards-hero">
        <Reward1 rootClassName="reward1-root-class-name1"></Reward1>
        <Reward1 rootClassName="reward1-root-class-name"></Reward1>
        <div className="rewards-container01">
          <h1 className="rewards-text02">Magnificent things are very simple</h1>
          <span className="rewards-text03">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="rewards-btn-group">
            <button className="rewards-button button">Get Started</button>
            <button className="rewards-button1 button">Learn More</button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1500"
          className="rewards-image"
        />
      </div>
      <div className="rewards-container02">
        <div className="rewards-container03">
          <div className="rewards-container04">
            <svg viewBox="0 0 1024 1024" className="rewards-icon">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text10">
              Filled Faculty Feedback on time
            </span>
            <span className="rewards-text11">50 Points</span>
            <button type="button" className="rewards-button2 button">
              GO
            </button>
          </div>
          <div className="rewards-container05">
            <svg viewBox="0 0 1024 1024" className="rewards-icon02">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text12">Filled Exam Fees on Time</span>
            <span className="rewards-text13">100 Points</span>
            <button type="button" className="rewards-button3 button">
              GO
            </button>
          </div>
          <div className="rewards-container06">
            <svg viewBox="0 0 1024 1024" className="rewards-icon04">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text14">
              Completed Your Assignments on TIme
            </span>
            <span className="rewards-text15">75 Points</span>
            <button type="button" className="rewards-button4 button">
              CLAIM
            </button>
          </div>
          <div className="rewards-container07">
            <svg viewBox="0 0 1024 1024" className="rewards-icon06">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text16">
              Completed Your Project on TIme
            </span>
            <span className="rewards-text17">75 Points</span>
            <button type="button" className="rewards-button5 button">
              CLAIM
            </button>
          </div>
          <div className="rewards-container08">
            <svg viewBox="0 0 1024 1024" className="rewards-icon08">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text18">Filled The Fees on TIme</span>
            <span className="rewards-text19">100 Points</span>
            <button type="button" className="rewards-button6 button">
              GO
            </button>
          </div>
          <div className="rewards-container09">
            <svg viewBox="0 0 1024 1024" className="rewards-icon10">
              <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
            </svg>
            <span className="rewards-text20">50 Points</span>
            <span className="rewards-text21">
              Filled the feedback form of Month March
            </span>
            <button type="button" className="rewards-button7 button">
              GO
            </button>
          </div>
          <h1 className="rewards-text22">Tasks Rewards</h1>
          <svg viewBox="0 0 1024 1024" className="rewards-icon12">
            <path d="M640 298h86v86h-86v-86zM298 298h86v86h-86v-86zM470 298h84v86h-84v-86zM810 810v-596h-596v596h596zM128 128h768v768h-768v-768z"></path>
          </svg>
        </div>
      </div>
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
