// REACT IMPORTS

import { Container, Group, Stack, Title, Text, BackgroundImage, Box } from "@mantine/core";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS
import HeroImg from "@/images/hero.png";
import Image from "next/image";

interface Props {
    title?: string;
}

const Hero = ({ title }: Props) => {
    const heroHeight = 150;

    return (
        <Container>
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
