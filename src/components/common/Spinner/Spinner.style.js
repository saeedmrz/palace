import styled, { keyframes } from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: radial-gradient(
    hsla(189, 62%, 55%, 0.733),
    hsla(189, 62%, 55%, 0.999)
  );
`;

const firstAnim = keyframes`

15% {
    transform: translate(50%,-50%) scale(1.5);
}
30% {
    transform: translate(50%,50%) scale(1.5);
}
45% {
    transform: translate(-50%,50%) scale(1.5) rotate(180deg);
}
60% {
    transform: translate(-50%,-50%) scale(1.5) rotate(180deg);
}
75% {
    transform: translate(-25%,-25%) scale(1) rotate(180deg);
}
90% {
    transform: translate(25%,-25%) scale(1) rotate(360deg);
}
100% {
    transform: translate(0,0) scale(1) rotate(360deg);
}

`;

const secondAnim = keyframes`
15% {
    transform: translate(-50%,50%) scale(1.5);
}
30% {
    transform: translate(-50%,-50%) scale(1.5);
}
45% {
    transform: translate(50%,-50%) scale(1.5) rotate(180deg);
}
60% {
    transform: translate(50%,50%) scale(1.5) rotate(180deg);
}
75% {
    transform: translate(25%,25%) scale(1) rotate(180deg);
}
90% {
    transform: translate(-25%,25%) scale(1) rotate(360deg);
}
100% {
    transform: translate(0,0) scale(1) rotate(360deg);
}
`;

export const SpinnerDiv1 = styled(Box)`
  animation: ${firstAnim} 2.5s infinite;
`;

export const SpinnerDiv2 = styled(Box)`
  animation: ${secondAnim} 2.5s infinite;
`;
