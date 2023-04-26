export default interface Recipe {
    id: number;
    title: string;
    description: string;
    time_minutes: number;
    price: string;
    link: string;
    tags: Tag[];
    ingredients: Ingredient[];
    instructions: string[];
    image: string;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Ingredient {
    id: number;
    name: string;
}
