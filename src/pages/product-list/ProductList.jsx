import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios"

import Navbar from "../../components/navbar/Navbar";

const ProductList = () => {

    const product_url = 'https://api.kalpav.com/api/v1/product/category/retail'
    const token = localStorage.getItem("token")

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('')
    
    const getProducts = async() => {
        try{
            const response = await axios.get(product_url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setProducts(response?.data?.response)
            setLoading(false)
        }catch(error){
            console.error(error)
            setError(error.message)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const filteredProducts = products?.filter((product) => product?.productCategory?.productCategoryName
    .toLowerCase()
    .includes(searchTerm.toLowerCase()))

    return(
        <div>
            <Navbar/>
            <Container > 
                <Typography variant="h4" sx={{marginBottom: 2}}>
                    Products List
                </Typography>

                <TextField 
                    label="Search products"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{marginBottom: 2}}
                    fullWidth
                    size="small"
                />

                {
                    loading ? (
                        <CircularProgress sx={{display: 'block', margin: 'auto' }}/>
                    ) : (
                        <Grid container spacing={3} sx={{marginBottom: "20px"}}>
                            {
                             filteredProducts.length === 0 ? (
                                 <Typography variant="h4" sx={{marginTop: "20px", marginLeft: "30px"}}>
                                     No products found..
                                 </Typography>
                             ) : (<>{
                                filteredProducts.map((product) => (
                                    <Grid item key={product.productCategory.productCategoryId} xs={12} sm={6} md={4}>
                                        <Card sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            background: "#1d4e89"
                                        }}>
                                            <CardMedia component="img" image={`${product.productCategory.productCategoryImage}`} alt="product pics" 
                                            sx={{ width: 100, padding: 1}}
                                            />
                                                <CardContent>
                                                <Typography sx={{color: "#fbd1a2"}}>
                                                    {product.productCategory.productCategoryName}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid> 
                                ))
                             }</>)
                            }
                        </Grid>
                    )
                }
            </Container>
        </div>
    )
}

export default ProductList;