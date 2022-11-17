import { Avatar } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';


export default function Seller({fileName, name}) {
    return (
        <Card sx={{ width: 345, "text-align": "center" }}>
            <Avatar
                alt="Tanmay Bhat"
                src={fileName}
                sx={{ width: 150, height: 150 }}
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}