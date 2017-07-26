import styled, { injectGlobal, css, keyframes } from 'styled-components';

injectGlobal`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #24242F;
    * {
      box-sizing: border-box;
    }
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 54px;
  height: 32px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.state ? '#F68623':'#8AD71D'};
  display: flex;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: capitalize;
  background-color: ${props => props.state ? '#F68623':'#8AD71D'};
  transition: background-color 150ms linear;
  user-select: none;
`
export const Switch = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #24242F;
  color: ${props => props.state ? '#F68623':'#8AD71D'};
  text-transform: uppercase;
  transform:
    ${props => props.pulse ? 'scale(1.2)' : 'scale(1)'}
    ${props => props.state ? 'rotate(0)' : 'rotate(360deg)'};

  ${props => props.state ?
    css`
      left: 22px;
    `
    : css`
      left: 0;
    `
  }

  transition: transform 250ms ease-out, left 350ms cubic-bezier(0, 0, 0.93, 3.86);
`
