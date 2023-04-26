import { Button, Container, Stack, Text } from "@mantine/core";
import Hero from "@/components/layout/Hero";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { RecipeContext } from "@/context/RecipeContext";

export default function Home() {
    const { user } = useContext(AuthContext);
    const { recipes, fetchRecipes } = useContext(RecipeContext);

    return (
        <>
            <Container>
                <Stack>
                    <Hero />
                    <Text>{JSON.stringify(user)}</Text>
                    <Text>{JSON.stringify(recipes)}</Text>
                </Stack>
            </Container>
        </>
    );
}
