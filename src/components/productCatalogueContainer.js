import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import data from "./products.json";

const customStyle = {
  paddingTop: "1em",
};

let cards = (products) =>
  products.map((product) => {
    let link = "/products/" + product.id;
    
    return (
      <Grid xs={6}>
        <Link to={link}>
          <Card>
            <CardMedia
              component="img"
              image={product.thumbnail}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                ₹ {product.originalPrice}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  });

const ProductCatalogueContainer = () => {

  let products = data.products;

  return (
    <Container style={customStyle}>
      <Grid container spacing={2}>
        {cards(products)}
      </Grid>
    </Container>
  );
};

export default ProductCatalogueContainer;
