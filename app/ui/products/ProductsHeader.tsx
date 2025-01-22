import DropdownSort from "@/app/ui/products/DropdownSort";

export default function ProductsHeader() {
    return (
        <div className="w-full flex items-center justify-start">
            <div className="flex items-center justify-center gap-4">
                <div className="font-sm">
                    Sort By:
                </div>
                <DropdownSort />
            </div>
        </div>
    );
}