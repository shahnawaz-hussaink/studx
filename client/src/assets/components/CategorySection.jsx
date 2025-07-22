import categoryData from "../../Data/categoryData";
export default function CategorySection() {
    return (
        <div className="m-10">
            <div className="raleway text-4xl text-black font-semibold flex justify-center mb-6">
                Shop by Category
            </div>
            <div className="flex justify-center">
                <div className="overflow-x-auto flex snap-x snap-mandatory space-x-4 px-4">
                    {categoryData.map((category, index) => (
                        <div
                            key={index}
                            className="w-55 h-50 border border-gray-300 rounded-md snap-center raleway text-lg font-medium shrink-0 text-center flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200"
                        >
                            <img src={category.image} alt={category.name} className="h-25 w-30 mb-2" />
                            <p className="bottom mt-5">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
