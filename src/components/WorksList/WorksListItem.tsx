import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./WorksListItem.scss";
import heart_bl from "../../images/heart-bl.svg";
import heart_red from "../../images/red-heart-icon.svg";
import { useState } from "react";

type Props = {
    title: string;
    description: string;
    picture: string;
    id: number;
};

const WorksListItem = ({ title, description, picture }: Props) => {
    const [imgSrc, setImgSrc] = useState<string>(heart_bl);

    const [liked, setLiked] = useState<boolean>();

    const toogleHeart = () => {
        if (!liked) {
            setLiked((prevState) => !prevState);
            setImgSrc(heart_red);
        } else {
            setLiked((prevState) => !prevState);
            setImgSrc(heart_bl);
        }
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <img className="nailsPicture" src={picture} alt="" />
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button onClick={() => toogleHeart()} variant="outlined">
                    <img className="like" src={imgSrc} alt="heart-bl" />
                </Button>
            </CardActions>
        </Card>
    );
};
export default WorksListItem;
