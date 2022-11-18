import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import data from "../products.json";
import Seller from "../seller";
import Video from "../video";
import Category from "./category";

export default function Categories({type, categoryId}) {
    let {videoThumbnails, categoryFileNames} = data;
    let itemsToRender, sellersToRender
    if (type === "CATEGORY") {
        itemsToRender = categoryFileNames.map(category => {
            let link = "/videos/" + category.id;
            return (
                <ListItem key={category.id} alignItems="center">
                    <Link to={link}>
                        <Category
                            fileName={category.fileName}
                            name={category.name}
                        />
                    </Link>
                </ListItem>
            )
        });
    } else {
        itemsToRender = videoThumbnails.filter(thumbNail => thumbNail.categoryId === categoryId)
            .map(thumbnail => {
                let productLink = "/products/" + thumbnail.productId
                return (<ListItem key={thumbnail.id} alignItems="flex-start">
                    <Link to={productLink}>
                        <Video
                            fileName={thumbnail.fileName}
                            name={thumbnail.name}
                        />
                    </Link>
                </ListItem>)
            })
        sellersToRender =
            <div>
                <Seller
                    fileName="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4da5BFq96USph0wGXAPgzeQqU_rQ2tbcWykXBr839A&s"
                    name="Tanmay Bhat"
                />
                <Seller
                    fileName="https://www.liveclefs.com/wp-content/uploads/2020/01/Joel-Dsouza-750x450.jpg"
                    name="Joel Dsouza"
                />
            </div>

    }

    return (
        <React.Fragment>
            {(type === "CATEGORY") && (<div>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Categories
                </Typography>
            </div>)}
            {(type !== "CATEGORY") && (<div>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Live Videos
                </Typography>
            </div>)}

            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                {itemsToRender}
            </List>

            {(type !== "CATEGORY") && (<div>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Nearby Sellers
                </Typography>
            </div>)}

            {(type !== "CATEGORY") && sellersToRender}

        </React.Fragment>
    );
}