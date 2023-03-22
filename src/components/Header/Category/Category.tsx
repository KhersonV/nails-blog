import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import nailsArray, { NailsProps } from "../../../utils/nailsArray";
import CategorySelector from "./CategorySelector";

type CategoryParams = {
    category: string;
};
type Props ={}

const CategoryPage = (props:Props) => {
    const [category, setCategory] = useState<string>("");
    const [articles, setArticles] = useState<NailsProps[]>([]);
    const { category: categoryParam } = useParams<CategoryParams>();

    useEffect(() => {
        if (categoryParam) {
            setCategory(categoryParam);
        }
    }, [categoryParam]);

    useEffect(() => {
        if (category) {
            setArticles(
                nailsArray.filter((article) => article.title === category),
            );
        }
    }, [category]);

    const handleCategorySelect = (category: string) => {
        setCategory(category);
    };

    return (
        <div>
            <CategorySelector onSelect={handleCategorySelect} />
            <h1>{category}</h1>
            {articles.map((article: NailsProps) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <img src={article.picture} alt={article.title} />
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryPage;
