import { Button, Card, CardActions, CardContent } from "@mui/material";

type Props = {
    title: string;
    description: string;
    picture: string;
    id: number;
};
const ArticlesListItem = ({ title, description, picture }: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <img className="nailsPicture" src={picture} alt="" />
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to Wishlist</Button>
            </CardActions>
        </Card>
    );
};
export default ArticlesListItem;
