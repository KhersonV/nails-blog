import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./WorksListItem.scss";
import heart_bl from "../../images/heart-bl.svg";
import heart_red from "../../images/red-heart-icon.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addLike, removeLike } from "../../redux/likeReducer";

type Props = {
    title: string;
    description: string;
    picture: string;
    id: number;
};

const WorksListItem = ({ id, title, description, picture }: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id]);
    const dispatch = useAppDispatch();

    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <img className="nailsPicture" src={picture} alt="" />
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    <img
                        className="like"
                        src={isLiked ? heart_red : heart_bl}
                        alt=""
                    />
                </Button>
            </CardActions>
        </Card>
    );
};
export default WorksListItem;
