import { Button, Grid, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import data from "./products.json";
const customStyle = {
  paddingTop: "1em",
};

export function getProductToRender(products, productId) {
  for (let product of products) {
    if (product.id === Number(productId)) {
      return product;
    }
  }
}

let renderProduct = (product) => {
  if (product) {
    let link = "/products/" + product.id + "/checkout/";
    return (
      <Grid container spacing={1}>
        <Grid xs={12}>
          <img
            height={400}
            width={275}
            src={product.thumbnail}
            alt={product.description}
          />
        </Grid>
        <Grid xs={12}>
          <Stack>
            <Typography variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="h7">{product.description}</Typography>
            <Typography variant="caption">Seller: {product.soldBy}</Typography>
            <Typography variant="h6">₹{product.originalPrice}</Typography>
          </Stack>
        </Grid>
        <Grid
          container
          xs={12}
          alighItems="center"
          justifyContent="space-around"
        >
          {/* <Grid xs={6}>
            <Button variant="outlined">Add to Cart</Button>
          </Grid> */}
          <Grid xs={12}>
            <Link to={link}>
            <Button variant="outlined">Buy now</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <h1>Error in rendering product: {product}</h1>;
  }
};

const ProductContainer = (props) => {
  const { productId } = useParams();
  const products = data.products;
  const productToRender = getProductToRender(products, productId);
  return (
    <Container style={customStyle}>{renderProduct(productToRender)}</Container>
  );
};

export default ProductContainer;
