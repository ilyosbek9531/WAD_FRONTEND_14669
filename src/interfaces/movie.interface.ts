import { Category } from "./category.interface";

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    duration: number;
    categoryId: number | null;
    category: Category | null;
}