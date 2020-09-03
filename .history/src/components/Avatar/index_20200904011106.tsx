import React from "react";

import { Box } from "grommet";

interface props {
    name: string,
    thumbnail: string,
}
export const Avatar<props> = ({ name, url, ...rest }) => (
    <Box
        a11yTitle={`${name} avatar`}
        height="avatar"
        width="avatar"
        round="full"
        background={`url(${url})`}
        {...rest}
    />
);
