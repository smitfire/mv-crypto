import React from "react";

import { Box } from "grommet";

interface user {
    name: string,
    url?: string,
    [index: string]: any,
}
const Avatar: React.FC<user> = ({ name, url, ...rest }) => (
    <Box
        a11yTitle={`${name} avatar`}
        height="avatar"
        width="avatar"
        round="full"
        background={`url(${url})`}
        {...rest}
    />
);
export default Avatar;