import React from "react";

import { Box } from "grommet";

interface user {
    name: string,
    thumbnail: string,
}
interface props {
    user: user,
    items: item[],
    [index: string]: any;
}
export const Avatar = ({ name, url, ...rest }) => (
    <Box
        a11yTitle={`${name} avatar`}
        height="avatar"
        width="avatar"
        round="full"
        background={`url(${url})`}
        {...rest}
    />
);
