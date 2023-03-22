import nailsArray from "../../../utils/nailsArray";

type CategorySelectorProps = {
    onSelect: (category: string) => void;
};

const CategorySelector = ({ onSelect }: CategorySelectorProps) => {
    const categories = Array.from(
        new Set(nailsArray.map((article) => article.title)),
    );

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        onSelect(event.target.value);
    };

    return (
        <div>
            <select onChange={handleSelectChange}>
                <option value="">Please select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
