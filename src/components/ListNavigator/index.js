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
            >
              <button tabIndex="0" aria-label={tabs[tab].name}>
                {tabs[tab].icon}
                <span>{tabs[tab].name}</span>
              </button>
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
  box-shadow: ${colors.boxShadow};

  @media ${breakPoints.tablet} {
    width: 100vw;
    bottom: 0;
    top: auto;
    right: 0;
    height: 50px;
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
    max-width: 400px;
    margin: auto;
  }
`

const Tab = styled.li`
  outline: none;

  button {
    cursor: pointer;
    padding: 0.5em 0em;
    font-size: 1.5rem;
    color: ${(props) => (props.isActive ? colors.white : colors.baseLight)};
    transition: all ease-in 0.25s;
    outline: none;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    outline: none;

    &:focus {
      outline: none;
      svg {
        fill: ${colors.white};
      }
    }
  }

  svg {
    margin-right: 0.5rem;
  }

  @media ${breakPoints.tablet} {
    span {
      display: none;
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`
