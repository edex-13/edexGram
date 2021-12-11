import styled from 'styled-components'

import { fadeInd } from '../../styles/animation'
export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
`

export const Img = styled.img`
  ${fadeInd()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
