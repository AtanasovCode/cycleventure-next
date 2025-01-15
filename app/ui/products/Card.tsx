import { Product } from "@/app/types/Product";

type CardType = {
    product: Product;
}

export default function Card({ product }: CardType) {
    return (
        <div
            key={product.id}
            className="flex flex-col items-start justify-center"
        >
            <img
                src={product.photos[0]}
                alt={`Photo of bike: ${product.name}, bike brand: ${product.brand}`}
            />
            <h1 className="font-bold text-xl text-center">{product.name}</h1>
            <div className="text-sm">
                ${product.price}
            </div>
        </div>
    );
}