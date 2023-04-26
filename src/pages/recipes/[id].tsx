// REACT IMPORTS

import Hero from "@/components/layout/Hero";
import { Container } from "@mantine/core";
import { useRouter } from "next/router";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {}

const Recipe = (props: Props) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Container>
            <Hero />
        </Container>
    );
};

export default Recipe;
