export type Product = {
    id: string;
    brand: string;
    category: string;
    name: string;
    description: string;
    photos: string[];
    price: number;
    isOnSale: boolean;
    salePercent: number;
    final_price: number;
    sizes: string[];
    rating: number;
    numberOfReviews: number;
    frameType: string;
};