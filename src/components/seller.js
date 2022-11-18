import { Avatar, Rating } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Seller({fileName, name}) {
    return (
        <Card sx={{ width: 345, "text-align": "center", display: "flex", padding: 2}}>
            <Avatar
                alt="Tanmay Bhat"
                src={fileName}
                sx={{ width: 150, height: 150 }}
            />
            <div style={{padding: 2}}>
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        {name}
                    </Typography>
                </CardContent>
                <Rating name="read-only" value={5} readOnly />
            </div>
        </Card>
    );
}