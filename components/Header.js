import React from 'react'
import { connect } from 'react-redux'

const Header = ({pageTitle, extraInfo}) => (
  <header>
    <h1>{pageTitle}</h1>
    <text>{extraInfo}</text>
  </header>
)

const mapStateToProps = ({pageTitle, extraInfo}) => {
  return {
    pageTitle,
    extraInfo
  }
} 

export default connect(mapStateToProps)(Header)