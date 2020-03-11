import React from 'react';
import logo from './src/logo.svg';
import { Code } from '@expo/html-elements';
import { useDimensions } from 'react-native-web-hooks';

import { AspectView } from './src/components';
import {
  Container,
  Header,
  P,
  A,
} from './src/shared/componentsWithStyles';

function App() {
  const { window: { height } } = useDimensions();

  return (
    <Container>
      <Header>
        <AspectView source={logo} dimension={height} />
        <P>
          Edit <Code>src/App.js</Code> and save to reload.
        </P>
        <A
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </A>
      </Header>
    </Container>
  );
}

export default App;
