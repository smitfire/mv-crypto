import React from "react";

import { Box } from "grommet";

interface user {
    name: string,
    thumbnail: string,
}
export const Avatar<user> = ({ name, url, ...rest }) => (
    <Box
        a11yTitle={`${name} avatar`}
        height="avatar"
        width="avatar"
        round="full"
        background={`url(${url})`}
        {...rest}
    />
);
