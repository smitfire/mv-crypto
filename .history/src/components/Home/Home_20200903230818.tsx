import {
    Box,
    Button,
    Grommet,
    Text,
    TextInput
} from "grommet";
import { Menu, Search } from "grommet-icons";
import React from "react";
import { hardware, notification, utilization, vms } from "../../data";
import { Hardware } from "../Hardware";
import {Header, Notification} from "src/components";
// import Notification from "../Notifcation";
import { UtilizationCard } from "../UtilizationCard";
import { VirtualMachinesCard } from "../VirtualMachinesCard";

const Home: React.FC = () => {
    return (
        <Grommet full>
            <Box fill background="light-3">
                <Header
                    appName="Fort Collins, Cluster 4"
                    appIcon={<Menu />}
                />
                <Box flex overflow="auto" gap="medium" pad="medium">
                    <Box
                        flex={false}
                        overflow="auto"
                        round="large"
                        background={{ color: "dark-5", opacity: "weak" }}
                        direction="row"
                        align="center"
                        pad={{ horizontal: "medium", vertical: "small" }}
                        margin={{ horizontal: "medium", top: "medium" }}
                    >
                        <Search color="brand" />
                        <TextInput plain placeholder="Search Cluster" type="search" />
                    </Box>
                    <Box flex={false} direction="row-responsive" wrap>
                        <Box gap="large" flex="grow" margin="medium">
                            <Notification data={notification} />
                            <VirtualMachinesCard data={vms} />
                        </Box>
                        <Box gap="large" flex="grow" margin="medium">
                            {utilization.map(data => (
                                <UtilizationCard key={data.name} url="me.com" data={data} />
                            ))}
                        </Box>
                        <Box flex="grow" margin="medium">
                            <Hardware data={hardware} />
                        </Box>
                    </Box>
                </Box>

                <Box
                    flex={false}
                    pad={{ vertical: "xsmall", left: "medium" }}
                    responsive={false}
                    background={{ color: "brand", dark: false }}
                    direction="row"
                    align="center"
                    justify="between"
                >
                    <Text color="light-1">5 Running Tasks</Text>
                    <Button
                        size="medium"
                        label="Show Tasks"
                        icon={<Menu color="white" />}
                        reverse={true}
                    />
                </Box>
            </Box>
        </Grommet>
    );
};
export default Home;