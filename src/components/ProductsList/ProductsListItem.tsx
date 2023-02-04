import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import nailsArray from '../../utils/nailsArray'

type Props = {
    title: string
    description: string
    picture: string
    id: number;
   
}

const ProductsListItem = ({
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
                <div className="product-features" > {picture}</div>
                
                <div className="product-price">{id}</div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
