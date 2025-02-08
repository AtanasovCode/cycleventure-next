import { useRouter } from "next/navigation";
import { Product } from "@/app/types/Product";
import Image from "next/image";

type CardType = {
    product: Product;
}

export default function Card({ product }: CardType) {

    const router = useRouter();

    const handleClick = () => {
        const formattedName = product.name?.toLowerCase().replace(/ /g, '-');
        router.push(`/product-preview?name=${formattedName}&id=${product.id}`);
    }

    return (
        <div
            className="flex flex-col items-start justify-center cursor-pointer"
            onClick={() => handleClick()}
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