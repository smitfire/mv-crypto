import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import Routes from '@src/components/Routes';
import {
    Grommet
} from "grommet";
import React from 'react';

const App: React.FC = () => (
    <>
        <Grommet full>
            <Header />
            <Routes />
            <Footer />
        </Grommet>
    </>
);

export default App;
