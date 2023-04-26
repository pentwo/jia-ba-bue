// REACT IMPORTS

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS
import {
    Center,
    Group,
    Navbar as MantineNavbar,
    Stack,
    Title,
    Tooltip,
    UnstyledButton,
    createStyles,
    rem,
} from "@mantine/core";
import {
    IconCalendarStats,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconGauge,
    IconHome2,
    IconLogout,
    IconPlus,
    IconSettings,
    IconStack2,
    IconSwitchHorizontal,
    IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    link: {
        width: rem(50),
        height: rem(50),
        borderRadius: theme.radius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor })
                .background,
            color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
        },
    },
}));

interface Props {}

const mockdata = [
    { icon: IconHome2, label: "Home" },
    { icon: IconStack2, label: "Recipes" },
    { icon: IconPlus, label: "Create" },
    { icon: IconUser, label: "Profile" },
    // { icon: IconCalendarStats, label: "Releases" },
    // { icon: IconUser, label: "Account" },
    // { icon: IconFingerprint, label: "Security" },
    // { icon: IconSettings, label: "Settings" },
];

const Navbar = (props: Props) => {
    const [active, setActive] = useState(0);
    const router = useRouter();

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={router.route.includes(`/${link.label.toLowerCase()}`)}
            to={`/${link.label.toLowerCase()}`}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <MantineNavbar height={"100vh"} width={{ base: 80 }} px="md" pt={"md"} pb={40}>
            {/* <Center><MantineLogo type="mark" size={30} /></Center> */}
            <MantineNavbar.Section grow mt="md">
                <Center>
                    <Title order={1}>J</Title>
                </Center>
            </MantineNavbar.Section>
            <MantineNavbar.Section grow>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </MantineNavbar.Section>
            <MantineNavbar.Section>
                <Stack justify="center" spacing={0}>
                    {/* <NavbarLink icon={IconSwitchHorizontal} label="Change account"  /> */}
                    <NavbarLink icon={IconLogout} label="Logout" to={"/logout"} />
                </Stack>
            </MantineNavbar.Section>
        </MantineNavbar>
    );
};

export default Navbar;

interface NavbarLinkProps {
    icon: React.FC<any>;
    label: string;
    to: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, to, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton
                component={Link}
                href={to}
                onClick={onClick}
                className={cx(classes.link, { [classes.active]: active })}
            >
                <Icon size="1.5rem" stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}
