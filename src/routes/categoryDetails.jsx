import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CategoryDetails = () => {
    const { categoryID } = useParams()
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categoryID}`)
            .then((res) => res.json())
            .then((data) => {
                setCategory(data.products)
                console.log(data.products)
            })
    }, [categoryID])

    const products = category.map((product) => (
        <div key={product.id} style={{ width: '30%', padding: '10px' }}>
            <Card className="cards" sx={{ minWidth: 275, minHeight: 200 }}>
                <CardMedia sx={{ height: 140 }} image={product.thumbnail} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/product/${product.id}`} size="small">
                        <Button size="small">Show details</Button>
                    </Link>
                    &emsp;
                </CardActions>
            </Card>
        </div>
    ))

    return (
        <>
            {/* <SearchBar /> */}
            <Typography variant="h3" component="div">
                {categoryID}
            </Typography>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: "30px" }}>{products}</div>
        </>
    )
}
export default CategoryDetails

