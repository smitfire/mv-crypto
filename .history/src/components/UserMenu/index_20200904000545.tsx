import React from "react";

import { Menu, Text } from "grommet";

import { Avatar } from "../Avatar";
type itemprops = {
    label: string,
    href: string,
}
type itemGroup = {
    label: string,
    href: string,
}
interface props {
    user: {
        alignSelf: string,
        name: string,
        thumbnail: string,
    },
    items: []],
}
const UserMenu: React.FC<props> = ({ user = {}, items = [], ...rest }) => (
    <Menu
        dropAlign={{ top: "bottom", right: "right" }}
        icon={false}
        items={items.map(item => ({
            ...item,
            label: <Text size="small">{item.label}</Text>,
            onClick: () => { } // no-op
        }))}
        label={<Avatar name={user.name} url={user.thumbnail} />}
        {...rest}
    />
);
export default UserMenu;