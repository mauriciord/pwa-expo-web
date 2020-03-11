import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Header as H, P as Paragraph, A as Anchor } from '@expo/html-elements' ;

export const Container = styled.View.attrs(() => ({
    as: Animatable.View
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const Header = styled(H)`
  background-color: #282c34;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const P = styled(Paragraph)`
  color: white;
`;

export const A = styled(Anchor)`
  color: #61dafb;
`;

export const Image = styled(Animatable.Image).attrs(() => ({
    animation: 'rotate',
    iterationCount: 'infinite',
    easing: 'linear',
    duration: 20 * 1000,
    style: { aspectRatio: 1 }
}))`
  width: ${props => props.dimension*0.4}px;
  height: ${props => props.dimension*0.4}px;
`;
