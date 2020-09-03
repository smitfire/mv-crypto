import React from 'react';
import Routes from '@src/components/Routes';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';
import {
    Box,
    Button,
    Grommet,
    Text,
    TextInput,
    ResponsiveContext
} from "grommet";
const App: React.FC = () => (
  <>
        <Grommet theme={theme} full>
    <Header />
    <Routes />
    <Footer />
    </Grommet>
  </>
);

export default App;
