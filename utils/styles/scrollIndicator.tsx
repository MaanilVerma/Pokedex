import styled from "styled-components";

export const ScrollDownContainer = styled.div`
  position: fixed;
  bottom: 8%;
  left: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  @media (max-width: 31.25rem) {
    bottom: 4%;
    left: 40%;
  }
`;

export const Chevron = styled.div`
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  &:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
`;

export const ScrollDownText = styled.span`
  display: block;
  margin-top: 10px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
`;
