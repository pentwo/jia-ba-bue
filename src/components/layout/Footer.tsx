// REACT IMPORTS

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS
import { Group, Footer as MantineFooter, Text } from "@mantine/core";

interface Props {}

const Footer = (props: Props) => {
    return (
        <MantineFooter height={30}>
            <Group position="center">
                <Text size={14}>© 2023 Jia-Ba-Bue</Text>
            </Group>
        </MantineFooter>
    );
};

export default Footer;
