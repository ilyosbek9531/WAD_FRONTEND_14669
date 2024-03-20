import { Category } from "./category.interface";

export interface Movie extends MovieCreate {
    id: number;
    category: Category | null;
}


export interface MovieCreate {
    title: string;
    description: string;
    releaseDate: Date | string;
    duration: number | null;
    categoryId: number | null;
}