import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { colors } from '../../styles'

const RecentFeedsToggle = ({ isVisible, loadReacentTweets }) => {
  if (!isVisible) {
    return ''
  }
  return (
    <RefreshToggle>
      <Toggle
        id="feedLoader"
        isVisible={isVisible}
        tabIndex="0"
        onClick={loadReacentTweets}
      >
        <ArrowUpwardIcon style={{ fill: colors.white }} /> Load Newer
      </Toggle>
    </RefreshToggle>
  )
}

RecentFeedsToggle.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  loadReacentTweets: PropTypes.func.isRequired,
}

export default RecentFeedsToggle

const RefreshToggle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
`

const Toggle = styled.button`
  position: fixed;
  background: #132c40;
  color: white;
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  box-shadow: 0px 1px 4px 1px #cccdce;
  cursor: pointer;
  z-index: 15;
  display: flex;
  align-items: center;

  > svg {
    height: 1.2rem;
    margin-right: 0.35rem;
  }

  ${(props) =>
    props.isVisible &&
    css`
      animation: slide-down linear 0.2s;
    `}

  @keyframes slide-down {
    0% {
      top: -40px;
    }
    100% {
      top: 40px;
    }
  }
`
