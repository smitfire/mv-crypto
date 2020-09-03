import Footer from '@src/components/Footer';
import Home from '@src/components/Home';
import Routes from '@src/components/Routes';
import {
    Grommet
} from "grommet";
import React from 'react';

const App: React.FC = () => (
    <>
        <Grommet full>
            <Home />
            <Routes />
            <Footer />
        </Grommet>
    </>
);

export default App;
