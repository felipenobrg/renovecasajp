import { styled } from "styled-components";

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${(props => props.theme["white"])};
  width: 100vw;
  height: 100vh;

 div {
  width: 18px;
  height: 18px;
  background: ${(props => props.theme["purple-400"])};

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

 .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

 .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
`