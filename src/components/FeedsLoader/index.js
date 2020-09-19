import React from 'react'

import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const FeedsLoader = () => {
  return (
    <FeedContainer>
      <ContentLoader />
      <ContentLoader />
    </FeedContainer>
  )
}

export default FeedsLoader

const FeedContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: auto;
`
