import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';
import { Menu } from "grommet-icons";

const userSession = {
    user: {
        name: "Shimi Shimi",
        thumbnail: "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
    },
    items: [
        {
            label: "Logout",
            href: "#"
        }
    ]
};

describe('Header', () => {
    it('renders', () => {
        const { getByText } = render(<Header appName="Fort Collins, Cluster 4" appIcon={<Menu />} />);

        expect(getByText('Oh, hello...')).toBeInTheDocument();
    });
});
