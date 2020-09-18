import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { breakPoints, colors } from '../../styles'
import { tabs } from '../../helpers'

const Listnavigator = ({ activeTab, toggleTab }) => {
  return (
    <SideBar>
      <List>
        {Object.keys(tabs).map((tab) => {
          return (
            <Tab
              key={tab}
              isActive={tab === activeTab}
              onClick={() => toggleTab(tab)}
              tabIndex="0"
            >
              {tabs[tab]}
            </Tab>
          )
        })}
      </List>
    </SideBar>
  )
}

Listnavigator.propTypes = {
  activeTab: PropTypes.string.isRequired,
  toggleTab: PropTypes.func.isRequired,
}

export default Listnavigator

const SideBar = styled.aside`
  width: 250px;
  background-color: ${colors.base};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 6rem;

  @media ${breakPoints.tablet} {
    width: 100vw;
    bottom: 0;
    top: auto;
    right: 0;
    height: 60px;
    padding-top: 0px;
  }
`

const List = styled.ul`
  list-style: none;
  padding-left: 1em;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    margin: 0;
    align-items: center;
    height: 100%;
  }
`

const Tab = styled.li`
  cursor: pointer;
  padding: 0.25em 0em;
  font-size: 1.5rem;
  color: ${(props) => (props.isActive ? colors.white : colors.blue)};
  outline: none;
`
