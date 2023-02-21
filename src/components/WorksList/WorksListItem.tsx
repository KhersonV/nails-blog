import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./WorksListItem.scss";
import heart_bl from "../../images/heart-bl.svg";
import heart_red from "../../images/heart-red.svg";
import { useState } from 'react'

type Props = {
    title: string;
    description: string;
    picture: string;
    id: number;
};

const WorksListItem = ({ title, description, picture }: Props) => {

    const [imgSrc, setImgSrc] = useState<string>(heart_bl)


    const toogleHeart = () => {
        if(imgSrc === heart_bl) {setImgSrc(heart_red)}
        else{
        return setImgSrc(heart_bl)}
        
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
