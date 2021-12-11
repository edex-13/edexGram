import { keyframes, css } from 'styled-components'
const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to{
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeInd = ({ time = '.9s', type = 'ease' } = {}) => (
  css`animation: ${time} ${fadeInKeyframes} ${type};`
)

const shine = keyframes`
  to{
    background-position: right -40px top 0;
  }
`

export const skeleton = ({ time = '1s', type = 'ease' } = {}) => (
  css`
    background-color: #e2e5e7;
    background-image: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.5), rgba(255,255,255,0));
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation:  ${shine} ${time} ${type} infinite;
  `
)
