// REACT IMPORTS

import Hero from "@/components/layout/Hero";
import { RecipeContext } from "@/context/RecipeContext";
import {
    Box,
    Button,
    Card,
    Container,
    Space,
    Stack,
    Text,
    // Image,
    Group,
    createStyles,
    rem,
    SimpleGrid,
    Title,
    Badge,
} from "@mantine/core";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import DefaultImage from "@/images/default_dish_image.png";
import Image from "next/image";
import { IconPlus } from "@tabler/icons-react";
import Recipe from "@/Interfaces/Recipe";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },

    footer: {
        display: "flex",
        justifyContent: "space-between",
        padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    // title: {
    //     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //     lineHeight: 1,
    // },
}));

interface Props {}

const Recipes = (props: Props) => {
    const { classes } = useStyles();

    const { recipes, filteredRecipes, tags, fetchRecipes, applyFilter } = useContext(RecipeContext);
    const [currentTag, setCurrentTag] = useState<string | null>(null);

    const handleClickBadge = (tag: string) => {
        if (currentTag === tag) {
            applyFilter("tags", []);
            setCurrentTag(null);
            return;
        }

        applyFilter("tags", [tag]);
        setCurrentTag(tag);
    };

    return (
        <Container>
            <Hero />
            <Container p={"md"}>
                <Stack spacing={"xl"}>
                    <Group position="apart">
                        <Title order={2} size={"h1"}>
                            Recipes List
                        </Title>
                        <Button component={Link} href="/create" leftIcon={<IconPlus />}>
                            Create New Recipe
                        </Button>
                    </Group>
                    <Group>
                        {tags && tags.length > 0 ? (
                            tags.map((tag, index) => (
                                <Badge
                                    variant={currentTag === tag ? `filled` : `outline`}
                                    key={`tag-${index}`}
                                    sx={(theme) => ({
                                        cursor: "pointer",
                                    })}
                                    onClick={() => {
                                        handleClickBadge(tag);
                                    }}
                                >
                                    {tag}
                                </Badge>
                            ))
                        ) : (
                            <Text>No Tags</Text>
                        )}
                    </Group>
                    <SimpleGrid cols={3} spacing={"lg"}>
                        {filteredRecipes && filteredRecipes.length > 0
                            ? filteredRecipes.map((recipe) => (
                                  <RecipeCard key={recipe.id} recipe={recipe} />
                              ))
                            : null}
                        {recipes && recipes.length > 0 && filteredRecipes?.length === 0
                            ? recipes.map((recipe) => (
                                  <RecipeCard key={recipe.id} recipe={recipe} />
                              ))
                            : null}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Container>
    );
};

export default Recipes;

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
    const { classes } = useStyles();

    return (
        <Card withBorder padding="lg" className={classes.card}>
            <Card.Section>
                <Image
                    src={recipe.image ?? DefaultImage}
                    alt={`image for ${recipe.title}`}
                    height={100}
                    // width={300}
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                />
            </Card.Section>
            <Stack mt={10}>
                <Group>
                    <Text size={20}>{recipe.title}</Text>
                </Group>
                <Group>
                    {recipe.tags.map((tag) => (
                        <Badge key={tag.id}>{tag.name}</Badge>
                    ))}
                </Group>
            </Stack>

            <Card.Section className={classes.footer}>
                <Button component={Link} href={`/recipes/${recipe.id}`}>
                    View Recipe
                </Button>
            </Card.Section>
        </Card>
    );
};
