import { Product } from "@/app/types/Product";
import Image from "next/image";

type CardType = {
    product: Product;
}

export default function Card({ product }: CardType) {
    return (
        <div
            key={product.id}
            className="flex flex-col items-start justify-center cursor-pointer"
        >
            <Image
                src={product.photos[0]}
                alt={`Photo of bike: ${product.name}, bike brand: ${product.brand}`}
                width={1920}
                height={1440}
            />
            <h1 className="font-bold text-xl text-center">{product.name}</h1>
            <div className="text-sm">
                ${product.price}
            </div>
        </div>
    );
}