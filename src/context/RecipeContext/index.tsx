import { createContext, useEffect, useState } from "react";
import Recipe, { Tag } from "@/Interfaces/Recipe";
import GetRecipes from "@/network/api/recipe/GetRecipes";
import GetRecipe from "@/network/api/recipe/GetRecipe";
import { useRouter } from "next/router";

interface RecipeProviderInterface {
    children: React.ReactNode;
}

interface RecipeContextInterface {
    recipes: Recipe[] | null;
    filteredRecipes: Recipe[] | null;
    tags: string[];
    fetchRecipes: () => Promise<void>;
    fetchRecipe: (id: number) => Promise<Recipe | null>;
    applyFilter: (type: "tags" | "ingredients", keywords: string[]) => void;
}

export const RecipeContext = createContext<RecipeContextInterface>({
    recipes: null,
    filteredRecipes: null,
    tags: [],
    fetchRecipes: async () => {},
    fetchRecipe: async (id: number) => null,
    applyFilter: (type: "tags" | "ingredients", keywords: string[]) => {},
});

export const RecipeContextProvider = ({ children }: RecipeProviderInterface) => {
    const [token, setToken] = useState<string>("");

    const [recipes, setRecipe] = useState<Recipe[] | null>(null);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[] | null>(null);

    const [tags, setTags] = useState<string[]>([]);

    const route = useRouter();

    function getAllTags(tags: Tag[]): string[] {
        let allTags: Set<string> = new Set();
        tags.forEach((tag) => {
            allTags.add(tag.name);
        });
        return Array.from(allTags);
    }

    async function fetchRecipes() {
        const req = new GetRecipes();
        const res = await req.fetch();

        if (res.success) {
            const resRecipes = res.data as unknown as Recipe[];
            setRecipe(resRecipes);

            const allTags = getAllTags(resRecipes.flatMap((recipe) => recipe.tags));
            setTags(allTags);
        }
    }

    async function fetchRecipe(id: number) {
        const req = new GetRecipe(id);
        const res = await req.fetch();
        console.log("Recipe res: ", res);

        if (res.success) {
            // const resRecipes = res.data as unknown as Recipe[];
            // setRecipe(resRecipes);
            return res.data as unknown as Recipe;
        } else {
            return null;
        }
    }

    function applyFilter(type: "tags" | "ingredients", keywords: string[]): void {
        if (!recipes) return;

        let appliedFilteredRecipes: Recipe[] = [];
        recipes.forEach((recipe) => {
            let hasAllTags = true;

            keywords.forEach((kw) => {
                if (!recipe[type].find((target) => target.name === kw)) {
                    hasAllTags = false;
                }
            });
            if (hasAllTags) {
                appliedFilteredRecipes.push(recipe);
            }
        });
        setFilteredRecipes(appliedFilteredRecipes);
    }

    useEffect(() => {
        let token = localStorage.getItem("token");
        console.log("token: ", token);
        if (token) {
            fetchRecipes();
        }
    }, []);

    useEffect(() => {
        // if (route.pathname === "/recipes") {
        setFilteredRecipes([]);
        // }
    }, [route.pathname]);

    return (
        <RecipeContext.Provider
            value={{
                recipes: recipes,
                filteredRecipes: filteredRecipes,
                tags: tags,
                fetchRecipes: fetchRecipes,
                fetchRecipe: fetchRecipe,
                applyFilter: applyFilter,
            }}
        >
            {children}
        </RecipeContext.Provider>
    );
};
