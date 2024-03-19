import { Category } from "./category.interface";

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date | string;
    duration: number;
    categoryId: number | null;
    category: Category | null;
}