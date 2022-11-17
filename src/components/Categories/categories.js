import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import data from "../products.json";
import Category from "./category";

export default function Categories({type, categoryId}) {
    let {videoThumbnails, categoryFileNames} = data;
    let itemsToRender
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
                    <Category
                        fileName={thumbnail.fileName}
                        name={thumbnail.name}
                    />
                    </Link>
                </ListItem>)
            })
    }

    return (
        <React.Fragment>
            {(type === "CATEGORY") && (<div>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Categories
                </Typography>
            </div>)}

            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                {itemsToRender}
            </List>
        </React.Fragment>
    );
}