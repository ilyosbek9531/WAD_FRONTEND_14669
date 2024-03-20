export interface Category extends CategoryCreate {
    id: number;
}

export interface CategoryCreate {
    title: string;
    description: string;
    ageRestriction: number | null;
}