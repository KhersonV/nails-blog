import nailsArray from "../../utils/nailsArray"
import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type NailsProps = {
    title: string;
    description: string;
    picture: string
    id: number;
  };

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                My works
            </Typography>

            <Grid container spacing={3}>
            {nailsArray.map(
                    ({
                        title,
                        description,
                        picture,
                        id,
                        
                    }: NailsProps) => (
                        <Grid key={id} item xs={12} sm={6} md={4}>
                            {' '}
                            <ProductsListItem
                                title={title}
                                description={description}
                                picture ={picture}
                                id={id}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList