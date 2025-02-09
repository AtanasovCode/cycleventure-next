export type ProductType = {
    created_at: string;
    id: string;
    brand: string;
    name: string;
    description: string;
    price: number;
    isOnSale: boolean;
    salePercent: number;
    rating: number;
    numberOfReviews: number;
    frameType: string;
    photos: string[];
    sizes: string[];
}