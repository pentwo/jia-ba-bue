// REACT IMPORTS

import {
    Container,
    Group,
    Stack,
    Title,
    Text,
    BackgroundImage,
    Box,
    Affix,
    Button,
    Transition,
    rem,
    Avatar,
} from "@mantine/core";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS
import HeroImg from "@/images/hero.png";
import Image from "next/image";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

interface Props {
    title?: string;
}

const Hero = ({ title }: Props) => {
    const [scroll, scrollTo] = useWindowScroll();
    const { user } = useContext(AuthContext);
    const route = useRouter();

    const heroHeight = 150;

    return (
        <Container>
            <Affix position={{ top: rem(20), right: rem(20) }}>
                <Avatar
                    sx={(theme) => ({
                        cursor: "pointer",
                    })}
                    size={36}
                    radius="xl"
                    variant="filled"
                    onClick={() => {
                        route.push("/profile");
                    }}
                >
                    {user?.name[0]}
                </Avatar>
            </Affix>
            <Group position="center" h={heroHeight}>
                <Stack>
                    <Box
                        sx={(theme) => ({
                            ...theme.fn.cover(),
                            zIndex: -10,
                            height: `${heroHeight}px`,
                        })}
                    >
                        <Image
                            src={HeroImg}
                            alt="Picture of the author"
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                                // filter: "blur(1px)",
                                opacity: 0.2,
                            }}
                        />
                    </Box>
                    <Title order={2} size={"h1"}>
                        {title ? title : "Jia-Ba-Bue"}
                    </Title>
                </Stack>
            </Group>
        </Container>
    );
};

export default Hero;
