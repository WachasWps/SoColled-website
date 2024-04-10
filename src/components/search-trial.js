import React from 'react'

import Script from 'dangerous-html/react'

import './search-trial.css'

const SEARCHTRIAL = (props) => {
  return (
    <div className="search-trial-container">
      <div className="search-trial-container1">
        <div className="search-trial-container2">
          <Script
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skewed Input Animation</title>
  <style>
    *{
      box-sizing: border-box;
    }
    body{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      padding: 0;
      background-color: white;
      font-family: 'Knewave', cursive;
    }
    label{
      width: 100%;
      max-width: 300px;
    }
    input{
      width: 100%;
      display: flex;
      padding: 15px;
      background-color: white;
      border: 2px solid black;
      color: #111;
      font-size: 15px;
      box-shadow: 3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62);
      height: 58px;    
      transform: skew(-3deg, 1deg);
      font-family: 'Knewave', cursive;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    input:focus,
    input:valid {
      outline: none;
    }
    input:focus ~ ul li,
    input:valid ~ ul li {
      @for \$i from 1 through 6 {
        &:nth-child(#{\$i}) {
          &::before {
            filter: blur(20px);
            transform: translate(0, -35px) rotate(-210deg);
          }
          &::after {
            filter: blur(0);
            transform: scale(1) rotate(0);
          }
        }
      }
      @for \$i from 1 through 6 {
        &:nth-child(#{\$i}) {
          &::after {
            transition-delay: 200ms + (\$i * 200ms);
          }
        }
      }
    }
    label {
      position: relative;
    }
    ul {
      position: absolute;
      top: 38px;
      left: -4px;
      margin: 0;
      list-style: none;
      padding-left: 22px;
      position: absolute;
      display: flex;
      pointer-events: none;
      transition: 200ms;
    }
    ul li {
      letter-spacing: 3px;
      text-transform: uppercase;
      color: transparent;
      pointer-events: none;
      transition: 500ms ease-in-out;
    }
    ul li::selection {
      color: transparent;
    }
    ul li::after,
    ul li::before {
      color: black;
      position: absolute;
      transition: 500ms ease-in-out;
    }
    ul li::before {
      top: -20px;
    }
    ul li::after {
      top: -63px;
      transform: scale(0) rotate(210deg);
      filter: blur(20px);
    }
    ul li:nth-child(1)::before {
      content: attr(s) quote(s);
      transition-delay: 0ms;
    }
    ul li:nth-child(2)::before {
      content: attr(e) quote(e);
      transition-delay: 200ms;
    }
    ul li:nth-child(3)::before {
      content: attr(a) quote(a);
      transition-delay: 400ms;
    }
    ul li:nth-child(4)::before {
      content: attr(r) quote(r);
      transition-delay: 600ms;
    }
    ul li:nth-child(5)::before {
      content: attr(c) quote(c);
      transition-delay: 800ms;
    }
    ul li:nth-child(6)::before {
      content: attr(h) quote(h);
      transition-delay: 1000ms;
    }
    ul li::after {
      content: attr(s) quote(s);
      left: 1px;
      color: #666;
    }
    ul li:nth-child(2)::after {
      left: 12px;
    }
    ul li:nth-child(3)::after {
      left: 24px;
    }
    ul li:nth-child(4)::after {
      left: 36px;
    }
    ul li:nth-child(5)::after {
      left: 48px;
    }
    ul li:nth-child(6)::after {
      left: 60px;
    }
  </style>
</head>
<body>
  <label>
    <input type="text" required>
    <ul>
      <li>s</li>
      <li>e</li>
      <li>a</li>
      <li>r</li>
      <li>c</li>
      <li>h</li>
    </ul>
  </label>
</body>
</html>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default SEARCHTRIAL
