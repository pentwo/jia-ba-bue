// REACT IMPORTS

import Hero from "@/components/layout/Hero";
import { RecipeContext } from "@/context/RecipeContext";
import { Badge, Container, Group, List, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Recipe from "@/Interfaces/Recipe";
import Image from "next/image";
// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS
import DefaultImg from "@/images/default_dish_image.png";

interface Props {}

const Recipe = (props: Props) => {
    const { recipes, fetchRecipe } = useContext(RecipeContext);

    const [recipe, setRecipe] = useState<Recipe | null>(null);

    const router = useRouter();
    const { id } = router.query;

    async function getRecipe() {
        if (!id) return;

        const res = await fetchRecipe(parseInt(id as string));
        setRecipe(res);
    }

    useEffect(() => {
        if (recipes && recipes.length > 0) {
            getRecipe();
        }
    }, [recipes]);

    return (
        <Container>
            <Hero title={`${recipe?.title ? `Recipe - ${recipe?.title}` : "Jia-Ba-Bue"}`} />
            <Container p={"md"}>
                <Stack>
                    {recipe ? (
                        <>
                            <Group>
                                <Image
                                    src={recipe?.image || DefaultImg}
                                    alt={recipe?.title}
                                    height={500}
                                    style={{
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Group>
                            <Title order={2} size={"h1"}>
                                {recipe?.title}
                            </Title>
                            <Group spacing={"xl"}>
                                <Group spacing={0}>
                                    <Text>Price:</Text>
                                    <Badge>AUD: ${recipe?.price}</Badge>
                                </Group>
                                <Group spacing={0}>
                                    <Text>Cooking time:</Text>
                                    <Badge>{recipe?.time_minutes}mins</Badge>
                                </Group>
                            </Group>
                            <Title order={3}>Tags</Title>
                            <Group>
                                {recipe?.tags ? (
                                    recipe.tags.map((tag) => {
                                        return <Badge key={tag.id}>{tag.name}</Badge>;
                                    })
                                ) : (
                                    <Text>No tag assigned</Text>
                                )}
                            </Group>
                            <Title order={3}>Description</Title>
                            <Text>{recipe?.description}</Text>
                            <Title order={3}>Ingredients</Title>
                            <List>
                                {recipe?.ingredients?.map((ing) => {
                                    return <List.Item key={ing.id}>{ing.name}</List.Item>;
                                })}
                            </List>
                            <Title order={3}>Instructions</Title>
                            <Text>
                                {recipe?.instructions?.map((ins, index) => {
                                    return <Text key={`Step-${index}`}>{ins}</Text>;
                                })}
                            </Text>
                        </>
                    ) : null}

                    <Text>{JSON.stringify(recipe)}</Text>
                </Stack>
            </Container>
        </Container>
    );
};

export default Recipe;
