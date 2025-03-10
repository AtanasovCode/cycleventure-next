import Link from "next/link";

export default function ViewCartButton() {
    return (
        <Link
            href="/my-cart"
            className="w-full text-center cursor-pointer bg-gray-200 text-black p-2 rounded-md font-bold"
        >
            View Cart
        </Link>
    );
}