import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckoutContainer from "./components/checkoutContainer";
import ProductCatalogueContainer from "./components/productCatalogueContainer";
import ProductContainer from "./components/productContainer";
import ShopContainer from "./components/shopContainer";
import SimpleContainer from './components/simpleContainer.js';
import ThumbnailContainer from "./components/thumbnailContainer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SimpleContainer/>}>
                    <Route path="" element={<ShopContainer/>}/>
                    <Route path="products" element={<ProductCatalogueContainer/>}/>
                    <Route path="products/:productId" element={<ProductContainer/>}/>
                    <Route path="videos/:categoryId" element={<ThumbnailContainer/>}/>
                    <Route path="products/:productId/checkout" element={<CheckoutContainer/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
