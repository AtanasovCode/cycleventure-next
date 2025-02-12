
type ButtonProps = {
    selectedSize: string | null;
    setSizeError: (value: boolean) => void;
}

export default function CartButton({
    selectedSize,
    setSizeError,
}: ButtonProps) {

    const handleClick = () => {
        if(!selectedSize) {
            setSizeError(true);
            return;
        }
    }

    return (
        <input
            type="button"
            value="Add to Cart"
            className="w-full text-center p-3 bg-accent text-black mt-6 rounded-md"
            onClick={() => handleClick()}
        />
    );
}