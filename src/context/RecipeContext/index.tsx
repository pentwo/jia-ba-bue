import { createContext, useEffect, useState } from "react";
import Recipe from "@/Interfaces/Recipe";
import GetRecipes from "@/network/api/recipe/GetRecipes";

interface RecipeProviderInterface {
    children: React.ReactNode;
}

interface RecipeContextInterface {
    recipes: Recipe[] | null;
    fetchRecipes: () => Promise<void>;
}

export const RecipeContext = createContext<RecipeContextInterface>({
    recipes: null,
    fetchRecipes: async () => {},
});

export const RecipeContextProvider = ({ children }: RecipeProviderInterface) => {
    const [recipes, setRecipe] = useState<Recipe[] | null>(null);
    const [token, setToken] = useState<string>("");

    async function fetchRecipes() {
        const req = new GetRecipes();
        const res = await req.fetch();
        console.log("Recipe res: ", res);

        if (res.success) {
            const resRecipes = res.data as unknown as Recipe[];
            setRecipe(resRecipes);
        }
    }

    useEffect(() => {
        let token = localStorage.getItem("token");
        console.log("token: ", token);
        if (token) {
            fetchRecipes();
        }
    }, []);

    return (
        <RecipeContext.Provider
            value={{
                recipes: recipes,
                fetchRecipes: fetchRecipes,
            }}
        >
            {children}
        </RecipeContext.Provider>
    );
};
