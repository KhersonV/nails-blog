import { Button, Card, CardActions, CardContent } from '@mui/material'
import './WorksListItem.scss'



type Props = {
    title: string
    description: string
    picture: string
    id: number;
   
}

const WorksListItem = ({
    title,
    description,
    picture,
    id,
    }:
     Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <img className='nailsPicture' src={picture} alt="picture" /> 
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to Wishlist</Button>
            </CardActions>
        </Card>
    )
}
export default WorksListItem
