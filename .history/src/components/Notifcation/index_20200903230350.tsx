import React from "react";
import { Box, Button, Text } from "grommet";
import { FormClose } from "grommet-icons";
import {dataInterface} from "src/data"
const Notifcation: React.FC<dataInterface> = ({ data, ...rest }) => {
    return (
        <Box
            round
            pad={{ horizontal: "small" }}
            direction="column"
            background="status-critical"
            {...rest}
        >
            <Box direction="row" justify="between" pad={{ vertical: "small" }}>
                <Box direction="column" gap="small" pad={{ vertical: "small" }}>
                    <Text
                        color="white"
                        size="medium"
                        weight="bold"
                        margin={{ horizontal: "small" }}
                    >
                        {data.message}
                    </Text>
                    <Text size="small" color="white" margin={{ horizontal: "small" }}>
                        {data.date}
                    </Text>
                </Box>
                <Box>
                    <Button plain icon={<FormClose color="white" />} onClick={() => { }} />
                </Box>
            </Box>
        </Box>
    )
};
export default Notifcation;