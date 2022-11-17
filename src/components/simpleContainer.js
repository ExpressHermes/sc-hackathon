import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { Outlet } from "react-router-dom";
import FixedBottomNavigation from './bottomNav';
import MenuAppBar from './topNav';

const customStyle = {
    paddingTop: "1.5em",
}

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md" style={customStyle}>
                <MenuAppBar/>
                <Outlet/>
                <FixedBottomNavigation/>
            </Container>
        </React.Fragment>
    );
}