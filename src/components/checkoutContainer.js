import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import * as React from 'react';
import { useParams } from 'react-router';
import { getProductToRender } from './productContainer';
import data from "./products.json";

const calculateRealPrice = (originalPrice, discount) => {
  let finalPriceAfterDiscount = Math.round(originalPrice * (discount / 100));
  return originalPrice - finalPriceAfterDiscount;
}

const calculateFinalPrice = (products) => {
  let totalFinalPrice = 0;
  for (let product of products) {
    totalFinalPrice += calculateRealPrice(product.originalPrice, product.discount);
  }
  return totalFinalPrice;
}

const productItems = (products) => products.map(product => {
  return (
    <ListItem>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: "30%" }}
          image={product.thumbnail}
          alt={product.description}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {product.soldBy}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Typography variant="body2" color="text.secondary" component="div">
              <s>₹{product.originalPrice}</s> ₹{calculateRealPrice(product.originalPrice, product.discount)} <span style={{ color: "red" }}>{product.discount}% OFF</span>
            </Typography>
          </Box>
          
        </Box>
      </Card>
    </ListItem>
  )
})


export default function CheckoutContainer() {
  const {productId} = useParams();
  const products = data.products;
  const product = getProductToRender(products, productId)
  return (
    <Container maxWith="md">
      <Grid item xs={8}>
        <Stack spacing={2}>
          {productItems([product])}
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <h3>Price Breakup</h3>
        <Divider />
      </Grid>
      <Grid xs display="flex" justifyContent="space-between" alignItems="center" sx={{ "padding": "1.5em 0" }}>
        <Grid item xs={8}>
          Total Price:
        </Grid>
        <Grid item xs={4}>
          ₹ {calculateFinalPrice([product])}
        </Grid>

      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center" sx={{ "padding-bottom": "1.1em" }}>
        <Button variant="outlined">Proceed to Pay</Button>
      </Grid>
    </Container>
  );
}
