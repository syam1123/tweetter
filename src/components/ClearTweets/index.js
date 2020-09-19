import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'

import { colors } from '../../styles'

const ClearTweets = ({ clearAll }) => {
  return (
    <ClearContainer>
      <Content>
        <h1>Clear Tweets</h1>
        <p>This will clear the following:</p>
        <ul>
          <li>All tweets</li>
          <li>Liked tweets</li>
        </ul>
        <ClearButton id="clearButton" onClick={clearAll} tabIndex="0">
          <DeleteIcon />
          Clear All!
        </ClearButton>
      </Content>
    </ClearContainer>
  )
}

ClearTweets.propTypes = {
  clearAll: PropTypes.func.isRequired,
}

export default ClearTweets

const ClearContainer = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  color: #444;
  min-width: 300px;

  h1 {
    font-size: 2rem;
    margin: 1rem 0rem;
  }

  ul,
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #555;
  }
`

const ClearButton = styled.button`
  border: none;
  color: ${colors.white};
  background: ${colors.base};
  padding: 0.75rem 2rem;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  min-width: 100%;
  margin-top: 2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: ${colors.boxShadow};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${colors.white};
    margin-right: 0.5rem;
  }
`
