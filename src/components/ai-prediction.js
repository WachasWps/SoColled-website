import React from 'react'

import PropTypes from 'prop-types'

import './ai-prediction.css'

const AiPrediction = (props) => {
  return (
    <div className={`ai-prediction-container ${props.rootClassName} `}>
      <div className="ai-prediction-container1">
        <div className="ai-prediction-container2">
          <div className="ai-prediction-container3">
            <span className="ai-prediction-text">{props.text}</span>
          </div>
          <span className="ai-prediction-text01">{props.text11}</span>
        </div>
        <span className="ai-prediction-text02">{props.text1}</span>
        <div className="ai-prediction-container4">
          <svg
            viewBox="0 0 513.1702857142857 1024"
            className="ai-prediction-icon"
          >
            <path
              d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"
              className=""
            ></path>
          </svg>
          <span className="ai-prediction-text03">{props.text3}</span>
        </div>
        <div className="ai-prediction-container5"></div>
        <span className="ai-prediction-text04">{props.text4}</span>
        <div className="ai-prediction-feature-card">
          <div className="ai-prediction-container6">
            <div className="ai-prediction-container7">
              <span className="ai-prediction-food">{props.text7}</span>
              <span className="ai-prediction-text05">{props.text8}</span>
              <span className="ai-prediction-text06">{props.text9}</span>
              <span className="ai-prediction-text07">{props.text10}</span>
              <span className="ai-prediction-text08">{props.text102}</span>
              <span className="ai-prediction-text09">{props.text101}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AiPrediction.defaultProps = {
  text: 'Budget Predictor',
  text7: 'Food - 6500',
  text101: 'Miscellanous- 1500',
  text102: 'Stationary - 1200',
  text6: '_________________________',
  text8: 'Subscriptions - 1200',
  text3: '20,000',
  text10: 'Travel- 8000',
  text1: 'Next Month Prediction -',
  text9: 'Entertainment- 1600',
  text4: 'Categories:',
  text11: 'AI',
  rootClassName: '',
}

AiPrediction.propTypes = {
  text: PropTypes.string,
  text7: PropTypes.string,
  text101: PropTypes.string,
  text102: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  text3: PropTypes.string,
  text10: PropTypes.string,
  text1: PropTypes.string,
  text9: PropTypes.string,
  text4: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AiPrediction
