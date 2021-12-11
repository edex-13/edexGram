import styled, { css } from 'styled-components'

import { fadeInd } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 25px;
  margin-top: -15px;
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 450px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 0px;
    transform: scale(0.7);
    z-index: 1;
    ${fadeInd({ time: '.3s', type: 'ease' })}
  `}
  &::-webkit-scrollbar {
    display: none;
  }
`
export const Item = styled.li`
  padding: 0 8px;
`
