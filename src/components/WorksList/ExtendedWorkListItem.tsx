import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./WorksListItem.scss";
import heart_bl from "../../images/heart-bl.svg";
import heart_red from "../../images/red-heart-icon.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addLike, removeLike } from "../../redux/likeReducer";
import { NailsProps } from "../../utils/nailsArray";

type Props = {};

const ExtendedWorkListItem = ({
    article,
    id,
    title,
    description,
    picture,
}: NailsProps) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id]);
    const dispatch = useAppDispatch();

    return (
        <Card variant="outlined">
            <CardContent>
                <img className="nailsPicture" src={picture} alt="" />
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="article"> {article} </div>
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
export default ExtendedWorkListItem;
